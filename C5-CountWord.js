function countWord(sentence){
    let readingWord = false;
    let numberOfWord = 0;
    for (let i=0; i<sentence.length; i++){
        if (sentence[i] != ' ' && readingWord != true){
            numberOfWord += 1;
            readingWord = true;
        }
        else if (sentence[i] == ' '){
            readingWord = false;
        }
    }
    return numberOfWord;
}

console.log(countWord("hello world"));
console.log(countWord("this is the best day"));
console.log(countWord("a bb ccc ddddddd e"));