var express = require('express');
var router  = express.Router();
var Market    = require('./mongo/controllers/market');
//用户路由
router.post('/api/getMarketData', Market.getData); // 注册
router.post('/api/setMarketData', Market.setData); // 注册
// router.post('/api/signin', User.signin); // 登录
module.exports = router;
