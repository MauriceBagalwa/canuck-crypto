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
const error_middleware_1 = __importDefault(require("./src/middleware/error.middleware"));
const routes_1 = require("./dist/routes");
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const logger_1 = __importDefault(require("./src/utils/logger"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("config"));
const mongoose_1 = __importDefault(require("mongoose"));
class App {
    constructor(port) {
        this.express = (0, express_1.default)();
        this.port = port;
        this.initializeMiddlware();
        this.initializeErrorHandler();
        this.initializeDbConnection();
        this.ping();
    }
    initializeMiddlware() {
        this.express.use((0, cors_1.default)());
        this.express.use((0, helmet_1.default)());
        this.express.use(body_parser_1.default.json());
        this.express.use(body_parser_1.default.urlencoded({
            extended: true,
        }));
        this.express.use("/docs", swagger_ui_express_1.default.serve, (_req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.send(
            // swaggerUi.generateHTML(await import("./dist/swagger.json"))
            );
        }));
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
        (0, routes_1.RegisterRoutes)(this.express);
    }
    initializeErrorHandler() {
        this.express.use(error_middleware_1.default);
    }
    initializeDbConnection() {
        const dbUrl = config_1.default.get("dbUrl");
        try {
            mongoose_1.default.connect(dbUrl);
            logger_1.default.info("connected to tivadb");
        }
        catch (err) {
            logger_1.default.error("Error to connect to db...");
            process.exit(1);
        }
    }
    // PING DOMAIN API
    ping() {
        this.express.get("/", function (req, res) {
            return res.send({
                status: true,
                data: null,
                message: "welcome to tsoa-ekival-api",
            });
        });
    }
    // LISTEN SERVER
    listen() {
        this.express.listen(this.port, () => {
            logger_1.default.info(`server is runing at http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
