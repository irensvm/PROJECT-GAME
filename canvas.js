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
        this.img.src = "images/player2.png"
        this.img.onload = () => {
            ctx.drawImage(this.img, this.x, this.y);

        }


    }
}


function startGame() {
    player.loadImg();
    selectedChoices = pickChoice(5);
    printChoice();

}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(canvasBckgr, 0, 0);
    ctx.drawImage(player.img, player.x, player.y);
    selectedChoices.map(i => {
        ctx.fillText(i.name, i.coord, 300)
    })


}


window.onload = () => {
    document.getElementById('start-btn').onclick = () => {
        startGame();
    };
}

function playerMove(event) {
    if (event.code == "ArrowRight") {
        player.x += player.speed;

    }

    if (event.code == "ArrowLeft") {

        player.x -= player.speed;


    }

    checkChoices();
    updateCanvas();

}




const choicesArray = [{
        name: "Rest on your sofa",
        points: 15,
        img: "/images/choices/couch.png"
    },
    {
        name: "Eat some waffles, you deserve them",
        points: 15,
    },
    {
        name: "Drink fancy & healthy smoothie",
        points: 15,
    },
    {
        name: "Attend a Webinar",
        points: 5,
    },
    {
        name: "Ironbeers",
        points: 15,
    },
    {
        name: "Create a manual of good practices",
        points: 5,
    },
    {
        name: "Join a Hackathon",
        points: 5,
    },
    {
        name: "Extend your Canvas knowledge",
        points: -5,
    },
    {
        name: "Review your first LAB: smiles and tears",
        points: 5,
    },
    {
        name: "Research, read and stay updated",
        points: 7,
    },
    {
        name: "Buy and read the books that every good programmer should read throughout his life.",
        points: 5,
    },
    {
        name: "Persevere, don't give up, and learn another programming language",
        points: 7,
    },
    {
        name: "Plan to nap this Sunday",
        points: 25,
    },
    {
        name: "Do some code review",
        points: 7,
    },
    {
        name: "Stop and take a deep breath",
        points: 25,
    },
    {
        name: "Look for some developer pranks",
        points: 5,
    },
];

function selectRandom() {
    return Math.floor(Math.random() * choicesArray.length);

};

function pickChoice(n) {

    const selectedChoices = [];

    for (let i = 0; i < n; i++) {
        selectedChoices.push({
            name: choicesArray[selectRandom()].name,
            coord: i * 400
        })
    }
    return selectedChoices;

};

//const choice = {
//x: 50,
//y: 50,
//choices: pickChoice(2),

//drawChoices: function () {
//    ctx.fillText(selectedChoices, 10, 50, canvas.width / 2, canvas.height / 2)
//}
//}



function printChoice() {
    selectedChoices.map(i => {
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(i.name, i.coord, 300, canvas.width / 2, canvas.height / 2)
    })


}




function checkChoices() {
    if (player.x === 500) {
        selectRight();
    }
    if (player.x === 100) {
        selectLeft();
    }

}

function selectLeft() {
    console.log("izqda selecc")
    selectedChoices[0]
    console.log(selectedChoices[0]);
    return startGame();
}

function selectRight() {
    console.log("derecha selecc")
    selectedChoices[1]
    console.log(selectedChoices[1]);
    return startGame();


}











const result1 = {
    img: null,
    x: 0,
    y: 0,
    loadImg: function () {
        this.img = new Image();
        this.img.src = "images/congratulations.png"
        this.img.onload = () => {
            ctx.drawImage(this.img, this.x, this.y, );

        }


    }
}


const result2 = {
    img: null,
    x: 0,
    y: 0,
    loadImg: function () {
        this.img = new Image();
        this.img.src = "images/ko.png"
        this.img.onload = () => {
            ctx.drawImage(this.img, this.x, this.y, );

        }


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