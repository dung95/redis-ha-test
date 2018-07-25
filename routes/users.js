var express = require('express');
var router = express.Router();
var Redis = require('ioredis');
var redis = new Redis({
  sentinels: [{ host: 'rfs-dev', port: 26379 }],
  name: 'mymaster'
});

router.get('/', function(req, res, next) {
    let value = redis.zrange('ASX:CSR:1m', 0, 100, 'WITHSCORES');
    console.log(value);
    res.send(value);
});

module.exports = router;
