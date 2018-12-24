var express = require('express');
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var app = express();
var jiraServer = 'https://mclaure.atlassian.net';
 
app.use(express.static(__dirname + '/dist/jiraApp'));

app.all("/rest/*", function(req, res) {
    apiProxy.web(req, res, {
							changeOrigin: true,
							target: jiraServer
							});
});

app.all('/#/*', function (req, res, next) {
	console.log('redirecting to LOCAL');
	res.sendFile(path.join(__dirname+'/dist/jiraApp/index.html'));
});

app.listen(process.env.PORT || 8080);

apiProxy.on('proxyRes', function(proxyRes, req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');  
  res.setHeader('User-Agent', '*');    
});

apiProxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('User-Agent', '*');    
});