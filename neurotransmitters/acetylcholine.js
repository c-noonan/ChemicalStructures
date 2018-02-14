document.addEventListener("DOMContentLoaded", function() {

  const canvasEl = document.getElementById("canvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

  const oxygen = canvasEl.getContext("2d");
    oxygen.fillStyle = "black";
    oxygen.font = 25 + "pt Arial ";
    oxygen.fillText("O", 116, 142);

  const oxygen2 = canvasEl.getContext("2d");
    oxygen2.fillStyle = "black";
    oxygen2.font = 25 + "pt Arial ";
    oxygen2.fillText("O", 163, 210);

  const nitrogen = canvasEl.getContext("2d");
    nitrogen.fillStyle = "black";
    nitrogen.font = 25 + "pt Arial ";
    nitrogen.fillText("N+", 313, 190);

  const line1 = canvasEl.getContext("2d");
    line1.moveTo(80, 200);
    line1.lineTo(130, 175);
    line1.lineTo(160, 190);
    line1.strokeStyle = "black";
    line1.lineWidth = 3;
    line1.stroke();

  const line2 = canvasEl.getContext("2d");
    line2.moveTo(125, 174);
    line2.lineTo(125, 145);
    line2.strokeStyle = "black";
    line2.lineWidth = 3;
    line2.stroke();

  const line3 = canvasEl.getContext("2d");
    line3.moveTo(135, 174);
    line3.lineTo(135, 145);
    line3.strokeStyle = "black";
    line3.lineWidth = 3;
    line3.stroke();

  const line4 = canvasEl.getContext("2d");
    line4.moveTo(190, 190);
    line4.lineTo(230, 175);
    line4.lineTo(280, 200);
    line4.lineTo(310, 185);
    line4.strokeStyle = "black";
    line4.lineWidth = 3;
    line4.stroke();

  const line5 = canvasEl.getContext("2d");
    line5.moveTo(315, 160);
    line5.lineTo(300, 135);
    line5.strokeStyle = "black";
    line5.lineWidth = 3;
    line5.stroke();

  const line6 = canvasEl.getContext("2d");
    line6.moveTo(340, 160);
    line6.lineTo(355, 135);
    line6.strokeStyle = "black";
    line6.lineWidth = 3;
    line6.stroke();

  const line7 = canvasEl.getContext("2d");
    line7.moveTo(340, 195);
    line7.lineTo(355, 220);
    line7.strokeStyle = "black";
    line7.lineWidth = 3;
    line7.stroke();

  const description = canvasEl.getContext("2d");
    description.fillStyle = "black";
    description.font = 12 + "pt Arial ";
    description.fillText("Acetylcholine performs as a transmitter at all neuromuscular", 0, 310);
    description.fillText("(nerve-to-skeletal muscle) connections. It stimulates muscle", 0, 330);
    description.fillText("contractions and, thus, all behavior. Acetylcholine is also a", 0, 350);
    description.fillText("transmitter in various brain regions (for instance, basal", 0, 370);
    description.fillText("ganglia, cortex, and hypothalamus) and is required for proper", 0, 390);
    description.fillText("memory and cognition, as well as motor control.", 0, 410);

  const description2 = canvasEl.getContext("2d");
    description2.fillStyle = "black";
    description2.font = 8 + "pt Arial ";
    description2.fillText("https://www.smartdrugsforthought.com/acetylcholine/", 0, 450);

});
