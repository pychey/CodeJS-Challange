function countVote(voteList){
    if(voteList.length == 0) return "There is no vote yet";

    let voteA = 0;
    let voteB = 0;
    let voteC = 0;

    for (let i=0; i<voteList.length; i++){
        if      (voteList[i] == 'A') voteA++;
        else if (voteList[i] == 'B') voteB++;
        else if (voteList[i] == 'C') voteC++;
    }

    if      (voteA > voteB && voteA > voteC) return "A is the winner";
    else if (voteB > voteA && voteB > voteC) return "B is the winner";
    else if (voteC > voteA && voteC > voteB) return "C is the winner";
    else if (voteA== voteB && voteA > voteC) return "A and B are both winners";
    else if (voteA== voteC && voteA > voteB) return "A and C are both winners";
    else if (voteB== voteC && voteB > voteA) return "B and C are both winners";
    else                                     return "A, B, C has the same votes";
}

console.log(countVote(['A', 'B', 'A', 'C', 'A']));
console.log(countVote(['A', 'B', 'B', 'C', 'A']));
console.log(countVote([]));