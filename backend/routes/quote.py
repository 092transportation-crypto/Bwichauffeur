from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import Optional, List
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timezone
from dotenv import load_dotenv
import os
import uuid

from services.email_service import (
    send_email_async,
    build_admin_email,
    build_customer_email,
)

load_dotenv()

router = APIRouter(prefix="/quote-requests", tags=["quote"])

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


class QuoteRequestCreate(BaseModel):
    full_name: str = Field(..., min_length=1, max_length=120)
    phone: str = Field(..., min_length=5, max_length=40)
    email: EmailStr
    pickup_location: str = Field(..., min_length=1, max_length=300)
    dropoff_location: Optional[str] = Field(default="", max_length=300)
    pickup_datetime: Optional[str] = Field(default="", max_length=60)
    passengers: Optional[int] = Field(default=1, ge=1, le=50)
    service_type: Optional[str] = Field(default="airport", max_length=60)
    vehicle_preference: Optional[str] = Field(default="", max_length=80)
    heard_from: Optional[str] = Field(default="", max_length=60)
    notes: Optional[str] = Field(default="", max_length=2000)


class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str
    full_name: str
    phone: str
    email: EmailStr
    pickup_location: str
    dropoff_location: str
    pickup_datetime: str
    passengers: int
    service_type: str
    vehicle_preference: str = ""
    heard_from: str = ""
    notes: str
    created_at: str


@router.post("", response_model=QuoteRequest, status_code=201)
async def create_quote_request(payload: QuoteRequestCreate):
    try:
        doc = {
            "id": str(uuid.uuid4()),
            "full_name": payload.full_name.strip(),
            "phone": payload.phone.strip(),
            "email": payload.email.lower(),
            "pickup_location": payload.pickup_location.strip(),
            "dropoff_location": (payload.dropoff_location or "").strip(),
            "pickup_datetime": (payload.pickup_datetime or "").strip(),
            "passengers": payload.passengers or 1,
            "service_type": (payload.service_type or "airport").strip(),
            "vehicle_preference": (payload.vehicle_preference or "").strip(),
            "heard_from": (payload.heard_from or "").strip(),
            "notes": (payload.notes or "").strip(),
            "created_at": datetime.now(timezone.utc).isoformat(),
        }
        await db.quote_requests.insert_one(doc)
        # Strip MongoDB-injected _id before returning
        doc.pop("_id", None)

        # Fire-and-forget email notifications (errors logged, never raised)
        notify_to = os.environ.get("NOTIFICATION_EMAIL")
        if notify_to:
            admin_subj, admin_text, admin_html = build_admin_email(doc)
            send_email_async(notify_to, admin_subj, admin_text, admin_html)
        cust_subj, cust_text, cust_html = build_customer_email(doc)
        send_email_async(doc["email"], cust_subj, cust_text, cust_html)

        return QuoteRequest(**doc)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save quote: {e}")


@router.get("", response_model=List[QuoteRequest])
async def list_quote_requests(limit: int = 100):
    cursor = db.quote_requests.find({}, {"_id": 0}).sort("created_at", -1).limit(limit)
    items = await cursor.to_list(length=limit)
    return [QuoteRequest(**item) for item in items]
