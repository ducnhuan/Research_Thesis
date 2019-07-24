const jsforce = require('jsforce');
const conf = require('../config/salesforce')
const localStorage=require('localStorage');
class orderService{
static getDetail(id)
    {
    var conn=new jsforce.Connection({
        serverUrl:'https://testingsvtech-dev-ed.my.salesforce.com',
        accessToken:'00D0o0000018x8b!AQsAQE0sAyUlF6FuiwNLwy2kwErbYxC7RcAhLcaUuKUcoCDCLBNoN4.okRBQUr14WzglBMgrye4K.C3DAs9L7Hj8K1cU3tuO'
    })
    //console.log(accessToken);
    var options ={headers:{'Id':id}};
    return new Promise(function(resolve,reject)
    {
        conn.apex.get('/Order',options,function(err,result)
        {
            if(err){reject(err);}
            else{resolve(result);}
        })
    })
    //console.log(conf);
//     var conn = new jsforce.Connection({loginUrl: conf.loginUrl});
//    return conn.login(conf.userName,conf.password)
//    .then((userInfo)=>
//    {
//        var myValue={instansUrl:conn.instanceUrl, accessToken:conn.accessToken};
//        localStorage.setItem('conn',JSON.stringify(myValue));
//        //var options ={headers:{'Id':id}};
//        //return new Promise(function(resolve,reject)
//        //{
//         //   conn.apex.get('/Order',options,function(err,result)
//        //    {
//         //       if(err){reject(err);}
//        //        else{resolve(result);}
//       //     })
//       // })
//    })
//    .catch((err)=>{return console.log(err)})
}
}
module.exports = orderService;
