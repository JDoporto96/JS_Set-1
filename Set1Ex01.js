//Ex01
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

function consonantCount(word){
    let count=0;
    consonants=/(?![aeiou])[a-z]/gi;
    if(typeof word == "string"){
        count=word.match(consonants);
        if (count==null){
            return 0;   
        }
        else{
            return count.length;
        }           
    }
}

function mySort(array,ascending=true, order=undefined){
    if(ascending){
        if(order==undefined){
            return array.sort();
        }
        else if(order==1){
            return array.sort(function(a,b){  
                return a.length - b.length})
        }
        else if(order==2){
            return array.sort(function(a,b){  
                return consonantCount(a) - consonantCount(b)})
        }

    }
    else{
        if(order==undefined){
            return array.sort().reverse();
        }
        else if(order==1){
            return array.sort(function(a,b){  
                return a.length - b.length}).reverse()
        }
        else if(order==2){
            return array.sort(function(a,b){  
                return consonantCount(a) - consonantCount(b)}).reverse()
        }

    }
}

myArray=["Programming","Interface","User","Code","Developer","Software"];
console.log(myArray);
console.log(mySort(myArray));
console.log(mySort(myArray,false));
console.log(mySort(myArray,true,1));
console.log(mySort(myArray,false,1));
console.log(mySort(myArray,true,2));
console.log(mySort(myArray,false,2));

myArray=["fff","ee","dd","cc","b","a"];
console.log(mySort(myArray,false,2));
