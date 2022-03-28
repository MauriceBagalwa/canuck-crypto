import { model, Document, Schema } from "mongoose";

export interface IOtp extends Document {
  _id: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  otp: number;
  createAt?: Date;
}

const OtpSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  otp: { type: String, required: true },
  createAt: { type: Date, default: Date.now(), index: { expires: 600 } },
});

export const OtpModel = model<IOtp>("Otp", OtpSchema);
