var express = require('express');
var router = express.Router();
//var web3 = require('web3');
router.get('/billing',function(req,res){
    res.render('order');
   
})
// router.get('/',function(req,res){
//     if (typeof web3 !== 'undefined') {
//         web3 = new Web3(web3.currentProvider);
//     } else {
//         // set the provider you want from Web3.providers
//         web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//     }   
// })
module.exports = router;