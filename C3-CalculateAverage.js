function calculateAverage(scoreList){
    if(scoreList.length == 0){
        return 0;
    }
    let totalScore = 0;
    for(let i=0; i<scoreList.length; i++){
        totalScore += scoreList[i];
    }
    let averageScore = totalScore/scoreList.length;
    return averageScore;
}

console.log(calculateAverage([10,20,30]));
console.log(calculateAverage([85, 90, 78, 92]));
console.log(calculateAverage([]));