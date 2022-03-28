import { OtpModel, IOtp } from "./otp.model";
import { IPhone, IUser } from "../user/user.model";
import { getCodeLength } from "../../utils/stringType.utils";
import logger from "../../utils/logger";

export default class Otp {
  private otp = OtpModel;

  public async create(user: IUser): Promise<boolean> {
    try {
      const setOtp: number = getCodeLength(6);
      const update = {
        opt: setOtp,
        use: false,
        createAt: new Date(),
      };

      await this.otp.updateOne(
        {
          user: user._id,
        },
        update,
        { upsert: true }
      );

      // const phoneNumber = user.phoneNumber;
      // const message: string = `votre code de confirmation est ${setOtp}`;
      // const number: string = `${phoneNumber.contryCode}${phoneNumber.number}`;

      // sendSMS(number, message);
      // console.table({ number, message });

      return true;
    } catch (err: any) {
      logger.info(err.message);
      throw new Error(err.message);
    }
  }
}
