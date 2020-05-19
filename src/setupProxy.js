const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/posts', {
      target: 'http://54.180.115.91:8000/',
      changeOrigin: true
    })
  );
};
