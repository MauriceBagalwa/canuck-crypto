// var messagebird = require("messagebird")("bJwOZ42MJ4widd7laI1lyIqHc");
import logger from "../utils/logger";
import bcrypt from "bcrypt";

export async function getCryptPassword(psswd: string): Promise<string> {
  try {
    // const hash = await bcrypt.hash(psswd, "10");
    return "hash";
  } catch (err: any) {
    logger.error(err.message);
    throw new Error(err.message);
  }
}

export function getCodeLength(length: number) {
  return Math.floor(
    Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  );
}

export function sendSMS(phone: string, message: string) {
  var params: {
    originator: string;
    recipients: [string];
    body: string;
  } = {
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
