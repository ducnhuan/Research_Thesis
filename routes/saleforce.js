var express = require('express');
var router = express.Router();
var url= require('url');
var jsforce = require('jsforce');

router.get('/billing',function(req,res){
    var querry=url.parse(req.url).query;
    res.render('order');
   
})
module.exports = router;