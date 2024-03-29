const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    errMsg: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });

  next();
};

export default errorHandler;
