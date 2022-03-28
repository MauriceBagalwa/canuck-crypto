"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const otp_model_1 = require("./otp.model");
const stringType_utils_1 = require("../../utils/stringType.utils");
const logger_1 = __importDefault(require("../../utils/logger"));
class Otp {
    constructor() {
        this.otp = otp_model_1.OtpModel;
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const setOtp = (0, stringType_utils_1.getCodeLength)(6);
                const update = {
                    opt: setOtp,
                    use: false,
                    createAt: new Date(),
                };
                yield this.otp.updateOne({
                    user: user._id,
                }, update, { upsert: true });
                // const phoneNumber = user.phoneNumber;
                // const message: string = `votre code de confirmation est ${setOtp}`;
                // const number: string = `${phoneNumber.contryCode}${phoneNumber.number}`;
                // sendSMS(number, message);
                // console.table({ number, message });
                return true;
            }
            catch (err) {
                logger_1.default.info(err.message);
                throw new Error(err.message);
            }
        });
    }
}
exports.default = Otp;
