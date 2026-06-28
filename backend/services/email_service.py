"""Lightweight Gmail SMTP email service for sending quote-request notifications.

Uses stdlib smtplib + email — no third-party SDK required. Configured via env vars:
  SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, NOTIFICATION_EMAIL
"""
import os
import smtplib
import ssl
import logging
from email.message import EmailMessage
from concurrent.futures import ThreadPoolExecutor

logger = logging.getLogger(__name__)

_executor = ThreadPoolExecutor(max_workers=2, thread_name_prefix="email")


def _send_sync(to_addr: str, subject: str, text_body: str, html_body: str) -> None:
    host = os.environ['SMTP_HOST']
    port = int(os.environ['SMTP_PORT'])
    user = os.environ['SMTP_USER']
    password = os.environ['SMTP_PASSWORD']

    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = f"BWI Chauffeur <{user}>"
    msg['To'] = to_addr
    msg.set_content(text_body)
    msg.add_alternative(html_body, subtype='html')

    ctx = ssl.create_default_context()
    with smtplib.SMTP(host, port, timeout=15) as server:
        server.ehlo()
        server.starttls(context=ctx)
        server.login(user, password)
        server.send_message(msg)


def send_email_async(to_addr: str, subject: str, text_body: str, html_body: str) -> None:
    """Fire-and-forget email send. Errors are logged, never re-raised, so a flaky
    SMTP server cannot block or fail the quote-submission API response."""

    def _task():
        try:
            _send_sync(to_addr, subject, text_body, html_body)
            logger.info("Email sent to %s subj=%r", to_addr, subject)
        except Exception as e:
            logger.exception("Email to %s failed: %s", to_addr, e)

    _executor.submit(_task)


# ----------------- Templates -----------------

GOLD = "#D4AF37"


def _row(label: str, value: str) -> str:
    if not value:
        return ""
    return (
        f'<tr><td style="padding:8px 14px;border-bottom:1px solid #2a2a2a;color:#999;'
        f'font-size:13px;width:160px;">{label}</td>'
        f'<td style="padding:8px 14px;border-bottom:1px solid #2a2a2a;color:#fff;'
        f'font-size:14px;">{value}</td></tr>'
    )


def build_admin_email(quote: dict) -> tuple[str, str, str]:
    subject = f"New Quote Request — {quote.get('full_name', 'Unknown')}"
    rows = "".join([
        _row("Name", quote.get("full_name", "")),
        _row("Phone", quote.get("phone", "")),
        _row("Email", quote.get("email", "")),
        _row("Service Type", quote.get("service_type", "")),
        _row("Vehicle Preference", quote.get("vehicle_preference", "")),
        _row("Pickup", quote.get("pickup_location", "")),
        _row("Drop-off", quote.get("dropoff_location", "")),
        _row("Date / Time", quote.get("pickup_datetime", "")),
        _row("Passengers", str(quote.get("passengers", ""))),
        _row("Heard About Us From", quote.get("heard_from", "")),
        _row("Notes", quote.get("notes", "")),
        _row("Submitted", quote.get("created_at", "")),
    ])
    html = f"""
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a0a;padding:30px;">
      <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid {GOLD};border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,{GOLD},#F4E5C3);padding:20px;text-align:center;">
          <h1 style="margin:0;color:#000;font-size:22px;letter-spacing:1px;">BWI CHAUFFEUR</h1>
          <p style="margin:4px 0 0;color:#000;font-size:13px;">New Quote Request</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">{rows}</table>
        <div style="padding:18px;text-align:center;background:#0a0a0a;">
          <a href="tel:{quote.get('phone', '')}" style="display:inline-block;padding:10px 22px;background:{GOLD};color:#000;font-weight:bold;text-decoration:none;border-radius:6px;">Call Customer Back</a>
        </div>
      </div>
    </div>
    """
    text = "\n".join([
        "New Quote Request - BWI Chauffeur",
        "",
        f"Name: {quote.get('full_name','')}",
        f"Phone: {quote.get('phone','')}",
        f"Email: {quote.get('email','')}",
        f"Service: {quote.get('service_type','')}",
        f"Vehicle Preference: {quote.get('vehicle_preference','')}",
        f"Pickup: {quote.get('pickup_location','')}",
        f"Drop-off: {quote.get('dropoff_location','')}",
        f"Date/Time: {quote.get('pickup_datetime','')}",
        f"Passengers: {quote.get('passengers','')}",
        f"Heard About Us From: {quote.get('heard_from','')}",
        f"Notes: {quote.get('notes','')}",
        f"Submitted: {quote.get('created_at','')}",
    ])
    return subject, text, html


def build_customer_email(quote: dict) -> tuple[str, str, str]:
    name = quote.get("full_name", "there").split(" ")[0] or "there"
    subject = "We received your BWI Chauffeur quote request"
    html = f"""
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a0a;padding:30px;">
      <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid {GOLD};border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,{GOLD},#F4E5C3);padding:24px;text-align:center;">
          <h1 style="margin:0;color:#000;font-size:24px;letter-spacing:1px;">BWI CHAUFFEUR</h1>
          <p style="margin:6px 0 0;color:#000;font-size:13px;">Your Ride. Our Priority.</p>
        </div>
        <div style="padding:30px;color:#fff;">
          <h2 style="color:{GOLD};margin:0 0 16px;font-size:20px;">Hi {name},</h2>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            Thank you for choosing BWI Chauffeur. We&rsquo;ve received your quote request and a
            reservation specialist will reach out shortly with your custom quote.
          </p>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            <strong style="color:{GOLD};">Need immediate assistance?</strong><br/>
            Call us 24/7 at <a href="tel:+18776790100" style="color:{GOLD};">877-679-0100</a>
          </p>
          <div style="margin:24px 0;padding:16px;background:#0a0a0a;border-left:3px solid {GOLD};border-radius:4px;">
            <p style="margin:0;color:#999;font-size:13px;">Trip summary:</p>
            <p style="margin:6px 0 0;color:#fff;font-size:14px;">
              {quote.get('pickup_location','')} &rarr; {quote.get('dropoff_location','') or '—'}<br/>
              {quote.get('pickup_datetime','')} &middot; {quote.get('passengers','')} passenger(s)
            </p>
          </div>
          <p style="color:#666;font-size:12px;margin-top:30px;">
            BWI Chauffeur &middot; Serving Maryland, Delaware &amp; the DMV<br/>
            <a href="https://bwichauffeur.com" style="color:{GOLD};">bwichauffeur.com</a>
          </p>
        </div>
      </div>
    </div>
    """
    text = (
        f"Hi {name},\n\n"
        "Thank you for choosing BWI Chauffeur. We've received your quote request and "
        "a reservation specialist will reach out shortly with your custom quote.\n\n"
        "For immediate assistance, call us 24/7 at 877-679-0100.\n\n"
        f"Trip: {quote.get('pickup_location','')} -> {quote.get('dropoff_location','') or '—'}\n"
        f"When: {quote.get('pickup_datetime','')}\n"
        f"Passengers: {quote.get('passengers','')}\n\n"
        "— BWI Chauffeur\nbwichauffeur.com"
    )
    return subject, text, html


def build_contact_admin_email(msg: dict) -> tuple[str, str, str]:
    subject = f"New Contact Message — {msg.get('subject', 'No subject')}"
    rows = "".join([
        _row("Name", msg.get("full_name", "")),
        _row("Email", msg.get("email", "")),
        _row("Phone", msg.get("phone", "")),
        _row("Subject", msg.get("subject", "")),
        _row("Submitted", msg.get("created_at", "")),
    ])
    message_html = (msg.get("message", "") or "").replace("\n", "<br/>")
    html = f"""
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a0a;padding:30px;">
      <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid {GOLD};border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,{GOLD},#F4E5C3);padding:20px;text-align:center;">
          <h1 style="margin:0;color:#000;font-size:22px;letter-spacing:1px;">BWI CHAUFFEUR</h1>
          <p style="margin:4px 0 0;color:#000;font-size:13px;">New Contact Message</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">{rows}</table>
        <div style="padding:18px 22px;background:#0a0a0a;">
          <p style="margin:0 0 8px;color:#999;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
          <div style="color:#fff;font-size:14px;line-height:1.6;border-left:3px solid {GOLD};padding:10px 14px;background:#0f0f0f;border-radius:4px;">{message_html}</div>
        </div>
        <div style="padding:18px;text-align:center;background:#0a0a0a;">
          <a href="mailto:{msg.get('email','')}" style="display:inline-block;padding:10px 22px;background:{GOLD};color:#000;font-weight:bold;text-decoration:none;border-radius:6px;">Reply to Customer</a>
        </div>
      </div>
    </div>
    """
    text = "\n".join([
        "New Contact Message - BWI Chauffeur",
        "",
        f"Name: {msg.get('full_name','')}",
        f"Email: {msg.get('email','')}",
        f"Phone: {msg.get('phone','')}",
        f"Subject: {msg.get('subject','')}",
        f"Submitted: {msg.get('created_at','')}",
        "",
        "Message:",
        msg.get("message", ""),
    ])
    return subject, text, html


def build_contact_customer_email(msg: dict) -> tuple[str, str, str]:
    name = (msg.get("full_name", "there") or "there").split(" ")[0] or "there"
    subject = "We received your message — BWI Chauffeur"
    html = f"""
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a0a;padding:30px;">
      <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid {GOLD};border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,{GOLD},#F4E5C3);padding:24px;text-align:center;">
          <h1 style="margin:0;color:#000;font-size:24px;letter-spacing:1px;">BWI CHAUFFEUR</h1>
          <p style="margin:6px 0 0;color:#000;font-size:13px;">Your Ride. Our Priority.</p>
        </div>
        <div style="padding:30px;color:#fff;">
          <h2 style="color:{GOLD};margin:0 0 16px;font-size:20px;">Hi {name},</h2>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            Thanks for reaching out. We&rsquo;ve received your message and a member of our
            team will get back to you within one business day.
          </p>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            <strong style="color:{GOLD};">Need immediate assistance?</strong><br/>
            Call us 24/7 at <a href="tel:+18776790100" style="color:{GOLD};">877-679-0100</a>
          </p>
          <p style="color:#666;font-size:12px;margin-top:30px;">
            BWI Chauffeur &middot; Serving Maryland, Delaware &amp; the DMV<br/>
            <a href="https://bwichauffeur.com" style="color:{GOLD};">bwichauffeur.com</a>
          </p>
        </div>
      </div>
    </div>
    """
    text = (
        f"Hi {name},\n\n"
        "Thanks for reaching out. We've received your message and a member of our "
        "team will get back to you within one business day.\n\n"
        "For immediate assistance, call us 24/7 at 877-679-0100.\n\n"
        "— BWI Chauffeur\nbwichauffeur.com"
    )
    return subject, text, html
