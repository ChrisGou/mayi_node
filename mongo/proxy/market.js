var models = require('../../mongoose');
var Market = models.Market;

exports.create = function (callback) {
    var market = new Market();
    // market.username = username;
    // market.password = password;
    // market.level = level;
    market.save(callback);
};

exports.getByQuery = function (query, opt, callback) {
	Market.find(query, null, {sort: '-date_create'}, callback);
};
