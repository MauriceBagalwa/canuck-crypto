import { model, Document, Schema } from "mongoose";
// import { getCryptPassword } from "../../utils/stringType.utils";
import otpService from "../opt/opt.service";

// INTERFACE OF MODEL
export interface IPhone {
  contryCode: string;
  number: number;
}

export interface IUser extends Document {
  fullName: string;
  email: string;
  phoneNumber: IPhone;
  password: string;
}

// USER SCHEMA
const UserSchema = new Schema(
  {
    fullname: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    phoneNumber: {
      contryCode: { type: String, required: true },
      number: { type: Number, required: true, unique: true },
    },
    profile: { type: String, default: "/images/default.png" },
    password: { type: String },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  // this.password = await getCryptPassword(this.password);
  // next();
});

UserSchema.post("save", async function (doc) {
  try {
    const otp = new otpService();
    await otp.create(doc);
  } catch (err: any) {
    throw new Error(err.message);
  }
});

export const UserModel = model<IUser>("User", UserSchema);
