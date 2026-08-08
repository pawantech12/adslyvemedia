import mongoose from "mongoose";

const websiteSettingsSchema = new mongoose.Schema(
  {
    metaTitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 70,
    },
    metaDescription: {
      type: String,
      required: true,
      trim: true,
      maxlength: 180,
    },
    footerCopyright: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.WebsiteSettings ||
  mongoose.model("WebsiteSettings", websiteSettingsSchema);
