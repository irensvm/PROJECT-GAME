const canvas = document.getElementById("lifechoices");
const ctx = canvas.getContext("2d");

var canvasBckgr = new Image();
canvasBckgr.src = "/images/life_choice_02.png";

canvasBckgr.onload = function() {
    ctx.drawImage(canvasBckgr);
}