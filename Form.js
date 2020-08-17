class Form{

    constructor(){
        this.input = createInput("name");
        this.greeting = createElement("h2");
        
        this.button = createButton("play");

    }


    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }

     display(){

        var title =createElement("h1");
        title.html("Car Racing Game");
        title.position(130,0); 
        this.greeting = createElement("h2");
        

        
        this.input.position(130,160);

        
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;

           player.update();
           player.updateCount(playerCount);
            this.greeting.html("Hello There "+ player.name);
            this.greeting.position(120,230);
        })
     }
    }