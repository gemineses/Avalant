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
    

    constructor(ID, NAME){
        this.#id = ID;
        this.#name = NAME;
    }
    
    /* Getters & Setters */
    GetPositionX(){ if(this.validateObjectReadyToBePrinted) return this.#positionX; }
    GetPositionY(){ if(this.validateObjectReadyToBePrinted) return this.#positionY; }
    GetName(){ if(this.validateObjectReadyToBePrinted) return this.#name; }
    GetSpeed(){ if(this.validateObjectReadyToBePrinted) return this.#speed; }
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

    validateObjectReadyToBePrinted = function(){
        if(this.#positionX === undefined) this.#isObjectReady = false;
        if(this.#positionX === undefined) this.#isObjectReady = false;
        if(this.#speed === undefined) this.#isObjectReady = false;
        if(this.#sprite === undefined) this.#isObjectReady = false;
        this.#isObjectReady = true;
    }

    
    draw = function(){
        if(this.#isObjectReady){
            
        }
        return false;
    }

    
    printTest = function(){
        if(this.#isObjectReady){
            console.log('PON CUALQUIER MENSAJE AQUI');
        }
    }
}

class SensesI{
    #typeSense = undefined;
    #viewRotacion = undefined;
    #viewLenght = undefined;
    //#viewZoom = new FuzzyI();
    //#excitementValue = 0; // evaluates the interest for him actual route
}