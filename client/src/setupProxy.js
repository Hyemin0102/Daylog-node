const { createProxyMiddleware } = require('http-proxy-middleware');

//API요청 경로에 /api가 존재하는 경우 http://localhost:4000 호스트로 요청 전달
module.exports = (app) => {
	app.use(
		createProxyMiddleware('/api', {
			target: 'http://localhost:4000', 
			changeOrigin: true,
		})
	);
};