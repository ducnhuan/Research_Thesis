var express = require('express');
var router = express.Router();
var url= require('url');

router.get('/billing',function(req,res){
    var querry=url.parse(req.url).query;
    res.send(querry);
})
module.exports = router;