var express = require('express')
var cors = require('cors');
var path = require('path');
var fs = require('fs');
//使用nodejs自带的http、https模块
var http = require('http');
var https = require('https');
var router = require('./router');

var app = express()
var history = require('connect-history-api-fallback'); // 处理vue hsitroy模式刷新页面404 

app.use(history({
    index: 'mayi_vue/mod1.html',//匹配到mod1.html
    rewrites: [
        {
            from: /^\/api/,//以api开头的不匹配，因为是接口，会直接进入app.get
            to: function (context) {
                return context.parsedUrl.pathname;
            }
        }
    ]
}))
app.use('/', express.static(__dirname + '/'))// 访问静态目录
app.use(cors());
// 后台路由
app.use('/', router);
//根据项目的路径导入生成的证书文件
var privateKey = fs.readFileSync(path.join(__dirname, './certificate/private.pem'), 'utf8');
var certificate = fs.readFileSync(path.join(__dirname, './certificate/file.crt'), 'utf8');
var credentials = { key: privateKey, cert: certificate };

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

//可以分别设置http、https的访问端口号
var PORT = 999;
var SSLPORT = 888;
//创建http服务器
httpServer.listen(PORT, function () {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});

//创建https服务器
httpsServer.listen(SSLPORT, function () {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});