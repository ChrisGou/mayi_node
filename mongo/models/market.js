var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarketSchema = new Schema({
    dfxjj_data: {
        type: Array,
        default: [
            {
                name: "工银瑞信如意货币A",
                rate: "4.0670%"
            },
            {
                name: "建信现金增利货币",
                rate: "4.1520%"
            },
            {
                name: "华夏理财30天债券A",
                rate: "4.1830%"
            },
            {
                name: "广发理财30天债券A",
                rate: "4.0880%"
            }
        ]
    },
    jyjj_data: {
        type: Array,
        default: [
            {
                name: "嘉实全球互联网股票(QDII)",
                rate: "16.92%",
                info: "10元海淘全球科技巨头"
            },
            {
                name: "易方达消费行业股票",
                rate: "22.71%",
                info: "喜欢你花钱的样子"
            }
        ]
    },
    tzhw_data: {
        type: Array,
        default: [
            {
                name: "嘉实美国成长股票(QDII)",
                rate: "21.55%",
                info: "10元让美国巨头为你赚钱"
            },
            {
                name: "上投摩根中国世纪灵活配置混合(QDII)",
                rate: "21.19%",
                info: "Top中企一键淘"
            }
        ]
    },
    jjcfh_data: {
        type: Array,
        default: [
            {
                img: "https://chrisgou.github.io/images/mayi_img/yfd.png",
                name: "易方达基金财富号",
                info: "五千万客户选了，来吧",
                tip: "买入费率1折起"
            },
            {
                img: "https://chrisgou.github.io/images/mayi_img/gyrx.png",
                name: "工银瑞信基金财富号",
                info: "聪明理财，工银一路陪伴",
                tip: "买入费率1折起"
            },
            {
                img: "https://chrisgou.github.io/images/mayi_img/gt.png",
                name: "国泰基金财富号",
                info: "股基投资NO.1，快跟上",
                tip: "买入费率1折起"
            }
        ]
    },
})
// MarketSchema.index({ username: 1 }, { unique: true });
mongoose.model('Market', MarketSchema);
