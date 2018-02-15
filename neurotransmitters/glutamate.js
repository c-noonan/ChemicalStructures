const glutamate = function() {
    const canvasEl = document.getElementById("canvas");
        canvasEl.width = 500;
        canvasEl.height = 500;

    const oxygen = canvasEl.getContext("2d");
        oxygen.fillStyle = "black";
        oxygen.font = 25 + "pt Arial ";
        oxygen.fillText("O", 116, 102);

    const oxygen2 = canvasEl.getContext("2d");
        oxygen2.fillStyle = "black";
        oxygen2.font = 25 + "pt Arial ";
        oxygen2.fillText("-O", 40, 175);

    const oxygen3 = canvasEl.getContext("2d");
        oxygen3.fillStyle = "black";
        oxygen3.font = 25 + "pt Arial ";
        oxygen3.fillText("O", 318, 102);

    const oxygen4 = canvasEl.getContext("2d");
        oxygen4.fillStyle = "black";
        oxygen4.font = 25 + "pt Arial ";
        oxygen4.fillText("O-", 380, 175);

    const nitrogen = canvasEl.getContext("2d");
        nitrogen.fillStyle = "black";
        nitrogen.font = 25 + "pt Arial ";
        nitrogen.fillText("NH3", 265, 215);

    const line1 = canvasEl.getContext("2d");
        line1.moveTo(80, 160);
        line1.lineTo(130, 135);
        line1.lineTo(180, 160);
        line1.strokeStyle = "black";
        line1.lineWidth = 3;
        line1.stroke();

    const line2 = canvasEl.getContext("2d");
        line2.moveTo(125, 135);
        line2.lineTo(125, 105);
        line2.strokeStyle = "black";
        line2.lineWidth = 3;
        line2.stroke();

    const line3 = canvasEl.getContext("2d");
        line3.moveTo(135, 135);
        line3.lineTo(135, 105);
        line3.strokeStyle = "black";
        line3.lineWidth = 3;
        line3.stroke();

    const line4 = canvasEl.getContext("2d");
        line4.moveTo(325, 134);
        line4.lineTo(325, 105);
        line4.strokeStyle = "black";
        line4.lineWidth = 3;
        line4.stroke();

    const line5 = canvasEl.getContext("2d");
        line5.moveTo(335, 134);
        line5.lineTo(335, 105);
        line5.strokeStyle = "black";
        line5.lineWidth = 3;
        line5.stroke();
 
    const line6 = canvasEl.getContext("2d");
        line6.moveTo(180, 160);
        line6.lineTo(230, 135);
        line6.lineTo(280, 160);
        line6.lineTo(330, 135);
        line6.lineTo(380, 160);
        line6.strokeStyle = "black";
        line6.lineWidth = 3;
        line6.stroke();

    const line7 = canvasEl.getContext("2d");
        line7.moveTo(280, 160);
        line7.lineTo(280, 185);
        line7.strokeStyle = "black";
        line7.lineWidth = 3;
        line7.stroke();

    const description = canvasEl.getContext("2d");
        description.fillStyle = "black";
        description.font = 12 + "pt Arial ";
        description.fillText("Glutamate is considered to be the major mediator of excitatory signals", 0, 270);
        description.fillText("in the mammalian central nervous system and is involved in most", 0, 290);
        description.fillText("aspects of normal brain function including cognition, memory and", 0, 310);
        description.fillText("learning. It is almost exclusively located inside the cells. Glutamate", 0, 330);
        description.fillText("does not only mediate a lot of information, but also information which", 0, 350);
        description.fillText("regulates brain development and cellular survival, differentiation and", 0, 370);
        description.fillText("elimination as well as formation and elimination of synapses. Both too", 0, 390);
        description.fillText("much and too little glutamate is harmful. This implies that glutamate",0 , 410);
        description.fillText("is both essential and highly toxic at the same time.", 0, 430);

    const description2 = canvasEl.getContext("2d");
        description2.fillStyle = "black";
        description2.font = 8 + "pt Arial ";
        description2.fillText("https://neurotransporter.org/glutamate.html", 0, 470);

};

glutamate();
