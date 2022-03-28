//Ex05
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
function count(input){
    if (typeof input == "string"){
        const vowels=/[aeiou]/gi;
        var count=0;
        try{
            count = input.match(vowels).length;
            return count; }
        catch{
            return 0;
        } 
    }

    else if(typeof input =="number"){
        return Math.floor(Math.log10(input) +1);
    }
    else{
        console.log(typeof input);
    }
}

console.log(count("aaHello World"));
console.log(count(12345));
console.log(count(1234));
console.log(count(123));
console.log(count(12));
console.log(count("xyz"))

