var uiBoxesIsActive = true;
function uiBoxes_generateUIBoxes(e){
    uiBoxesIsActive = !uiBoxesIsActive;
    if(uiBoxesIsActive && e != undefined){
        UIContext = gameArea.canvasUIContext;
        UIContext.rect(0,0,100,100);
        UIContext.fill();
    }
    else{
        gameArea.clear.ui();    
    }
    
}