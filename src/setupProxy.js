const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware("/api", {
        target: "http://172.16.8.28:8888", //配置你要请求的服务器地址
        pathRewrite: {'^/api': ''},
        changeOrigin: true
    }))
};