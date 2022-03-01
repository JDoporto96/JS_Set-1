//Ex01
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

function limitFunc(fn,times){
    var count =0;
    return(()=>{
        if (count<times){
            fn()
            count++;
        }
        
    })
}

var myfunc=()=>console.log("Hello World");
var mylimitFn = limitFunc(myfunc,2);

mylimitFn();
mylimitFn();
mylimitFn();
mylimitFn();
mylimitFn();