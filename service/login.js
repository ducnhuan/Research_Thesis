const jsforce = require('jsforce');
const conf = require('../config/salesforce')
const localStorage = require('localStorage');
var conn = new jsforce.Connection({loginUrl: conf.loginUrl});
var methods={
    salesforcelogin: function()
    {
        var conn= new jsforce.Connection(
            {
                oauth2:
                {
                    clientId:'3MVG9pe2TCoA1Pf7kEZZrWxpDHvTR_VY9EAurnLf5AFnfX4vtnR0_O3eHw5bekg3fIPL61hm1P3vunpIrHnyF',
                    clientSecret:'556B02D98A0A960B456D259B1196551096D7F30806F2D824F2BEAA97EB797D14',
                    redirectUri:'https://smartcontract-iota.herokuapp.com/'

                },
                instanceUrl:'https://testingsvtech-dev-ed.my.salesforce.com',
                accessToken:'00D0o0000018x8b!AQsAQPfgHq7s.A2b_StZ.vjexx_71FSo9XjyZYucYOZbtFp4TF31ne30QjJenhD25cp7sYnQzuiaTDLnlFM0crGIOzmclWGJ',
                refreshToken:'5Aep861ARUdJp8j3X2QKKTJs2Z7e.Sq_TqjsJDpjguc8ZNh5kA7uj.Pt_v.DEREwnKUVIf4lOFdSOnxdOEabOX4'
            });
        conn.on("refresh",function(accessToken,res)
        {
            var myValue={accessToken:accessToken};
            localStorage.setItem('conn',JSON.stringify(myValue));
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
