"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const tsoa_1 = require("tsoa");
let Wallet = class Wallet extends tsoa_1.Controller {
    getWallet() {
        return {
            data: "Hey bro",
        };
    }
};
__decorate([
    (0, tsoa_1.Get)("wallet")
], Wallet.prototype, "getWallet", null);
Wallet = __decorate([
    (0, tsoa_1.Route)("api")
], Wallet);
exports.Wallet = Wallet;
