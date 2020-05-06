function printChoice() {
    selectedChoices.map(i => {
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(i.name, i.coord, 300, canvas.width / 2, canvas.height / 2)
    })

    console.log("xxx");


}