import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import Service from "@/models/Service";
import { verifyToken } from "@/lib/jwt";

const authenticateAdmin = (req) => {
  const token = req.cookies.get("admin_token")?.value;

  if (!token) {
    return null;
  }

  return verifyToken(token);
};

/* =========================
   GET ALL SERVICES
========================= */

export async function GET(req) {
  try {
    await dbConnect();

    const services = await Service.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      services,
    });
  } catch (error) {
    console.error("GET SERVICES ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
   CREATE SERVICE
========================= */

export async function POST(req) {
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

    const { title, subtitle, description, icon, features } = body;

    if (!title || !subtitle || !description || !icon) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, subtitle, description and icon are required.",
        },
        {
          status: 400,
        },
      );
    }

    if (!Array.isArray(features)) {
      return NextResponse.json(
        {
          success: false,
          message: "Features must be an array.",
        },
        {
          status: 400,
        },
      );
    }

    const cleanedFeatures = features
      .map((feature) => String(feature).trim())
      .filter(Boolean);

    const service = await Service.create({
      title: title.trim(),
      subtitle: subtitle.trim(),
      description: description.trim(),
      icon: icon.trim(),
      features: cleanedFeatures,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Service created successfully.",
        service,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error("CREATE SERVICE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
   UPDATE SERVICE
========================= */

export async function PUT(req) {
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

    const { id, title, subtitle, description, icon, features } = body;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Service ID is required.",
        },
        {
          status: 400,
        },
      );
    }

    if (!title || !subtitle || !description || !icon) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, subtitle, description and icon are required.",
        },
        {
          status: 400,
        },
      );
    }

    if (!Array.isArray(features)) {
      return NextResponse.json(
        {
          success: false,
          message: "Features must be an array.",
        },
        {
          status: 400,
        },
      );
    }

    const cleanedFeatures = features
      .map((feature) => String(feature).trim())
      .filter(Boolean);

    const service = await Service.findByIdAndUpdate(
      id,
      {
        title: title.trim(),
        subtitle: subtitle.trim(),
        description: description.trim(),
        icon: icon.trim(),
        features: cleanedFeatures,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Service not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Service updated successfully.",
      service,
    });
  } catch (error) {
    console.error("UPDATE SERVICE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      {
        status: 500,
      },
    );
  }
}

/* =========================
   DELETE SERVICE
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
          message: "Service ID is required.",
        },
        {
          status: 400,
        },
      );
    }

    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Service not found.",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Service deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE SERVICE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      {
        status: 500,
      },
    );
  }
}
