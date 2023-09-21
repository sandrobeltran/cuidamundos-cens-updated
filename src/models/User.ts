import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 80,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[A-Za-z]{2,4}"),
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    triviaCompleted: {
      type: Boolean,
      required: true,
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
