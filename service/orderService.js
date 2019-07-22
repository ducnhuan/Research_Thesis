const jsforce = require('jsforce');
class orderService{
    static getDetail(id)
    {
    var conn = new jsforce.Connection({
        instanceUrl:'https://testingsvtech-dev-ed.my.salesforce.com',
        accessToken:'6Cel800D0o0000018x8b8880o000001OvfPnJK0TTXhpvM4M8zEy7E012BqYll1Jp0NeVFQzz9yqjQqc8Sa8ET60p2Jk09eODJ3nWlg2BBX'
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
