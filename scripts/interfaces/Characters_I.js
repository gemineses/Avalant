class CharactersI {
    #id =  0;
    #name = '';
    #positionX = undefined;
    #positionY = undefined;
    #sprite = undefined;
    #status = 0;
    #speed = 1;
    #senses = new SensesI();
    #isObjectReady = false;
    #isPlayable = false;
    #isRequiredMoveCharacter = false;
    #visionRadarPosition = 90; // 360 degree
    #visionRadarSpace = 90; // 360 degree
    #visionRadarLenght = playersVisionDistance;

    constructor(ID, NAME){
        this.#id = ID;
        this.#name = NAME;
    }
    
    
    GetSpeed(map){ 
        if(this.validateObjectReadyToBePrinted){
            let groundSpeed = 1;
            if(map != undefined){
                let mapType = map.map[Math.floor(this.#positionX/10)][Math.floor(this.#positionY/10)];
                groundSpeed = mapType.groundType.speedReduction;
            }
            return this.#speed * groundSpeed;
        } 
    }
    GetIsPlayable(){return this.#isPlayable;}
    /*  END Getters & Setters */

    generateObject = function(){
        this.#positionX = 0;
        this.#positionY = 0;
        this.#sprite = new SpriteI();
    }

    generateObject = function(X, Y){
        this.#positionX = X;
        this.#positionY = Y;
        this.#sprite = new SpriteI();
    }




}

class SensesI{
    #typeSense = undefined;
    #viewRotacion = undefined;
    #viewLenght = undefined;
    //#viewZoom = new FuzzyI();
    //#excitementValue = 0; // evaluates the interest for him actual route
}