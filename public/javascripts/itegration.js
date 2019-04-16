
console.log('1');
$.get('service/api/order/getDetail/8010o000003Rw6kAAC').then(response=>{
console.log(response.body);     
},response =>{console.log('failed');});
   

