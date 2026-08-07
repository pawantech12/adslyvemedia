import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import Admin from "@/models/Admin";
import { verifyToken } from "@/lib/jwt";

export async function PUT(req) {
  try {
    await dbConnect();

    // ==============================
    // Authentication
    // ==============================

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

    // ==============================
    // Request Data
    // ==============================

    const { name, email, currentPassword, newPassword, confirmPassword } =
      await req.json();

    // ==============================
    // Validate Name & Email
    // ==============================

    if (!name || !name.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is required.",
        },
        {
          status: 400,
        },
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        {
          status: 400,
        },
      );
    }

    const normalizedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();

    // ==============================
    // Find Admin
    // ==============================

    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin account not found.",
        },
        {
          status: 404,
        },
      );
    }

    // ==============================
    // Check Email Availability
    // ==============================

    if (normalizedEmail !== admin.email) {
      const existingAdmin = await Admin.findOne({
        email: normalizedEmail,
        _id: {
          $ne: admin._id,
        },
      });

      if (existingAdmin) {
        return NextResponse.json(
          {
            success: false,
            message: "Email already exists.",
          },
          {
            status: 400,
          },
        );
      }
    }

    // ==============================
    // Password Change
    // ==============================

    const isChangingPassword =
      currentPassword || newPassword || confirmPassword;

    if (isChangingPassword) {
      if (!currentPassword || !newPassword || !confirmPassword) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Current password, new password and confirm password are required.",
          },
          {
            status: 400,
          },
        );
      }

      if (newPassword.length < 8) {
        return NextResponse.json(
          {
            success: false,
            message: "New password must be at least 8 characters long.",
          },
          {
            status: 400,
          },
        );
      }

      if (newPassword !== confirmPassword) {
        return NextResponse.json(
          {
            success: false,
            message: "New password and confirm password do not match.",
          },
          {
            status: 400,
          },
        );
      }

      const isPasswordCorrect = await bcrypt.compare(
        currentPassword,
        admin.password,
      );

      if (!isPasswordCorrect) {
        return NextResponse.json(
          {
            success: false,
            message: "Current password is incorrect.",
          },
          {
            status: 400,
          },
        );
      }

      // Hash new password
      admin.password = await bcrypt.hash(newPassword, 10);
    }

    // ==============================
    // Update Profile
    // ==============================

    admin.name = normalizedName;
    admin.email = normalizedEmail;

    await admin.save();

    // ==============================
    // Response
    // ==============================

    return NextResponse.json({
      success: true,
      message: isChangingPassword
        ? "Admin profile and password updated successfully."
        : "Admin profile updated successfully.",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("ADMIN PROFILE UPDATE ERROR:", error);

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
