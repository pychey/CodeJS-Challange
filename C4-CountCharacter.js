function countCharacter(string,char){
    let count = 0;
    for(let i=0; i<string.length; i++){
        if(string[i]==char){
            count++;
        }
    }
    return count;
}

console.log(countCharacter("hello world",'o'));
console.log(countCharacter("aaa bbb a",'a'));
console.log(countCharacter("abc",'d'));