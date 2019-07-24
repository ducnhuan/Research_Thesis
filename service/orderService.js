const jsforce = require('jsforce');
const conf = require('../config/salesforce')
class orderService{
static getDetail(id)
    {
    var accessToken='00D0o0000018x8b!AQsAQAa264SPQMuPQfiTs9YLAK_grpcUPLdZFbbAyOjMQGr0LGEUylHhdcW320Hg7qdK3CpQFv2gOmJdO9vOZ0.QVjJ4WMNP';
    var conn= new jsforce.Connection(
        {
            oauth2:
            {
                clientId:'3MVG9pe2TCoA1Pf7kEZZrWxpDHvTR_VY9EAurnLf5AFnfX4vtnR0_O3eHw5bekg3fIPL61hm1P3vunpIrHnyF',
                clientSecret:'556B02D98A0A960B456D259B1196551096D7F30806F2D824F2BEAA97EB797D14',
                redirectUri:'https://smartcontract-iota.herokuapp.com/'

            },
            instanceUrl:'https://testingsvtech-dev-ed.my.salesforce.com',
            accessToken:accessToken,
            refreshToken:'5Aep861ARUdJp8j3X2QKKTJs2Z7e.Sq_TqjsJDpjguc8ZNh5kAL2R0ASil54vGDKFW5K01kkeScCbWITwpYRaI2'
        });
    conn.on("refresh",function(accessToken,res)
    {
        this.accessToken=accessToken;
    })
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
