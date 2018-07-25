var express = require('express');
var router = express.Router();
var Redis = require('ioredis');
var redis = new Redis({
  sentinels: [{ host: '35.199.169.52', port: 26379 }],
  name: 'mymaster'
});

router.get('/', function(req, res, next) {
    let value = redis.zrange('foo', 0, 100, 'WITHSCORES');
    console.log(value);
});

module.exports = router;
