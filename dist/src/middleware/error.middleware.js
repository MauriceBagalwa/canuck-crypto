"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHiddleware(error, req, res, next) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong.";
    res.status(status).send({
        status: "error",
        data: null,
        message,
    });
}
function errorHandler(err, req, res, next) {
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
exports.default = errorHiddleware;
