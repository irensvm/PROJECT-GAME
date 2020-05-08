class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.playerPoints = 0;
        this.choices = [];
        this.gameOver = false;
        this.rondas = 7;
        this.player
    }

    startLoop() {
        this.player = new Player(this.canvas);

        const loop = () => {
            if (!this.gameOver || this.rondas > 7 || selected === true) {
                this.updateCanvas();
                this.clearCanvas();
                this.drawCanvas();
            }
            if (!this.isGameOver) {
                result2.loadImg();
            }

        }
    }



    updateCanvas() {
        this.player.update();
        this.choices.forEach(() => {
            choices.update();
        });

    }

    drawCanvas() {
        this.player.draw();
        this.choices.forEach((choices) => {
            choices.draw();
        });
    }


    addSelectedChoice(selectedChoice) {

        this.choices.push(selectedChoice)


    }





    hasEnded() {
        return this.choices.length === this.rondas
    }

    playerWon() {
        if (this.playerpoints > 25)
            return true
    }







}