const canvas = document.getElementById("lifechoices");
const ctx = canvas.getContext("2d");

//fondo

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
            ctx.drawImage(this.img, this.x, this.y, this.speed);

        }


    }
}








function startGame() {
    player.loadImg();
    choices.printChoices();

}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(canvasBckgr, 0, 0);
    ctx.drawImage(player.img, player.x, player.y);

}



window.onload = () => {
    document.getElementById('start-btn').onclick = () => {
        startGame();
    };
}

function playerMove(event) {
    if (event.code == "ArrowRight") {
        player.x += player.speed;
        console.log("dcha");
    }
    if (event.code == "ArrowLeft") {
        player.x -= player.speed;
        console.log("izqda");


    }
}

const choicesArray = [{
        name: "Rest on your sofa",
        points: 15,
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
        name: "Enjoy and browse",
        points: 7,
    },
    {
        name: "Buy the books that every good programmer should read throughout his life.",
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

function selectChoice(choicesArray) {
    if (choicesArray === "") {
        return '';
    }
    return choicesArray[Math.floor(Math.random() * choicesArray.lenght)];
    console.log();
}


//const choices = {
//    name  = selectChoice(),
//       function printChoices() {
//           ctx.fillText(this.name, 50, 50);
//           ctx.font = "Press Start 2P";
//
//    }
//
//}





const result1 = {
    ctx.font = "Press Start 2P";
    ctx.fillText("You fell asleep at work! You need to find a balance between your desire to grow and your life :(
    Learning to rest is essential to live better.", 150, 150);
    }


const result2 = {
    ctx.font = "Press Start 2P";
    ctx.fillText("Congratulations! Continuing learning is necessary and you know it. Sharing, growing, participating in the community ... is just as important as enjoying all your successes! You found the balance, keep it up!", 150, 150);
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

        updateCanvas();


        document.onkeydown = playerMove;