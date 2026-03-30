module.exports = function apiKeyAuth(req, res, next) {
  const key = req.headers["x-api-key"];

  if (!key || key !== "12345") {
    return res.status(401).json({
      error: {
        code: "UNAUTHORIZED",
        message: "Invalid or missing API key"
      }
    });
  }

  next();
};
