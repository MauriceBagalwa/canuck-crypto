import { NextFunction, Request, Response } from "express";
import HttpException from "../utils/exception/http.exception";

function errorHiddleware(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";

  res.status(status).send({
    status: "error",
    data: null,
    message,
  });
}

function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  // if (err instanceof ValidateError) {
  //   console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
  //   return res.status(422).json({
  //     message: "Validation Failed",
  //     details: err?.fields,
  //   });
  // }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
}

export default errorHiddleware;
