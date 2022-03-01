//Ex01
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------

function vowelCount(word){
    vowels=/[aEeEiIoOuU]/;
    var count=0;
    for(let letter of word ){  
        if (vowels.test(letter)){
            count++;  
        }    
      }  
      return count;  
}

function consonantCount(word){
    return word.length - vowelCount(word)
}

function mySort(array,ascending=true, order=undefined){
    if (order==undefined){
        if(ascending){
            return array.sort();
        }
        else{
            return array.sort().reverse();
        }
       
    }

    else if(order==1){
        return array.sort(function(a,b){
            if(ascending)
                return a.length - b.length;
            else
                return b.length - a.length;
        });

    }

    else if(order==2){
        return array.sort(function(a,b){
            if(ascending)
                return consonantCount(a) - consonantCount(b);
            else
                return consonantCount(b) - consonantCount(a);
        });

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

