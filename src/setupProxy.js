const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/postList", {
      target: "http://3.39.226.20",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/api/signup", {
      target: "http://3.39.226.20",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/login", {
      target: "http://3.39.226.20",
      changeOrigin: true,
    })
  );
  // 여기 아래에 경로 추가
};
