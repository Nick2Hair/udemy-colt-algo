let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7];

const multiplePointers = (arr => {
    if(arr.length === 0) {
        return 0;
    }
    let i=0;
    for(let j = 1; j<arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    let result = i+1;
    return result;
});


let test = multiplePointers(arr)

console.log(test);
