//Ex05
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
function count(input){
    if (typeof input == "string"){
        vowels=/[aEeEiIoOuU]/;
        var count=0;
        for(let letter of input ){  
            if (vowels.test(letter)){
            count++;  
            }    
        }  
      return count;  
    }

    else if(typeof input =="number"){
        return Math.floor(Math.log10(input) +1);
    }
    else{
        console.log(typeof input);
    }
}

console.log(count("Hello World"));
console.log(count(12345));
console.log(count(1234));
console.log(count(123));
console.log(count(12));

