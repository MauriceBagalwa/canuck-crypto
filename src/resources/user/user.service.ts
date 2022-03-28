import { UserModel, IUser } from "./user.model";

export default class UserService {
  private user = UserModel;

  public async create(bodyUser: IUser): Promise<IUser> {
    try {
      console.log("time 1");
      // const user = await this.user.create(bodyUser);
      return bodyUser;
    } catch (err: any) {
      console.log(err);
      throw new Error(err.message);
    }
  }
}
