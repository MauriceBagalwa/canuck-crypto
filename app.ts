import ErrorHiddleware from "./src/middleware/error.middleware";
import { Response, Request, NextFunction } from "express";
import { RegisterRoutes } from "./dist/routes";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import logger from "./src/utils/logger";
import { ValidateError } from "tsoa";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "config";
import helmet from "helmet";
import cors from "cors";

export default class App {
  public express: Application;
  public port: number;

  constructor(port: number) {
    this.express = express();
    this.port = port;
    this.initializeMiddlware();
    this.initializeErrorHandler();
    this.initializeDbConnection();
    this.ping();
  }

  private initializeMiddlware() {
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(bodyParser.json());

    this.express.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

    this.express.use(
      "/docs",
      swaggerUi.serve,
      async (_req: Request, res: Response) => {
        return res.send(
          swaggerUi.generateHTML(await import("./dist/swagger.json"))
        );
      }
    );

    // this.express.use(function notFoundHandler(_req, res: Response) {
    //   res.status(404).send({
    //     message: "Not Found",
    //   });
    // });

    // this.express.use(function errorHandler(
    //   err: unknown,
    //   req: Request,
    //   res: Response,
    //   next: NextFunction
    // ): Response | void {
    //   if (err instanceof ValidateError) {
    //     console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    //     return res.status(422).json({
    //       message: "Validation Failed",
    //       details: err?.fields,
    //     });
    //   }
    //   if (err instanceof Error) {
    //     return res.status(500).json({
    //       message: "Internal Server Error",
    //     });
    //   }
    //   next();
    // });

    RegisterRoutes(this.express);
  }

  private initializeErrorHandler(): void {
    this.express.use(ErrorHiddleware);
  }

  private initializeDbConnection(): void {
    const dbUrl = config.get<string>("dbUrl");
    try {
      mongoose.connect(dbUrl);
      logger.info("connected to tivadb");
    } catch (err) {
      logger.error("Error to connect to db...");
      process.exit(1);
    }
  }

  // PING DOMAIN API
  public ping(): void {
    this.express.get("/", function (req: Request, res: Response) {
      return res.send({
        status: true,
        data: null,
        message: "welcome to tsoa-ekival-api",
      });
    });
  }

  // LISTEN SERVER
  public listen(): void {
    this.express.listen(this.port, () => {
      logger.info(`server is runing ats http://localhost:${this.port}`);
    });
  }
}
