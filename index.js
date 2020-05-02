

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.playerpoints = 0;
        this.choices = [];
        this.gameOver = false;
        this.rondas = 5;
        this.player
    }

    startLoop() {
        this.player = new Player(this.canvas);

        const loop = () => {
            if (!this.gameOver || this.rondas > 5) {
                selectChoice();
                
                //enseñar 2choices

            }
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();
            if (!this.isGameOver) {
                result2.loadImg();
            }

        }
    }



    updateCanvas() {
        this.player.update();
        this.choices.forEach((choices) => {
            choices.update();
        });
    }

    drawCanvas() {
        this.player.draw();
        this.choices.forEach((choices) => {
            choices.draw();
        });
    }

    




  
}