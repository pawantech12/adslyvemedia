import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    icon: {
      type: String,
      required: true,
      default: "BriefcaseBusiness",
      trim: true,
    },

    features: {
      type: [String],
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
