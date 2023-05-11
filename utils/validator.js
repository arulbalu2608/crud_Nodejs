const errorHandler = (err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    err?.error?.details?.forEach(function (error) {
      if (error.path.length > 1) {
        console.log(error.path.join("."));
      } else {
        res.status(400).json({
          message: error.message,
        });
      }
    });
  } else {
    // pass on to another error handler
    next(err);
  }
};

module.exports = errorHandler;
