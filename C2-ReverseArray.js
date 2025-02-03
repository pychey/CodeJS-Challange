function reverseArray(array){
    let start = 0;
    let end = (array.length - 1);
    let tempStart;
    while(start<end){
        tempStart = array[start];
        array[start] = array[end];
        array[end] = tempStart;
        start++;
        end--;
    }
    return array;
}

console.log(reverseArray([14,15,16,20]));
console.log(reverseArray([5,4,3,2,1]));
console.log(reverseArray([]));