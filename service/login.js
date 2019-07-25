const jsforce = require('jsforce');
const conf = require('../config/salesforce')
const localStorage = require('localStorage');
const callback = require('./orderService')
var methods={
    salesforcelogin: function()
    {
        var conn= new jsforce.Connection(
            {
                loginUrl:conf.loginUrl
            });
        conn.login(conf.userName,conf.password,function(err,userInfo)
        {
            if(err){return console.log(err)}
            var myValue={accessToken:conn.accessToken};
            localStorage.setItem('token',JSON.stringify(myValue));
        })
    }
};
exports.data = methods;
//console.log('Login.......')
// conn.login(conf.userName,conf.password)
// .then((userInfo)=>
// {
//     var myValue={instansUrl:conn.instanceUrl, accessToken:conn.accessToken};
//     localStorage.setItem('conn',JSON.stringify(myValue));
//        //var options ={headers:{'Id':id}};
//        //return new Promise(function(resolve,reject)
//        //{
//         //   conn.apex.get('/Order',options,function(err,result)
//        //    {
//         //       if(err){reject(err);}
//        //        else{resolve(result);}
//       //     })
//       // })
// })
// .catch((err)=>{return console.log(err)})
