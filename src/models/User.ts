import { Schema, Types, model, models } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 40,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 40,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      trim: true,
      minLength: 2,
      maxLength: 100,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    bio: {
      type: String,
      min: 10,
      max: 500,
    },
    role: {
      type: String, // USER | ADMIN
      required: true,
    },
    institutionId: {
      type: Types.ObjectId,
      required: false,
    },
    classCode: {
      type: String,
      required: false,
    },
    securityQuestions: {
      type: Array<{
        question: String;
        answer: String;
      }>,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre("save", async function (next) {
  const user = this;
  try {
    // only hash the password if it has been modified (or is new)
    if (!user.isModified("passwordHash")) return next();

    // generate a salt
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.passwordHash, salt);
    user.passwordHash = hash;
    next();
  } catch (error) {
    return next();
  }
});

userSchema.methods.comparePassword = async function (
  this: {
    passwordHash: string;
  },
  hash: string,
): Promise<boolean> {
  return await bcrypt.compare(hash, this.passwordHash);
};

export default models.User || model("User", userSchema);
