const validAnagram = (str1, str2) => {
    
    if(str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}


const test = validAnagram('aaz', 'zza');
const test2 = validAnagram('aaa', 'aaa');
const test3 = validAnagram('abc', 'cba');


console.log(test);
console.log(test2);
console.log(test3);