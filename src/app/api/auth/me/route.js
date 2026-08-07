import { NextResponse } from "next/server";

import { verifyToken } from "@/lib/jwt";

export async function GET(req) {
  try {
    const token = req.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 401,
        },
      );
    }

    const decoded = verifyToken(token);

    return NextResponse.json({
      success: true,
      user: decoded,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 401,
      },
    );
  }
}
