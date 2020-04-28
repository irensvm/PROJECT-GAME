
    const canvas = document.getElementById("lifechoices");
    const ctx = canvas.getContext("2d");

    const canvasBckgr = new Image();
    canvasBckgr.src = "images/life_choice_02.png";

    canvasBckgr.onload = function() {
        ctx.drawImage(canvasBckgr,0,0);
    }

    const leftButton = new Image();
    leftButton.scr = "images/descarga (1).png";
    leftButton.onload = function() {
        ctx.globalCompositeOperation='source-over';
        ctx.drawImage(leftButton,50,50);
    }

    const rightButton = new Image();
    rightButton.scr = "images/descarga.png";
    rightButton.onload = function() {
        ctx.globalCompositeOperation='source-over';
        ctx.drawImage(rightButton,100,50);
    }




