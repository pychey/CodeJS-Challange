function drawRectangle(width,height){
    let rectangleString = '';
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            rectangleString += '*';
        }
        rectangleString += '\n';
    }
    return rectangleString;  
}

console.log(drawRectangle(3,4));
//console.log(drawRectangle(5,2));
//console.log(drawRectangle(5,-2));