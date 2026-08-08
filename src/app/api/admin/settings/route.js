import { NextResponse } from "next/server";
import WebsiteSettings from "@/models/WebsiteSettings";
import dbConnect from "@/lib/dbConnect";

const defaultSettings = {
  metaTitle: "AdsLyve Media | Digital Marketing Agency",
  metaDescription:
    "AdsLyve Media is a performance-driven digital marketing agency offering SEO, Google Ads, Meta Ads, Social Media Marketing, Performance Marketing and Website Development services.",
  footerCopyright: "© 2026 AdsLyve Media. All Rights Reserved.",
};

export async function GET() {
  try {
    await dbConnect();

    let settings = await WebsiteSettings.findOne().lean();

    if (!settings) {
      settings = await WebsiteSettings.create(defaultSettings);
      settings = settings.toObject();
    }

    return NextResponse.json({
      success: true,
      settings,
    });
  } catch (error) {
    console.error("GET WEBSITE SETTINGS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load website settings.",
      },
      { status: 500 },
    );
  }
}

export async function PUT(request) {
  try {
    await dbConnect();

    const body = await request.json();

    const metaTitle = body.metaTitle?.trim();
    const metaDescription = body.metaDescription?.trim();
    const footerCopyright = body.footerCopyright?.trim();

    if (!metaTitle) {
      return NextResponse.json(
        {
          success: false,
          message: "SEO meta title is required.",
        },
        { status: 400 },
      );
    }

    if (!metaDescription) {
      return NextResponse.json(
        {
          success: false,
          message: "SEO meta description is required.",
        },
        { status: 400 },
      );
    }

    if (!footerCopyright) {
      return NextResponse.json(
        {
          success: false,
          message: "Footer copyright text is required.",
        },
        { status: 400 },
      );
    }

    if (metaTitle.length > 70) {
      return NextResponse.json(
        {
          success: false,
          message: "SEO meta title cannot exceed 70 characters.",
        },
        { status: 400 },
      );
    }

    if (metaDescription.length > 180) {
      return NextResponse.json(
        {
          success: false,
          message: "SEO meta description cannot exceed 180 characters.",
        },
        { status: 400 },
      );
    }

    const settings = await WebsiteSettings.findOneAndUpdate(
      {},
      {
        metaTitle,
        metaDescription,
        footerCopyright,
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
        runValidators: true,
      },
    ).lean();

    return NextResponse.json({
      success: true,
      message: "Website settings updated successfully.",
      settings,
    });
  } catch (error) {
    console.error("UPDATE WEBSITE SETTINGS ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update website settings.",
      },
      { status: 500 },
    );
  }
}
