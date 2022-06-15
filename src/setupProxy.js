const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/postList", {
      target: "http://3.39.226.20",
      changeOrigin: true,
    })
  );
};
