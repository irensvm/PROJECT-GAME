
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
        speed: 30,
        size: 100,
        loadImg: function () {
            this.img = new Image();
            this.img.src = "images/player.png"
            this.img.onload = () => {
                ctx.drawImage(this.img, this.x, this.y, this.size,this.speed );
            
        }


    }
    }   

    function startGame() {
        player.loadImg();
        
    }
  

    window.onload = () => {
        document.getElementById('start-btn').onclick = () => {
            startGame();
        };
    }



    


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




