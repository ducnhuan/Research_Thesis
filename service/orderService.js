const jsforce = require('jsforce');
class orderService{
    static getDetail(id)
    {
    var conn = new jsforce.Connection({
        instanceUrl: 'https://testingsvtech-dev-ed.my.salesforce.com',
        accessToken: '00D0o0000018x8b!AQsAQKSdhkAF2vJgq18jL3.xLAKi6jiHC0SXCA1srK57y0E1w5YrsCaZmZxCMZsyz0zFvA3KBIbLJ4kB.SiPA1BHFPKBKMle'
    });
    //console.log(id);
    var options={headers:{'Id':id}}; 
    return new Promise(function(resolve,reject){
        conn.apex.get('/Order',options,function(err,result){
            if(err){reject(err);}
            else{resolve(result);}
    })
    });
    }

}
module.exports = orderService;
