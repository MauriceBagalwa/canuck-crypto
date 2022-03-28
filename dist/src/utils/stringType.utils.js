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
exports.sendSMS = exports.getCodeLength = exports.getCryptPassword = void 0;
// var messagebird = require("messagebird")("bJwOZ42MJ4widd7laI1lyIqHc");
const logger_1 = __importDefault(require("../utils/logger"));
function getCryptPassword(psswd) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const hash = await bcrypt.hash(psswd, "10");
            return "hash";
        }
        catch (err) {
            logger_1.default.error(err.message);
            throw new Error(err.message);
        }
    });
}
exports.getCryptPassword = getCryptPassword;
function getCodeLength(length) {
    return Math.floor(Math.pow(10, length - 1) +
        Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
}
exports.getCodeLength = getCodeLength;
function sendSMS(phone, message) {
    var params = {
        originator: "Pelekapp",
        recipients: [`${phone}`],
        body: message,
    };
    // console.log(body);
    // messagebird.messages.create(params, function (err: any, response: any) {
    //   if (!err) {
    //     return console.log(response);
    //   }
    // });
}
exports.sendSMS = sendSMS;
