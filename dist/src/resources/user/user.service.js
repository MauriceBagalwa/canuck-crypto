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
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
class UserService {
    constructor() {
        this.user = user_model_1.UserModel;
    }
    create(bodyUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("time 1");
                // const user = await this.user.create(bodyUser);
                return bodyUser;
            }
            catch (err) {
                console.log(err);
                throw new Error(err.message);
            }
        });
    }
}
exports.default = UserService;
