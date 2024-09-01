import { model, models, Schema } from "mongoose";

const institutionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default models.Institution || model("Institution", institutionSchema);
