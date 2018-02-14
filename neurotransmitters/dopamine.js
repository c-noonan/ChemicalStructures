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
        line4.moveTo(200, 130);
        line4.lineTo(250, 110);
        line4.lineTo(300, 130);
        line4.lineTo(330, 120);
        line4.strokeStyle = "black";
        line4.lineWidth = 3;
        line4.stroke();

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
        description.fillText("Dopamine is a neurotransmitter that helps control the brain's", 0, 270);
        description.fillText("reward and pleasure centers. Dopamine also helps regulate", 0, 290);
        description.fillText("movement and emotional responses, and it enables us not only to see", 0, 310);
        description.fillText("rewards, but to take action to move toward them. Dopamine", 0, 330);
        description.fillText("deficiency results in Parkinson's Disease, and people with low", 0, 350);
        description.fillText("dopamine activity may be more prone to addiction. The presence of", 0, 370);
        description.fillText("a certain kind of dopamine receptor is also associated with", 0, 390);
        description.fillText("sensation-seeking people, more commonly known as 'risk takers.'", 0, 410);

    const description2 = canvasEl.getContext("2d");
        description2.fillStyle = "black";
        description2.font = 8 + "pt Arial ";
        description2.fillText("https://www.psychologytoday.com/basics/dopamine", 0, 450);

});
