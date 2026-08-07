import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import Lead from "@/models/Lead";
import { verifyToken } from "@/lib/jwt";

/* =========================
   ADMIN AUTHENTICATION
========================= */

const authenticateAdmin = (req) => {
  const token = req.cookies.get("admin_token")?.value;

  if (!token) {
    return null;
  }

  try {
    return verifyToken(token);
  } catch (error) {
    console.error("ADMIN TOKEN ERROR:", error);
    return null;
  }
};

/* =========================
   GET ALL LEADS
========================= */

export async function GET(req) {
  try {
    await dbConnect();

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

    const leads = await Lead.find()
      .sort({
        createdAt: -1,
      })
      .lean();

    return NextResponse.json({
      success: true,
      leads,
      total: leads.length,
    });
  } catch (error) {
    console.error("GET LEADS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch leads.",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
   CREATE NEW LEAD
========================= */

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const { name, email, phone, message } = body;

    /* =========================
       VALIDATION
    ========================= */

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, phone and message are required.",
        },
        {
          status: 400,
        },
      );
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPhone = String(phone).trim();
    const cleanMessage = String(message).trim();

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
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
       CREATE LEAD
    ========================= */

    const lead = await Lead.create({
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      message: cleanMessage,
      status: "New",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        lead,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("CREATE LEAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit enquiry.",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
   UPDATE LEAD STATUS
========================= */

export async function PATCH(req) {
  try {
    await dbConnect();

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

    const { id, status } = body;

    /* =========================
       VALIDATION
    ========================= */

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead ID is required.",
        },
        {
          status: 400,
        },
      );
    }

    const allowedStatuses = ["New", "Contacted", "Closed"];

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid lead status.",
        },
        {
          status: 400,
        },
      );
    }

    /* =========================
       UPDATE
    ========================= */

    const lead = await Lead.findByIdAndUpdate(
      id,
      {
        status,
      },
      {
        new: true,
        runValidators: true,
      },
    ).lean();

    if (!lead) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead status updated successfully.",
      lead,
    });
  } catch (error) {
    console.error("UPDATE LEAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update lead.",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
   DELETE LEAD
========================= */

export async function DELETE(req) {
  try {
    await dbConnect();

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

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead ID is required.",
        },
        {
          status: 400,
        },
      );
    }

    const lead = await Lead.findByIdAndDelete(id);

    if (!lead) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE LEAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete lead.",
      },
      {
        status: 500,
      },
    );
  }
}
