var uiBoxesIsActive = true;
function uiBoxes_generateUIBoxes(e){
    uiBoxesIsActive = !uiBoxesIsActive;
    if(uiBoxesIsActive && e != undefined){
        gameArea.clear.ui();
        UIContext = gameArea.canvasUIContext;
        UIContext.fillStyle = "#FFF";
        UIContext.rect(0,0,200,70);
        UIContext.fill();
        UIContext.rect(0,0,200,70);
        UIContext.stroke();

        let selectionType = uiBoxes_GetSelectionType(e);
        switch(selectionType.type){
            case 'players':
                uiBoxes_PrintPlayer(selectionType);
                break;
            case 'field':
                uiBoxes_PrintField(selectionType);
                break;
        }
    }
    else{
        gameArea.clear.ui();    
    }
    
}

function uiBoxes_GetSelectionType(e){
    let mousePosition = UTIL_getMousePosition(e)
    mousePosition.x = Math.floor(mousePosition.x/10);
    mousePosition.y = Math.floor(mousePosition.y/10);
    
    let selectionBox = {
        type : '',
        position: {
            x: mousePosition.x,
            y: mousePosition.y
        },
        content: {}
    }

    for(indexPlayer = 0; indexPlayer< charactersList.length; indexPlayer++){
        let positionX = Math.floor(charactersList[indexPlayer].x/10);
        let positionY = Math.floor(charactersList[indexPlayer].y/10);
        if(mousePosition.x == positionX && mousePosition.y == positionY){
            selectionBox.type = 'players';
            selectionBox.content = charactersList[indexPlayer];
            return selectionBox;
        }
    }

    selectionBox.type = 'field';
    selectionBox.content = MAPPROCEDURE.map[mousePosition.x][mousePosition.y];
    return selectionBox;
}

function uiBoxes_PrintPlayer(selectionType){
    UIContext = gameArea.canvasUIContext;
    UIContext.rect(10,10, 50, 50);
    UIContext.stroke();
    UIContext.font = "18px Arial";
    UIContext.fillStyle = "#000";
    UIContext.fillText(selectionType.content.name, 70, 25);
}
    
function uiBoxes_PrintField(selectionType){
    UIContext = gameArea.canvasUIContext;
    UIContext.rect(10,10, 50, 50);
    UIContext.stroke();
    UIContext.fillStyle = selectionType.content.groundType.color;
    UIContext.fillRect(10,10, 50, 50);
    UIContext.font = "18px Arial";
    UIContext.fillStyle = "#000";
    UIContext.fillText(selectionType.content.groundType.name, 70, 25);
}