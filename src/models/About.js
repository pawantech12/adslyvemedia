import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    badge: {
      type: String,
      required: true,
      trim: true,
    },

    mainHeading: {
      type: String,
      required: true,
      trim: true,
    },

    gradientHeading: {
      type: String,
      required: true,
      trim: true,
    },

    description1: {
      type: String,
      required: true,
      trim: true,
    },

    description2: {
      type: String,
      required: true,
      trim: true,
    },

    description3: {
      type: String,
      required: true,
      trim: true,
    },

    missionTitle: {
      type: String,
      required: true,
      trim: true,
    },

    missionDescription: {
      type: String,
      required: true,
      trim: true,
    },

    visionTitle: {
      type: String,
      required: true,
      trim: true,
    },

    visionDescription: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.About || mongoose.model("About", AboutSchema);
