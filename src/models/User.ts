import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

/* 
  name: string,
  lastname: string,
  birthdate: date,
  email: string,
  address: string,
  phone: number,
  school: string,
*/

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
    birthdate: {
      type: Date,
    },
    address: {
      type: String,
      trim: true,
      min: 2,
      max: 80,
    },
    phone: {
      type: Number,
      max: 9999999999
    },
    school: {
      type: String,
      min: 2,
      max: 60,
    },
    avatar: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      min: 2,
      max: 280
    }
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
