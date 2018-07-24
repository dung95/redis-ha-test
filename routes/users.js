var express = require('express');
var router = express.Router();
var Redis = require('ioredis');
var redis = new Redis({
  sentinels: [{ host: 'rfs-redisfailover', port: 26379 }],
  name: 'mymaster'
});

router.post('/', function(req, res, next) {
 
  redis.set('username', req.body.username);
  redis.get('username', function (err, result) {
  res.send(result);
  console.log(result);
});
});

module.exports = router;
