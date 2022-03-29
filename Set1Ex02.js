//Ex01
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

function limitFunc(fn,times){
    let count=0;
    return (...args)=>{
        if (count < times){
            count++;
            return fn(...args);
        }
        else{
            throw new Error(`The limit has been reached`);
        }  
    } 
}
function sum(a ,b){return a + b;}

const limSum = limitFunc(sum,2);

console.log(limSum(1,2));
console.log(limSum(5,7));
console.log(limSum(1,2));


