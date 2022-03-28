import { IUser } from "./user.model";
import userService from "./user.service";

import {
  Controller,
  Route,
  Get,
  Post,
  Body,
  Query,
  SuccessResponse,
} from "tsoa";

@Route("users")
export class User extends Controller {
  private _user = new userService();
  // GET Users h
  @Get("users")
  public async getUsers(@Query() status?: boolean): Promise<object> {
    return {
      data: "bonjour les users",
    };
  }

  @SuccessResponse("201", "Created")
  @Post("")
  public async createUser(@Body() body: IUser): Promise<IUser> {
    return this._user.create(body);
  }
}
