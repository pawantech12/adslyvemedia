import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import About from "@/models/About";
import { verifyToken } from "@/lib/jwt";

// ==========================================
// GET - Public About Content
// ==========================================

export async function GET() {
  try {
    await dbConnect();

    let about = await About.findOne().lean();

    // Create default document if it doesn't exist
    if (!about) {
      about = await About.create({
        badge: "About AdsLyve Media",

        mainHeading: "We Don't Just Run Ads.",

        gradientHeading: "We Build Growth Engines.",

        description1:
          "AdsLyve Media is a performance-driven digital marketing agency committed to helping businesses grow online.",

        description2:
          "Our expertise lies in combining creativity with data to build marketing campaigns that increase traffic, improve conversions, and maximize return on investment.",

        description3:
          "We partner with businesses across industries to create customized digital strategies that generate real business results.",

        missionTitle: "Our Mission",

        missionDescription:
          "To help brands grow faster through innovative, measurable and performance-driven digital marketing solutions that create lasting business impact.",

        visionTitle: "Our Vision",

        visionDescription:
          "To become one of India's most trusted digital growth partners by delivering exceptional results, meaningful relationships and sustainable long-term value.",
      });

      about = about.toObject();
    }

    return NextResponse.json({
      success: true,
      about,
    });
  } catch (error) {
    console.error("GET ABOUT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch About content.",
      },
      {
        status: 500,
      },
    );
  }
}

// ==========================================
// PUT - Admin Update About Content
// ==========================================

export async function PUT(req) {
  try {
    await dbConnect();

    // ==========================================
    // Authentication
    // ==========================================

    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
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

    let decoded;

    try {
      decoded = verifyToken(token);
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired session.",
        },
        {
          status: 401,
        },
      );
    }

    if (!decoded?.id) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid admin session.",
        },
        {
          status: 401,
        },
      );
    }

    // ==========================================
    // Request Body
    // ==========================================

    const {
      badge,
      mainHeading,
      gradientHeading,
      description1,
      description2,
      description3,
      missionTitle,
      missionDescription,
      visionTitle,
      visionDescription,
    } = await req.json();

    // ==========================================
    // Validation
    // ==========================================

    if (
      !badge?.trim() ||
      !mainHeading?.trim() ||
      !gradientHeading?.trim() ||
      !description1?.trim() ||
      !description2?.trim() ||
      !description3?.trim() ||
      !missionTitle?.trim() ||
      !missionDescription?.trim() ||
      !visionTitle?.trim() ||
      !visionDescription?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All About fields are required.",
        },
        {
          status: 400,
        },
      );
    }

    // ==========================================
    // Update/Create About Document
    // ==========================================

    const about = await About.findOneAndUpdate(
      {},
      {
        badge: badge.trim(),
        mainHeading: mainHeading.trim(),
        gradientHeading: gradientHeading.trim(),

        description1: description1.trim(),
        description2: description2.trim(),
        description3: description3.trim(),

        missionTitle: missionTitle.trim(),
        missionDescription: missionDescription.trim(),

        visionTitle: visionTitle.trim(),
        visionDescription: visionDescription.trim(),
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      },
    );

    return NextResponse.json({
      success: true,
      message: "About content updated successfully.",
      about,
    });
  } catch (error) {
    console.error("UPDATE ABOUT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update About content.",
      },
      {
        status: 500,
      },
    );
  }
}
