const canvas = document.getElementById("lifechoices");
const ctx = canvas.getContext("2d");
const game = new Game(canvas);

//fondo
let selectedChoices = null;
const canvasBckgr = new Image();
canvasBckgr.src = "images/life_choice_02 640.png";


canvasBckgr.onload = function () {
    ctx.drawImage(canvasBckgr, 0, 0);



}


const player = {
    img: null,
    x: 200,
    y: 200,
    speed: 100,


    loadImg: function () {
        this.img = new Image();
        this.img.src = "images/confused.png"
        this.img.onload = () => {
            ctx.drawImage(this.img, this.x, this.y);

        }


    }
}


function startGame() {
    player.loadImg();
    selectedChoices = pickChoice(2);


}


function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(canvasBckgr, 0, 0);
    ctx.drawImage(player.img, player.x, player.y);
    let i = 0;

    selectedChoices.map(item => {
        if (i === 0) {
            printChoice(item, 500);
        } else {
            printChoice(item, 100);

        }


        i += 1
    })
}


window.onload = () => {
    document.getElementById('start-btn').onclick = () => {
        startGame();
    };
}

function playerMove(event) {
    if (game.hasEnded()) {
        return
    }
    if (event.code == "ArrowRight") {
        player.x += player.speed;
    }
    if (event.code == "ArrowLeft") {
        player.x -= player.speed;
    }
    checkChoices();
    updateCanvas();
}





function selectRandom() {
    return Math.floor(Math.random() * choicesArray.length);

};

function pickChoice(n) {

    const selectedChoices = [];

    for (let i = 0; i < n; i++) {
        const random = selectRandom();
        selectedChoices.push({
            name: choicesArray[random].name,
            coord: i * 400,
            points: choicesArray[random].points,
            img: choicesArray[random].img,
            x: choicesArray[random].x,
            y: choicesArray[random].y,

        })
    }
    return selectedChoices;

};




function printChoice(item, position) {


    var img = new Image();
    img.src = item.img;
    img.onload = () => {
        ctx.drawImage(img, position, canvas.height / 2, 40, 40);
    }
}



function checkChoices() {

    if (player.x === 500) {
        selectRight();
        selectedChoices = pickChoice(2);
    }

    if (player.x === 100) {
        selectLeft();
        selectedChoices = pickChoice(2);
    }


}

function selectLeft() {
    console.log("izqda selecc")
    game.addSelectedChoice(selectedChoices[0])
    if (game.hasEnded()) {
        return printEndGame();
    }
}

function selectRight() {
    console.log("derecha selecc")
    game.addSelectedChoice(selectedChoices[1])
    if (game.hasEnded()) {
        return printEndGame();
    }
}










function printresult1() {
    console.log("result1");
    const result1 = {
        img: null,
        x: 0,
        y: 0,
        loadImg: function () {
            this.img = new Image();
            this.img.src = "images/congratulations.png"
            this.img.onload = () => {
                ctx.drawImage(this.img, this.x, this.y);

            }


        }
    }
    result1.loadImg();
}

function printresult2() {

    const result2 = {
        img: null,
        x: 0,
        y: 0,
        loadImg: function () {
            this.img = new Image();
            this.img.src = "images/ko.png"
            this.img.onload = () => {
                ctx.drawImage(this.img, this.x, this.y);

            }


        }
    }
    result2.loadImg();
}

function printEndGame() {
    if (game.playerWon() === true) {

        return printresult1();
    }

    if (game.playerWon() === false) {

        return printresult2();
    }

}




// if(player.x >= canvas.width - 50) {
//     player.x = canvas.width - 50;
//   } else if (player.x <= 0) {
//     player.x = 0;
//   }
//   if (player.y <= 0) {
//     player.y = 0;
//   } else if(player.y >= canvas.height - 300) {
//     player.y = canvas.height - 300;
//   }



document.onkeydown = playerMove;