"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.User = void 0;
const user_service_1 = __importDefault(require("./user.service"));
const tsoa_1 = require("tsoa");
let User = class User extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this._user = new user_service_1.default();
    }
    // GET Users
    getUsers(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                data: "bonjour les users",
            };
        });
    }
    createUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._user.create(body);
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("users"),
    __param(0, (0, tsoa_1.Query)())
], User.prototype, "getUsers", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Post)(""),
    __param(0, (0, tsoa_1.Body)())
], User.prototype, "createUser", null);
User = __decorate([
    (0, tsoa_1.Route)("users")
], User);
exports.User = User;
