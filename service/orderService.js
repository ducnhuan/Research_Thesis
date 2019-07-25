const jsforce = require('jsforce');
const conf = require('../config/salesforce')
const localStorage=require('localStorage');
const authenticate = require('./login');
class orderService{
static getDetail(id)
    {
    var myValue=JSON.parse(localStorage.getItem('token'));
    var token;
    if(myValue==null)
    {
        token=conf.accessToken
    }
    else{token=myValue.accessToken}
    var conn=new jsforce.Connection({
        serverUrl:conf.loginUrl,
        accessToken:token
    })
    //console.log(accessToken);
    var options ={headers:{'Id':id}};
    return new Promise(function(resolve,reject)
    {
        conn.apex.get('/Order',options,function(err,result)
        {
            if(err){
                if(err=='INVALID_SESSION_ID: Session expired or invalid')
                {
                    console.log('Error1');
                    authenticate.data.salesforcelogin();
                    reject('INVALID_SESSION_ID: Session expired or invalid. Please reload page!!')
                }
                else{reject(err);}
            }
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
