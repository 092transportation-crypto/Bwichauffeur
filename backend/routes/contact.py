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
    build_contact_admin_email,
    build_contact_customer_email,
)

load_dotenv()

router = APIRouter(prefix="/contact", tags=["contact"])

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]


class ContactMessageCreate(BaseModel):
    full_name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default="", max_length=40)
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=4000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str
    full_name: str
    email: EmailStr
    phone: str
    subject: str
    message: str
    created_at: str


@router.post("", response_model=ContactMessage, status_code=201)
async def create_contact_message(payload: ContactMessageCreate):
    try:
        doc = {
            "id": str(uuid.uuid4()),
            "full_name": payload.full_name.strip(),
            "email": payload.email.lower(),
            "phone": (payload.phone or "").strip(),
            "subject": payload.subject.strip(),
            "message": payload.message.strip(),
            "created_at": datetime.now(timezone.utc).isoformat(),
        }
        await db.contact_messages.insert_one(doc)
        doc.pop("_id", None)

        # Fire-and-forget email notifications
        notify_to = os.environ.get("NOTIFICATION_EMAIL")
        if notify_to:
            subj, text, html = build_contact_admin_email(doc)
            send_email_async(notify_to, subj, text, html)
        subj, text, html = build_contact_customer_email(doc)
        send_email_async(doc["email"], subj, text, html)

        return ContactMessage(**doc)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save message: {e}")


@router.get("", response_model=List[ContactMessage])
async def list_contact_messages(limit: int = 100):
    cursor = db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).limit(limit)
    items = await cursor.to_list(length=limit)
    return [ContactMessage(**item) for item in items]
