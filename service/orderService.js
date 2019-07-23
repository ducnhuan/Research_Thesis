const jsforce = require('jsforce');
const conf = require('../config/salesforce')
class orderService{
static getDetail(id)
    {
    //console.log(conf);
    var conn = new jsforce.Connection({loginUrl: conf.loginUrl});
   return conn.login(conf.userName,conf.password)
   .then((userInfo)=>
   {
       var options ={headers:{'Id':id}};
       return new Promise(function(resolve,reject)
       {
           conn.apex.get('/Order',options,function(err,result)
           {
               if(err){reject(err);}
               else{resolve(result);}
           })
       })
   })
   .catch((err)=>{return console.log(err)})
}
}
module.exports = orderService;
