document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("canvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const norepinephrine = canvasEl.getContext("2d");
  norepinephrine.fillStyle = "black";
  norepinephrine.font = 30 + "pt Arial ";
  norepinephrine.fillText("Serotonin", 70, 60);

  const oxygen = canvasEl.getContext("2d");
  oxygen.fillStyle = "black";
  oxygen.font = 20 + "pt Arial ";
  oxygen.fillText("HO", 20, 160);

  const nitrogen = canvasEl.getContext("2d");
  nitrogen.fillStyle = "black";
  nitrogen.font = 20 + "pt Arial ";
  nitrogen.fillText("NH2", 310, 65);

  const nitrogen2 = canvasEl.getContext("2d");
  nitrogen2.fillStyle = "black";
  nitrogen2.font = 20 + "pt Arial ";
  nitrogen2.fillText("NH", 250, 250);

  const line1 = canvasEl.getContext("2d");
  line1.moveTo(93, 175);
  line1.lineTo(93, 215);
  line1.strokeStyle = "black";
  line1.lineWidth = 3;
  line1.stroke();

  const line2 = canvasEl.getContext("2d");
  line2.moveTo(158, 142);
  line2.lineTo(197, 162);
  line2.strokeStyle = "black";
  line2.lineWidth = 3;
  line2.stroke();

  const line3 = canvasEl.getContext("2d");
  line3.moveTo(158, 250);
  line3.lineTo(197, 230);
  line3.strokeStyle = "black";
  line3.lineWidth = 3;
  line3.stroke();

  const line4 = canvasEl.getContext("2d");
  line4.moveTo(290, 190);
  line4.lineTo(257, 159);
  line4.strokeStyle = "black";
  line4.lineWidth = 3;
  line4.stroke();

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.moveTo(100, 220);
  ctx.lineTo(100, 170);
  ctx.lineTo(60, 155);
  ctx.lineTo(100, 170);
  ctx.lineTo(150, 145);
  ctx.lineTo(200, 170);
  ctx.lineTo(250, 160);
  ctx.lineTo(260, 120);
  ctx.lineTo(300, 100);
  ctx.lineTo(310, 70);
  ctx.lineTo(310, 70);
  ctx.lineTo(300, 100);
  ctx.lineTo(260, 120);
  ctx.lineTo(250, 160);
  ctx.lineTo(290, 200);
  ctx.lineTo(250, 235);
  ctx.lineTo(200, 220);
  ctx.lineTo(200, 170);
  ctx.lineTo(200, 220);
  ctx.lineTo(150, 245);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.stroke();
});
