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
        oxygen2.fillText("HO", 25, 215);

    const nitrogen = canvasEl.getContext("2d");
        nitrogen.fillStyle = "black";
        nitrogen.font = 25 + "pt Arial ";
        nitrogen.fillText("NH2", 313, 190);

    const line1 = canvasEl.getContext("2d");
        line1.moveTo(80, 200);
        line1.lineTo(130, 175);
        line1.lineTo(180, 200);
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
        line4.moveTo(180, 200);
        line4.lineTo(230, 175);
        line4.lineTo(280, 200);
        line4.lineTo(310, 185);
        line4.strokeStyle = "black";
        line4.lineWidth = 3;
        line4.stroke();

    const description = canvasEl.getContext("2d");
    description.fillStyle = "black";
    description.font = 12 + "pt Arial ";
    description.fillText("Gamma-aminobutyric acid, also known as GABA, is a neurotransmitter", 0, 270);
    description.fillText("that helps send messages between the brain and the nervous system.", 0, 290);
    description.fillText("Its main function is to reduce the activity of nerve cells in the", 0, 310);
    description.fillText("nervous system. A good amount of emerging research has found that", 0, 330);
    description.fillText("it could play a role in many conditions, including depression,", 0, 350);
    description.fillText("anxiety and stress. GABA is thought to have a natural calming effect", 0, 370);
    description.fillText("and is thought to have a natural calming effect and is believed to", 0, 390);
    description.fillText("reduce feelings of of anxiety and fear by decreasing neuronal", 0, 410);
    description.fillText("excitability. It is often used as a natural supplement to promote", 0, 430);
    description.fillText("sleep, improve mood and ease premenstrual symptoms.", 0, 450);

    const description2 = canvasEl.getContext("2d");
        description2.fillStyle = "black";
        description2.font = 8 + "pt Arial ";
        description2.fillText("https://draxe.com/gaba/", 0, 470);

});
