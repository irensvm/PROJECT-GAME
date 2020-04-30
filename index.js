//ideas items

//++
//EAT SOME WAFFLES
//DRINK FANCY & HEALTHY SMOOTHIE
//REST ON YOUR SOFA
//
//
//+
//ATTEND WEBINAR 
//CREATE A MANUAL OF GOOD PRACTICES
//JOIN A HACKATHON
//IRONBEERS
//

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.playerpoints = 0;
        this.choice = [greatChoices, necessaryChoices];
        this.gameOver = false;
        this.rondas = 5;
        this.player
    }

    startLoop() {
        this.player = new Player(this.canvas);

        const loop = () => {
            if (!this.gameOver || this.rondas > 5) {
                //enseñar 2choices

            }
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
            if (!this.isGameOver) {

            }

        }
    }



    updateCanvas() {
        this.player.update();
        this.choice.forEach((choice) => {
            choice.update();
        });
    }

    drawCanvas() {
        this.player.draw();
        this.choice.forEach((choice) => {
            choice.draw();
        });
    }




    choose(greatChoices, necessaryChoices) {

    }
}