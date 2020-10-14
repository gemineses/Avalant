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