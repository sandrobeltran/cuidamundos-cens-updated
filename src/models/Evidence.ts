import { model, models, ObjectId, Schema } from "mongoose";

const evidenceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    comments: {
      type: Array<{
        _id: number;
        author: String;
        content: String;
      }>,
      required: true,
    },
    submissions: {
      type: Array<{
        author: String;
        state: Number;
        lastUpdateAt: Date;
        submitedAt: Date;
        deadline: Date;
        content: {
          answer: String;
          link: String;
          files: ObjectId[];
        };
      }>,
      required: true,
    },
    deliveryDate: {
      type: Date,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    enabledOptions: {
      type: {
        text: Boolean,
        links: Boolean,
        docs: Boolean,
        images: Boolean,
      },
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default models.Evidence || model("Evidence", evidenceSchema);
