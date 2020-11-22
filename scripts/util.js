function UTIL_generateArrays(x, y){
    let thisArray = [];
    let thisArrayY = [];
    for(let i = 0; i< x; i++){
        thisArrayY = [];
        for(let j = 0; j< y; j++){
            thisArrayY.push("");
        }
        thisArray.push(thisArrayY);
    }
    return thisArray;
}


// thanks to 
// https://stackoverflow.com/a/54569758
function UTIL_invertHex(hex) {
    hex = hex.replace('#', '')
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}

function UTIL_getMousePosition(event){
    var rect = gameArea.canvasGameElement.getBoundingClientRect();
	return {
		x : event.clientX - rect.left,
		y : event.clientY - rect.top
    }
}

function UTIL_getDistanceByDegree(degree, xPosition, yPosition, distance){
    hourFormat = UTIL_calculateHourByDegree(degree);
    let point = {
        originalPosition: {
            x: xPosition,
            y: yPosition
        },
        focusView: {
            x: 0,
            y: 0
        },
        leftView: {
            x: 0,
            y: 0
        },
        rightView: {
            x: 0,
            y: 0
        }
    };

    //calculate degree direction by clock with 8 sides
    switch(hourFormat){
        case 1:
            point.leftView.x = xPosition;
            point.leftView.y = yPosition - (distance);
            point.focusView.x = xPosition + distance;
            point.focusView.y = yPosition - distance;
            point.rightView.x = xPosition + distance;
            point.rightView.y = yPosition;
            break;
        case 2:
            point.originalPosition.x += distance;
            break;
        case 3:
            point.leftView.x = xPosition + distance;
            point.leftView.y = yPosition;
            point.focusView.x = xPosition + distance;
            point.focusView.y = yPosition + distance;
            point.rightView.x = xPosition;
            point.rightView.y = yPosition + distance;
            break;
        case 4:
                point.originalPosition.y += distance;
            break;
        case 5:
            point.leftView.x = xPosition;
            point.leftView.y = yPosition + distance;
            point.focusView.x = xPosition - distance;
            point.focusView.y = yPosition + distance;
            point.rightView.x = xPosition - distance;
            point.rightView.y = yPosition;
            break;
        case 6:
                point.originalPosition.y -= distance ;
            break;
        case 7:
            point.leftView.x = xPosition - distance;
            point.leftView.y = yPosition;
            point.focusView.x = xPosition - distance;
            point.focusView.y = yPosition - distance;
            point.rightView.x = xPosition;
            point.rightView.y = yPosition - distance;
            break;
        case 8:
                point.originalPosition.y -= distance;
            break;
    }
    return point;
}


function UTIL_calculateHourByDegree(degree){
    return Math.round(degree / 45); // hour format
}

function UTIL_getDegreeFromPoints(xPosition, yPosition, newXPosition, newYPosition){
    let triangleX = xPosition - newXPosition;
    let triangleY = yPosition - newYPosition;
    
    let isXNegative = triangleX < 1;
    let isYNegative = triangleY < 1;
    
    let isXClose = triangleX < (playersVisionDistance/2) || triangleX < ((playersVisionDistance/2)*-1);
    let isYClose = triangleY < (playersVisionDistance/2) || triangleY < ((playersVisionDistance/2)*-1);
    //Degree by clockwise
    let degree = 0;

    if(!isXNegative && !isYNegative){
        degree = 315;
    } else if(!isXNegative && isYNegative){
        degree = 225;
    } else if(isXNegative && isYNegative){
        degree = 135;
    } else if(isXNegative && !isYNegative){
        degree = 45;
    }

    return degree;
}

function UTIL_getMapTypeSizeByCharacter(map, xPosition, yPosition){
    return map[Math.floor(xPosition/10)][Math.floor(yPosition/10)];
}
