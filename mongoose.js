var mongoose = require('mongoose');
var config = {
    db: 'mongodb://127.0.0.1:27017/mayi_mongo',
}
mongoose.connect(config.db, function (err) {
    if (err) {
        console.error('connect to %s error: ', config.db, err.message);
        process.exit(1);
    }
});
//All models
require('./mongo/models/market');
exports.Market = mongoose.model('Market');
