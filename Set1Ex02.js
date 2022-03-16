//Ex01
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

function limitFunc(fn,num){
    let count =0;
    return(()=>{
        if (count<num){
            fn()
            count++;
        }
        
    })
}

var fn=()=>console.log("Hello World");
var limited = limitFunc(fn,2);

limited();
limited();
limited();