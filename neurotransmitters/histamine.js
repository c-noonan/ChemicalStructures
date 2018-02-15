const histamine = function() {
    const canvasEl = document.getElementById("canvas");
        canvasEl.width = 500;
        canvasEl.height = 500;

    const nitrogen = canvasEl.getContext("2d");
        nitrogen.fillStyle = "black";
        nitrogen.font = 25 + "pt Arial ";
        nitrogen.fillText("NH2", 315, 155);

    const nitrogen2 = canvasEl.getContext("2d");
        nitrogen2.fillStyle = "black";
        nitrogen2.font = 25 + "pt Arial ";
        nitrogen2.fillText("HN", 65, 225);

    const nitrogen3 = canvasEl.getContext("2d");
        nitrogen3.fillStyle = "black";
        nitrogen3.font = 25 + "pt Arial ";
        nitrogen3.fillText("N", 125, 150);

    const line = canvasEl.getContext("2d");
        line.moveTo(90, 173);
        line.lineTo(125, 155);
        line.strokeStyle = "black";
        line.lineWidth = 3;
        line.stroke();

    const line2 = canvasEl.getContext("2d");
        line2.moveTo(165, 205);
        line2.lineTo(172, 170);
        line2.strokeStyle = "black";
        line2.lineWidth = 3;
        line2.stroke();

    const line3 = canvasEl.getContext('2d');
        line3.moveTo(100, 200);
        line3.lineTo(80, 170);
        line3.lineTo(120, 150);
        line3.strokeStyle = "black";
        line3.lineWidth = 3;
        line3.stroke();

    const line4 = canvasEl.getContext('2d');
        line4.moveTo(155, 150);
        line4.lineTo(180, 165);
        line4.lineTo(230, 145);
        line4.lineTo(280, 165);
        line4.lineTo(315, 150);
        line4.lineTo(280, 165);
        line4.lineTo(230, 145);
        line4.lineTo(180, 165);
        line4.lineTo(170, 210);
        line4.lineTo(115, 210);
        line4.strokeStyle = "black";
        line4.lineWidth = 3;
        line4.stroke();

    const description = canvasEl.getContext("2d");
        description.fillStyle = "black";
        description.font = 12 + "pt Arial ";
        description.fillText("Histamine is found in nearly all tissues of the body. It produces many", 0, 290);
        description.fillText("varied effects within the body, including the contraction of smooth", 0, 310);
        description.fillText("muscle tissues of the lungs, uterus, and stomach; the dilation of blood", 0, 330);
        description.fillText("vessels, which increases permeability and lowers blood pressure; the", 0, 350);
        description.fillText("stimulation of gastric acid secretion in the stomach; and the", 0, 370);
        description.fillText("acceleration of heart rate. Histamine also serves as a neurotransmitter,", 0, 390);
        description.fillText("carrying chemical messages between nerve cells.", 0, 410);

    const description2 = canvasEl.getContext("2d");
        description.fillStyle = "black";
        description.font = 8 + "pt Arial ";
        description2.fillText("https://www.britannica.com/science/histamine", 0, 450);


};

histamine();
