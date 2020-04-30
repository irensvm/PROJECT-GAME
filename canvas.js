
    const canvas = document.getElementById("lifechoices");
    const ctx = canvas.getContext("2d");

    //fondo

    const canvasBckgr = new Image();
    canvasBckgr.src = "images/life_choice_02 640.png";

    canvasBckgr.onload = function() {
        ctx.drawImage(canvasBckgr,0,0);
    }



    const player = {
        img: null,
        x: 300,
        y: 300,
        speed: 100,
        size: 100,
        loadImg: function () {
            this.img = new Image();
            this.img.src = "images/player2.png"
            this.img.onload = () => {
                ctx.drawImage(this.img, this.x, this.y, this.size,this.speed );
            
        }


    }
    }   

    function startGame() {
        player.loadImg();
        
    }
    function updateCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
             
        ctx.drawImage(player.img, player.x, player.y);
        ctx.drawImage(canvasBckgr.img,0,0);
      }
      
  

    window.onload = () => {
        document.getElementById('start-btn').onclick = () => {
            startGame();
        };
    }

    function playerMove(event) {
        if(event.code == "ArrowRight"){
            player.x += player.speed;
        console.log("dcha");
        }
        if(event.code == "ArrowLeft"){
            player.x -= player.speed;
            console.log("izqda");


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
        
    }
    document.onkeydown = playerMove; 







   //const leftButton = new Image();
   //leftButton.scr = "images/descarga (1).png";
   //leftButton.onload = function() {
   //    ctx.globalCompositeOperation='source-over';
   //    ctx.drawImage(leftButton,50,50);
   //}

   //const rightButton = new Image();
   //rightButton.scr = "images/descarga.png";
   //rightButton.onload = function() {
   //    ctx.globalCompositeOperation='source-over';
   //    ctx.drawImage(rightButton,100,50);
   //}




