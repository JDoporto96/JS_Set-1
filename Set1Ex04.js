//Ex04
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

function copyProp(target,source,array=undefined){
    if(array==undefined){
        for(var prop in source){
            target[prop]=source[prop];
        }
    }
    else{
        for(var prop of array){
            if (prop in source){
                target[prop]=source[prop];
            }
        }
    }
}

var a = {
    'a':'hi',
    'b':'bye',
    'c':'goodbye',
    'd':'whatsapp'
}
var b ={

}
var c ={

}
console.log("a:");
console.log(a);

console.log("b:");
console.log(b);
copyProp(b,a,["a","d"]);
console.log("b:");
console.log(b);

console.log("c:");
console.log(c);
copyProp(c,a);
console.log("c:");
console.log(c);