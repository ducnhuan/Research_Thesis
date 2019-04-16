const jsforce = require('jsforce');
class orderService{
    static getDetail(id)
    {
    var conn = new jsforce.Connection({
        serverUrl:'https://testingsvtech-dev-ed.my.salesforce.com',
        accessToken:'00D0o0000018x8b!AQsAQL.N1ahUnxvFcLzpBbpXrJSE2_nSahJJbVx9_5.2aUEvaLDybwFUvYdUGZzyzVGQ5v8Wo1rVy6WgDJ6WCc4EFD8nxxhz'
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