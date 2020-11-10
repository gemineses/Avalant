/*CORE VARIABLES, DONTTTTT TOUCH!!*/

function startGame() {
    setCharacters();
    isRequiredPaintMap = true;
    generateMap();
    gameArea.start();
    startQuest(quests.login);
    uiBoxes_generateUIBoxes();
}



function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
}