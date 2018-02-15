const glycine = function() {
    const canvasEl = document.getElementById("canvas");
        canvasEl.width = 500;
        canvasEl.height = 500;

    const oxygen = canvasEl.getContext("2d");
        oxygen.fillStyle = "black";
        oxygen.font = 25 + "pt Arial ";
        oxygen.fillText("O", 217, 105);

    const oxygen2 = canvasEl.getContext("2d");
        oxygen2.fillStyle = "black";
        oxygen2.font = 25 + "pt Arial ";
        oxygen2.fillText("OH", 285, 185);

    const nitrogen = canvasEl.getContext("2d");
        nitrogen.fillStyle = "black";
        nitrogen.font = 25 + "pt Arial ";
        nitrogen.fillText("H2N", 80, 155);

    const line1 = canvasEl.getContext("2d");
        line1.moveTo(150, 155);
        line1.lineTo(180, 170);
        line1.lineTo(230, 145);
        line1.lineTo(280, 170);
        line1.strokeStyle = "black";
        line1.lineWidth = 3;
        line1.stroke();

    const line2 = canvasEl.getContext("2d");
        line2.moveTo(225, 145);
        line2.lineTo(225, 110);
        line2.strokeStyle = "black";
        line2.lineWidth = 3;
        line2.stroke();

    const line3 = canvasEl.getContext("2d");
        line3.moveTo(235, 145);
        line3.lineTo(235, 110);
        line3.strokeStyle = "black";
        line3.lineWidth = 3;
        line3.stroke();

    const description = canvasEl.getContext("2d");
        description.fillStyle = "black";
        description.font = 12 + "pt Arial ";
        description.fillText("Glycine is a non-essential amino acid. It is found primarily in",0,270);
        description.fillText("gelatin and silk fibroin and used therapeutically as a nutrient.",0,290);
        description.fillText("It is also a fast inhibitory neurotransmitter. Glycine is an",0,310);
        description.fillText("important component and precursor for many macromolecules in",0,330);
        description.fillText("the cells. Glycine is involved in the body's production of DNA,",0,350);
        description.fillText("phospholipids and collagen, and in release of energy.",0,370);

    const description2 = canvasEl.getContext("2d");
        description2.fillStyle = "black";
        description2.font = 8 + "pt Arial ";
        description2.fillText("https://pubchem.ncbi.nlm.nih.gov/compound/glycine#section=Top", 0, 410);
        
};

glycine();
