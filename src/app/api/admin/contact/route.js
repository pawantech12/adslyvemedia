import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import { verifyToken } from "@/lib/jwt";

/* =========================
   ADMIN AUTHENTICATION
========================= */

const authenticateAdmin = (req) => {
  const token = req.cookies.get("admin_token")?.value;

  if (!token) {
    return null;
  }

  return verifyToken(token);
};

/* =========================
   GET CONTACT
========================= */

export async function GET() {
  try {
    await dbConnect();

    let contact = await Contact.findOne().lean();

    if (!contact) {
      contact = await Contact.create({
        phone: "+91 XXXXX XXXXX",
        email: "info@adslyvemedia.com",
        address: "Gurugram, India",
        linkedin: "https://linkedin.com/company/adslyvemedia",
        instagram: "https://instagram.com/adslyvemedia",
        facebook: "https://facebook.com/adslyvemedia",
        whatsapp: "https://wa.me/91XXXXXXXXXX",
      });

      contact = contact.toObject();
    }

    return NextResponse.json({
      success: true,
      contact,
    });
  } catch (error) {
    console.error("GET CONTACT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch contact information.",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
   UPDATE CONTACT
========================= */

export async function PUT(req) {
  try {
    await dbConnect();

    /* =========================
       ADMIN AUTH
    ========================= */

    const admin = authenticateAdmin(req);

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        {
          status: 401,
        },
      );
    }

    const body = await req.json();

    const { phone, email, address, linkedin, instagram, facebook, whatsapp } =
      body;

    /* =========================
       CLEAN DATA
    ========================= */

    const cleanPhone = String(phone || "").trim();
    const cleanEmail = String(email || "")
      .trim()
      .toLowerCase();
    const cleanAddress = String(address || "").trim();

    const cleanLinkedin = String(linkedin || "").trim();
    const cleanInstagram = String(instagram || "").trim();
    const cleanFacebook = String(facebook || "").trim();
    const cleanWhatsapp = String(whatsapp || "").trim();

    /* =========================
       REQUIRED VALIDATION
    ========================= */

    if (!cleanPhone || !cleanEmail || !cleanAddress) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone, email and address are required.",
        },
        {
          status: 400,
        },
      );
    }

    /* =========================
       EMAIL VALIDATION
    ========================= */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    /* =========================
       URL VALIDATION
    ========================= */

    const validateUrl = (value) => {
      if (!value) return true;

      try {
        const url = new URL(value);

        return url.protocol === "http:" || url.protocol === "https:";
      } catch {
        return false;
      }
    };

    const socialLinks = [
      {
        name: "LinkedIn",
        value: cleanLinkedin,
      },
      {
        name: "Instagram",
        value: cleanInstagram,
      },
      {
        name: "Facebook",
        value: cleanFacebook,
      },
      {
        name: "WhatsApp",
        value: cleanWhatsapp,
      },
    ];

    for (const social of socialLinks) {
      if (!validateUrl(social.value)) {
        return NextResponse.json(
          {
            success: false,
            message: `${social.name} must be a valid URL.`,
          },
          {
            status: 400,
          },
        );
      }
    }

    /* =========================
       FIND EXISTING CONTACT
    ========================= */

    let contact = await Contact.findOne();

    /* =========================
       CREATE IF NOT EXISTS
    ========================= */

    if (!contact) {
      contact = await Contact.create({
        phone: cleanPhone,
        email: cleanEmail,
        address: cleanAddress,
        linkedin: cleanLinkedin,
        instagram: cleanInstagram,
        facebook: cleanFacebook,
        whatsapp: cleanWhatsapp,
      });
    } else {
      /* =========================
         UPDATE EXISTING
      ========================= */

      contact.phone = cleanPhone;
      contact.email = cleanEmail;
      contact.address = cleanAddress;
      contact.linkedin = cleanLinkedin;
      contact.instagram = cleanInstagram;
      contact.facebook = cleanFacebook;
      contact.whatsapp = cleanWhatsapp;

      await contact.save();
    }

    return NextResponse.json({
      success: true,
      message: "Contact information updated successfully.",
      contact,
    });
  } catch (error) {
    console.error("UPDATE CONTACT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update contact information.",
      },
      {
        status: 500,
      },
    );
  }
}
