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
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
// import { getCryptPassword } from "../../utils/stringType.utils";
const opt_service_1 = __importDefault(require("../opt/opt.service"));
// USER SCHEMA
const UserSchema = new mongoose_1.Schema({
    fullname: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    phoneNumber: {
        contryCode: { type: String, required: true },
        number: { type: Number, required: true, unique: true },
    },
    profile: { type: String, default: "/images/default.png" },
    password: { type: String },
    status: { type: Boolean, default: false },
}, { timestamps: true });
UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        // this.password = await getCryptPassword(this.password);
        // next();
    });
});
UserSchema.post("save", function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const otp = new opt_service_1.default();
            yield otp.create(doc);
        }
        catch (err) {
            throw new Error(err.message);
        }
    });
});
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
