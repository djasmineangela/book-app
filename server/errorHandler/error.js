const errorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err};

    error.message = err.message;

    if(err.code === 11000){
        const message = "Duplicate Field value";
        error = new errorResponse(400, message);
    }

    if(err.name === "ValidationError"){
        const message = Object.values(error.errors).map((val)=> val.message);
        error = new errorResponse(400, message);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    })
}

module.exports = errorHandler;