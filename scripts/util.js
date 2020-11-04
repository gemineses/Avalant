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
        x: xPosition,
        y: yPosition
    };
    //calculate degree direction by clock with 8 sides
    switch(hourFormat){
        case 1:
            point.x += distance;
            point.y += distance;
            break;
        case 2:
            point.x += distance;
            break;
        case 3:
            point.x += distance;
            point.y -= distance;
            break;
        case 4:
                point.y -= distance;
            break;
            case 5:
                point.x -= distance;
                point.y -= distance;
            break;
        case 6:
                point.y -= distance ;
            break;
        case 7:
                point.x -= distance;
                point.y += distance;
            break;
        case 8:
                point.y += distance;
            break;
    }
    return point;
}


function UTIL_calculateHourByDegree(degree){
    return Math.round(degree / 45); // hour format
}
