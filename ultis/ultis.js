class Ultis {
    static success(data){
        return {
            state:'successful',
            data,
        };
    }
    static fail(err,message){
        return {
            state:'failed',
            err,
            message,
        };
    }

}
module.exports=Ultis;