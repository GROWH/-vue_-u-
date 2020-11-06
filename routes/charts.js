var express = require('express');
var router = express.Router();
const { Success } = require("../utils/Result");
// 月销售业绩统计
router.get("/charts", async (req, res) => {

    let data = [{
        month:1,
        total:100000
    },
    {
        month:2,
        total:990000
    },
    {
        month:3,
        total:220000
    },
    {
        month:4,
        total:132000
    },
    {
        month:5,
        total:200000
    },
    {
        month:6,
        total:409000
    },
    {
        month:7,
        total:590008
    },
    {
        month:8,
        total:600010
    },
    {
        month:9,
        total:200000
    },
    {
        month:10,
        total:800000
    },
    {
        month:11,
        total:600000
    },
    {
        month:12,
        total:400000
    }];

    res.send(Success(data));
});

module.exports = router;