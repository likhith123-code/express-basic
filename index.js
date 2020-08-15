var rect = require('./async_node')

function answer(a,b){
   rect(a,b,(err,message)=>{
       if(err){
           console.log("Error occured")
       }
       else{
           console.log("Area is : "+message.area())
           console.log("Perimeter is : "+message.perimeter())
       }
   })
   console.log("Before completion of function call ");
}

answer(10,30);