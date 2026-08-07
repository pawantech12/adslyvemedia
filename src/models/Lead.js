import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 150,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 3000,
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Closed"],
      default: "New",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
