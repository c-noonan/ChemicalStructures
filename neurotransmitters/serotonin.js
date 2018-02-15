const serotonin = function(){
    const canvasEl = document.getElementById("canvas");
        canvasEl.width = 500;
        canvasEl.height = 500;

    const oxygen = canvasEl.getContext("2d");
        oxygen.fillStyle = "black";
        oxygen.font = 20 + "pt Arial ";
        oxygen.fillText("HO", 60, 160);

    const nitrogen = canvasEl.getContext("2d");
        nitrogen.fillStyle = "black";
        nitrogen.font = 20 + "pt Arial ";
        nitrogen.fillText("NH2", 350, 65);

    const nitrogen2 = canvasEl.getContext("2d");
        nitrogen2.fillStyle = "black";
        nitrogen2.font = 20 + "pt Arial ";
        nitrogen2.fillText("NH", 290, 250);
    
    const line1 = canvasEl.getContext("2d");
        line1.moveTo(133, 175);
        line1.lineTo(133, 215);
        line1.strokeStyle = "black";
        line1.lineWidth = 3;
        line1.stroke();

    const line2 = canvasEl.getContext("2d");
        line2.moveTo(198, 142);
        line2.lineTo(237, 162);
        line2.strokeStyle = "black";
        line2.lineWidth = 3;
        line2.stroke();

    const line3 = canvasEl.getContext("2d");
        line3.moveTo(198, 250);
        line3.lineTo(237, 230);
        line3.strokeStyle = "black";
        line3.lineWidth = 3;
        line3.stroke();

    const line4 = canvasEl.getContext("2d");
        line4.moveTo(330, 190);
        line4.lineTo(297, 159);
        line4.strokeStyle = "black";
        line4.lineWidth = 3;
        line4.stroke();

    const ctx = canvasEl.getContext("2d");
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(140, 220);
        ctx.lineTo(140, 170);
        ctx.lineTo(100, 155);
        ctx.lineTo(140, 170);
        ctx.lineTo(190, 145);
        ctx.lineTo(240, 170);
        ctx.lineTo(290, 160);
        ctx.lineTo(300, 120);
        ctx.lineTo(340, 100);
        ctx.lineTo(350, 70);
        ctx.lineTo(350, 70);
        ctx.lineTo(340, 100);
        ctx.lineTo(300, 120);
        ctx.lineTo(290, 160);
        ctx.lineTo(330, 200);
        ctx.lineTo(290, 235);
        ctx.lineTo(240, 220);
        ctx.lineTo(240, 170);
        ctx.lineTo(240, 220);
        ctx.lineTo(190, 245);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();

    const description = canvasEl.getContext("2d");
        description.fillStyle = "black";
        description.font = 12 + "pt Arial ";
        description.fillText("Serotonin impacts every part of your body, from your emotions to your", 0, 330);
        description.fillText("motor skills. Serotonin is considered a natural mood stabilizer.", 0, 350);
        description.fillText("It’s the chemical that helps with sleeping, eating, and digesting.", 0, 370);
        description.fillText("Serotonin also helps reduce depression, regulate anxiety, heal wounds,", 0, 390);
        description.fillText("stimulate nausea, and maintain bone health", 0, 410);
    
    const description2 = canvasEl.getContext("2d");
        description.fillStyle = "black";
        description.font = 8 + "pt Arial ";
        description2.fillText("https://www.healthline.com/health/mental-health/serotonin#functions", 0, 450);

};

serotonin();