import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      default: "",
      trim: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },

    address: {
      type: String,
      default: "",
      trim: true,
    },

    linkedin: {
      type: String,
      default: "",
      trim: true,
    },

    instagram: {
      type: String,
      default: "",
      trim: true,
    },

    facebook: {
      type: String,
      default: "",
      trim: true,
    },

    whatsapp: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
