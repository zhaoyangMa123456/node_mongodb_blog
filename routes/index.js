var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {
        text: {
            book:{
                name: '藏地密码',
                price: '98.99'
            }
        },
        variable: 'mazhaoyang.cn',
        inputVals: {
            type: "text",
            name: "马朝阳"
        },
        ifElse: {
            name: 'mzy'
        },
        forEachVals: ['a', 'b', 'c'],
        caseVals: 'mzy'
    }
    res.render('index', data);
});

module.exports = router;
