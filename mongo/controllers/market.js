var Market = require('../proxy/market');
var Constants = require('../tools/constants');


//获取用户列表
exports.getData = function (req, res, next) {
    Market.getByQuery({}, null, function (err, results) {
        if (err) {
            return next(err);
        }
        res.status(200);
        res.send({
            code: Constants.SUCCESS,
            msg: '获取用市场页数据成功',
            data: results
        })
        console.log('获取用市场页数据成功')
        next()
    })
}

//获取用户列表
exports.setData = function (req, res, next) {
    Market.create(function (err, results) {
        if (err) {
            return next(err);
        }
        res.status(200);
        res.send({
            code: Constants.SUCCESS,
            msg: '设置市场页数据成功',
        })
    })
}