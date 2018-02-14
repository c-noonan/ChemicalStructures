document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("canvas");
        canvasEl.width = 500;
        canvasEl.height = 500;

    const oxygen = canvasEl.getContext("2d");
        oxygen.fillStyle = "black";
        oxygen.font = 20 + "pt Arial ";
        oxygen.fillText("HO", 20, 120);

    const oxygen2 = canvasEl.getContext("2d");
        oxygen2.fillStyle = "black";
        oxygen2.font = 20 + "pt Arial ";
        oxygen2.fillText("HO", 20, 208);

    const oxygen3 = canvasEl.getContext("2d");
        oxygen3.fillStyle = "black";
        oxygen3.font = 20 + "pt Arial ";
        oxygen3.fillText("OH", 240, 77);

    const nitrogen = canvasEl.getContext("2d");
        nitrogen.fillStyle = "black";
        nitrogen.font = 20 + "pt Arial ";
        nitrogen.fillText("NH2", 335, 125);

    const line1 = canvasEl.getContext("2d");
        line1.moveTo(93, 135);
        line1.lineTo(93, 175);
        line1.strokeStyle = "black";
        line1.lineWidth = 3;
        line1.stroke();

    const line2 = canvasEl.getContext("2d");
        line2.moveTo(158, 102);
        line2.lineTo(197, 122);
        line2.strokeStyle = "black";
        line2.lineWidth = 3;
        line2.stroke();

    const line3 = canvasEl.getContext("2d");
        line3.moveTo(158, 210);
        line3.lineTo(197, 190);
        line3.strokeStyle = "black";
        line3.lineWidth = 3;
        line3.stroke();

    const line4 = canvasEl.getContext("2d");
        line4.moveTo(250, 110);
        line4.lineTo(250, 80);
        line4.strokeStyle = "black";
        line4.lineWidth = 3;
        line4.stroke();

    const line5 = canvasEl.getContext("2d");
        line5.moveTo(200, 130);
        line5.lineTo(250, 110);
        line5.lineTo(300, 130);
        line5.lineTo(330, 120);
        line5.strokeStyle = "black";
        line5.lineWidth = 3;
        line5.stroke();

    const ctx = canvasEl.getContext("2d");
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(100, 180);
        ctx.lineTo(60, 195);
        ctx.lineTo(100, 180);
        ctx.lineTo(100, 130);
        ctx.lineTo(60, 115);
        ctx.lineTo(100, 130);
        ctx.lineTo(150, 105);
        ctx.lineTo(200, 130);
        ctx.lineTo(200, 180);
        ctx.lineTo(150, 205);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();

    const description = canvasEl.getContext("2d");
    description.fillStyle = "black";
    description.font = 12 + "pt Arial ";
    description.fillText("Norepinephrine, also called noradrenaline, is a substance that acts to",0,270);
    description.fillText("increase the force of skeletal muscle contraction and the rate and",0,290);
    description.fillText("force of contraction of the heart. The actions of norepinephrine are",0,310);
    description.fillText("vital to the fight-or-flight response, whereby the body prepares to",0,330);
    description.fillText("react to or retreat from a threat. Its major site of storage and release",0,350);
    description.fillText("are the neurons of the sympathetic nervous system. Thus,", 0, 370);
    description.fillText("norepinephrine functions mainly as a neurotransmitter with some", 0, 390);
    description.fillText("function as a hormone in the blood vessels; it triggers vasoconstriction,", 0, 410);
    description.fillText("which increases blood pressure. Blood pressure is further raised by",0,430);
    description.fillText("norepinephrine as a result of its effects on the heart muscle,",0,450);
    description.fillText("which increase the output of blood from the heart.", 0, 470);

    const description2 = canvasEl.getContext("2d");
    description2.fillStyle = "black";
    description2.font = 8 + "pt Arial ";
    description2.fillText("https://www.britannica.com/science/norepinephrine", 0, 490);
    
});
