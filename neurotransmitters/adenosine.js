function adenosine() {
  const canvasEl = document.getElementById("canvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

  const oxygen = canvasEl.getContext("2d");
    oxygen.fillStyle = "black";
    oxygen.font = 20 + "pt Arial ";
    oxygen.fillText("OH", 325, 145);
    
  const oxygen2 = canvasEl.getContext("2d");
    oxygen2.fillStyle = "black";
    oxygen2.font = 20 + "pt Arial ";
    oxygen2.fillText("O", 225, 180);

  const oxygen3 = canvasEl.getContext("2d");
    oxygen3.fillStyle = "black";
    oxygen3.font = 20 + "pt Arial ";
    oxygen3.fillText("OH", 260, 275);

  const oxygen4 = canvasEl.getContext("2d");
    oxygen4.fillStyle = "black";
    oxygen4.font = 20 + "pt Arial ";
    oxygen4.fillText("HO", 170, 275);

  const nitrogen = canvasEl.getContext("2d");
    nitrogen.fillStyle = "black";
    nitrogen.font = 20 + "pt Arial ";
    nitrogen.fillText("NH2", 70, 35);

  const nitrogen2 = canvasEl.getContext("2d");
    nitrogen2.fillStyle = "black";
    nitrogen2.font = 20 + "pt Arial ";
    nitrogen2.fillText("N", 178, 70);

  const nitrogen3 = canvasEl.getContext("2d");
    nitrogen3.fillStyle = "black";
    nitrogen3.font = 20 + "pt Arial ";
    nitrogen3.fillText("N", 13, 85);

  const nitrogen4 = canvasEl.getContext("2d");
    nitrogen4.fillStyle = "black";
    nitrogen4.font = 20 + "pt Arial ";
    nitrogen4.fillText("N", 70, 172);

  const nitrogen5 = canvasEl.getContext("2d");
    nitrogen5.fillStyle = "black";
    nitrogen5.font = 20 + "pt Arial ";
    nitrogen5.fillText("N", 175, 165);

  const line1 = canvasEl.getContext("2d");
    line1.moveTo(23, 85);
    line1.lineTo(23, 125);
    line1.strokeStyle = "black";
    line1.lineWidth = 3;
    line1.stroke();

  const line2 = canvasEl.getContext("2d");
    line2.moveTo(88, 52);
    line2.lineTo(127, 72);
    line2.strokeStyle = "black";
    line2.lineWidth = 3;
    line2.stroke();

  const line3 = canvasEl.getContext("2d");
    line3.moveTo(88, 160);
    line3.lineTo(127, 140);
    line3.strokeStyle = "black";
    line3.lineWidth = 3;
    line3.stroke();

  const line4 = canvasEl.getContext("2d");
    line4.moveTo(220, 100);
    line4.lineTo(187, 69);
    line4.strokeStyle = "black";
    line4.lineWidth = 3;
    line4.stroke();

  const line5 = canvasEl.getContext("2d");
    line5.moveTo(185, 165);
    line5.lineTo(185, 195);
    line5.strokeStyle = "black";
    line5.lineWidth = 3;
    line5.stroke();

  const ctx2 = canvasEl.getContext("2d");
    ctx2.moveTo(185, 195);
    ctx2.lineTo(225, 175);
    ctx2.lineTo(185, 195);
    ctx2.lineTo(215, 235);
    ctx2.lineTo(205, 255);
    ctx2.lineTo(215, 235);
    ctx2.lineTo(255, 235);
    ctx2.lineTo(265, 255);
    ctx2.lineTo(255, 235);
    ctx2.lineTo(285, 195);
    ctx2.lineTo(285, 155);
    ctx2.lineTo(325, 140);
    ctx2.lineTo(285, 155);
    ctx2.lineTo(285, 195);
    ctx2.lineTo(245, 175);
    ctx2.strokeStyle = "black";
    ctx2.lineWidth = 3;
    ctx2.stroke();

  const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(30, 130);
    ctx.lineTo(30, 80);
    ctx.lineTo(80, 55);
    ctx.lineTo(80, 40);
    ctx.lineTo(80, 55);
    ctx.lineTo(130, 80);
    ctx.lineTo(180, 70);
    ctx.lineTo(220, 110);
    ctx.lineTo(180, 145);
    ctx.lineTo(130, 130);
    ctx.lineTo(130, 80);
    ctx.lineTo(130, 130);
    ctx.lineTo(80, 155);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();

  const description = canvasEl.getContext("2d");
    description.fillStyle = "black";
    description.font = 12 + "pt Arial ";
    description.fillText("Adenosine is a ribonucleoside comprised of adenine bound to ribose,", 0, 330);
    description.fillText("with vasodilatory, antiarrhythmic and analgesic activities. Adenosine", 0, 350);
    description.fillText("itself is a neurotransmitter. Adenosine or adenosine derivatives play", 0, 370);
    description.fillText("many important biological roles in addition to being components of", 0, 390);
    description.fillText("DNA and RNA. Phosphorylated forms of adenosine play roles in", 0, 410);
    description.fillText("cellular energy transfer, signal transduction and the synthesis of RNA.", 0, 430);

  const description2 = canvasEl.getContext("2d");
    description2.fillStyle = "black";
    description2.font = 8 + "pt Arial ";
    description2.fillText("https://pubchem.ncbi.nlm.nih.gov/compound/adenosine#section=Top", 0, 470);

};

adenosine();
