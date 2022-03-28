import { Get, Post, Controller, Route } from "tsoa";

@Route("api")
export class Wallet extends Controller {
  @Get("wallet")
  public getWallet(): object {
    return {
      data: "Hey bro",
    };
  }
}
