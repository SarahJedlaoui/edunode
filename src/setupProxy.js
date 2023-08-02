const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search',
      changeOrigin: true,
    })
  );
};
