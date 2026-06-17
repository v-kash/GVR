
import nodemailer from "nodemailer";

// ── Email config ──────────────────────────────────────
const OWNER_EMAIL = "gvrfreshfoodsprivatelimited@gmail.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gvrfreshfoods.com";
const LOGO_URL = `${SITE_URL}/GVRLogo.png`;

// ── Transporter ───────────────────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // Gmail App Password (not account password)
    },
  });
}

// ── Shared email wrapper ──────────────────────────────
function emailWrapper(bodyContent) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>GVR Fresh Foods</title>
</head>
<body style="margin:0;padding:0;background:#f5f0e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e7;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e8e0d4;">

          <!-- Header -->
          <tr>
            <td style="background:#3f4a22;padding:28px 40px;text-align:center;">
              <img src="${LOGO_URL}" alt="GVR Fresh Foods" height="52" style="display:inline-block;height:52px;width:auto;" />
              <p style="margin:10px 0 0;color:#c5db8e;font-size:10px;letter-spacing:3px;text-transform:uppercase;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                Farm Fresh · Quality First
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 28px;">
              ${bodyContent}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f5f0e7;border-top:1px solid #e8e0d4;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#8b7355;letter-spacing:1px;">
                GVR Fresh Foods Private Limited
              </p>
              <p style="margin:4px 0 0;font-size:10px;color:#b0a090;">
                Tamil Nadu, India &nbsp;·&nbsp; +91 94484 53609 &nbsp;·&nbsp;
                <a href="mailto:${OWNER_EMAIL}" style="color:#6E7E45;text-decoration:none;">${OWNER_EMAIL}</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Owner notification email ──────────────────────────
function ownerEmailHTML({ name, phone, email, subject, message }) {
  const body = `
    <h2 style="margin:0 0 4px;font-size:22px;color:#241A12;font-weight:700;">
      New Enquiry Received
    </h2>
    <p style="margin:0 0 24px;font-size:13px;color:#8b7355;letter-spacing:1px;text-transform:uppercase;">
      via GVR Fresh Foods website
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">

      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f0ece4;">
          <p style="margin:0;font-size:11px;color:#8b7355;text-transform:uppercase;letter-spacing:1px;">Full Name</p>
          <p style="margin:4px 0 0;font-size:15px;color:#241A12;font-weight:600;">${name}</p>
        </td>
      </tr>

      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f0ece4;">
          <p style="margin:0;font-size:11px;color:#8b7355;text-transform:uppercase;letter-spacing:1px;">Phone</p>
          <p style="margin:4px 0 0;font-size:15px;color:#241A12;font-weight:600;">
            <a href="tel:${phone}" style="color:#4D5B2A;text-decoration:none;">${phone}</a>
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f0ece4;">
          <p style="margin:0;font-size:11px;color:#8b7355;text-transform:uppercase;letter-spacing:1px;">Email</p>
          <p style="margin:4px 0 0;font-size:15px;color:#241A12;font-weight:600;">
            <a href="mailto:${email}" style="color:#4D5B2A;text-decoration:none;">${email}</a>
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f0ece4;">
          <p style="margin:0;font-size:11px;color:#8b7355;text-transform:uppercase;letter-spacing:1px;">Subject</p>
          <p style="margin:4px 0 0;font-size:15px;color:#241A12;font-weight:600;">${subject}</p>
        </td>
      </tr>

      <tr>
        <td style="padding:12px 0;">
          <p style="margin:0;font-size:11px;color:#8b7355;text-transform:uppercase;letter-spacing:1px;">Message</p>
          <p style="margin:8px 0 0;font-size:14px;color:#4f4337;line-height:1.7;background:#f9f6f0;border-left:3px solid #6E7E45;padding:12px 16px;border-radius:0 4px 4px 0;">
            ${message.replace(/\n/g, "<br/>")}
          </p>
        </td>
      </tr>

    </table>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
      <tr>
        <td align="center">
          <a href="mailto:${email}"
            style="display:inline-block;background:#4D5B2A;color:#ffffff;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:13px 32px;border-radius:6px;">
            Reply to ${name}
          </a>
        </td>
      </tr>
    </table>
  `;
  return emailWrapper(body);
}

// ── Customer confirmation email ───────────────────────
function customerEmailHTML({ name, subject }) {
  const body = `
    <h2 style="margin:0 0 8px;font-size:22px;color:#241A12;font-weight:700;">
      Thank you, ${name}!
    </h2>
    <p style="margin:0 0 24px;font-size:14px;color:#5f5146;line-height:1.7;">
      We've received your enquiry and our team will get back to you within
      <strong style="color:#4D5B2A;">24 hours</strong>.
    </p>

    <div style="background:#f5f0e7;border-radius:6px;padding:20px 24px;margin-bottom:24px;border-left:3px solid #6E7E45;">
      <p style="margin:0 0 6px;font-size:11px;color:#8b7355;text-transform:uppercase;letter-spacing:1px;">Your enquiry subject</p>
      <p style="margin:0;font-size:15px;color:#241A12;font-weight:600;">${subject}</p>
    </div>

    <p style="margin:0 0 8px;font-size:14px;color:#5f5146;line-height:1.7;">
      In the meantime, feel free to reach us directly:
    </p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0ece4;">
          <p style="margin:0;font-size:13px;color:#4f4337;">
            📞 &nbsp;<a href="tel:+919448453609" style="color:#4D5B2A;text-decoration:none;font-weight:600;">+91 94484 53609</a>
            <span style="color:#b0a090;font-size:11px;"> &nbsp;Mon – Sat, 9 AM – 6 PM</span>
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0;">
          <p style="margin:0;font-size:13px;color:#4f4337;">
            ✉️ &nbsp;<a href="mailto:${OWNER_EMAIL}" style="color:#4D5B2A;text-decoration:none;font-weight:600;">${OWNER_EMAIL}</a>
          </p>
        </td>
      </tr>
    </table>

    <div style="margin-top:28px;padding:16px 20px;background:#3f4a22;border-radius:6px;text-align:center;">
      <p style="margin:0;font-size:13px;color:#c5db8e;font-style:italic;">
        "We don't just deliver eggs — we deliver trust, nutrition and happiness."
      </p>
    </div>
  `;
  return emailWrapper(body);
}

// ── Validation ────────────────────────────────────────
function validate({ name, phone, email, subject, message }) {
  const errors = {};

  if (!name || name.trim().length < 2)
    errors.name = "Please enter your full name (at least 2 characters).";

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone || !phoneRegex.test(phone.replace(/\s/g, "")))
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email))
    errors.email = "Please enter a valid email address.";

  if (!subject || subject === "Select subject")
    errors.subject = "Please select a subject.";

  if (!message || message.trim().length < 10)
    errors.message = "Please enter a message (at least 10 characters).";

  return errors;
}

// ── API Route ─────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    // Server-side validation
    const errors = validate({ name, phone, email, subject, message });
    if (Object.keys(errors).length > 0) {
      return Response.json({ success: false, errors }, { status: 422 });
    }

    const transporter = createTransporter();

    // Send both emails concurrently
    await Promise.all([
      // 1. Notify owner
      transporter.sendMail({
        from: `"GVR Fresh Foods Website" <${process.env.SMTP_USER}>`,
        to: OWNER_EMAIL,
        subject: `New Enquiry: ${subject} — from ${name}`,
        html: ownerEmailHTML({ name, phone, email, subject, message }),
      }),
      // 2. Confirm to customer
      transporter.sendMail({
        from: `"GVR Fresh Foods" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `We received your enquiry — GVR Fresh Foods`,
        html: customerEmailHTML({ name, subject }),
      }),
    ]);

    return Response.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}


