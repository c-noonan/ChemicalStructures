# NeurotransmitterChemicalStructures - A tool for viewing chemicals in the brain

![LIVE](https://c-noonan.github.io/ChemicalStructures/)

## Background and Overview

ChemicalStructures is a interactive tool that allows the user to click on various, prelisted chemicals that exist in the brain and receive information about what the structure looks like and various facts about it. Users can read a short description about what the biochemical does, view the chemical structure of it, and click through a list of multiple chemicals(neurotransmitters) found in the brain

## Architecture and Technologies

This project features vanilla JavaScript for the general logic of the interactive tool, HTML5 Canvas to render each chemical structure, and CSS3 and HTML for styling purposes and organization.

![Website](https://i.imgur.com/liJ0UBt.png)

## Features

 - Site offers interactive animation between each biochemical
 - CSS holds specified styling depending on which biochemical the user is looking at
 - JavaScript dynamically loads each script file depending on which biochemical the user clicked on:

    ``` 
    <section class='canvas-element'>
            <section class='list-elements'>
                <p><button id='list' onclick="loadJS('./neurotransmitters/acetylcholine.js');">Acetylcholine</button></p>
                <p><button id='list' onclick="loadJS('./neurotransmitters/adenosine.js');">Adenosine</button></p>
                <p><button id='list' onclick="loadJS('./neurotransmitters/adrenaline.js');">Adrenaline</button></p>
                <p><button id='list' onclick="loadJS('./neurotransmitters/dopamine.js');">Dopamine</button></p>
                <p><button id='list' onclick="loadJS('./neurotransmitters/GABA.js');">GABA</button></p>
                <p><button id='list' onclick="loadJS('./neurotransmitters/glutamate.js');">Glutamate</button></p>
                <p><button id='list' onclick="loadJS('./neurotransmitters/glycine.js');">Glycine</button></p>
                <p><button id='list' onclick="loadJS('./neurotransmitters/histamine.js');">Histamine</button></p>
                <p><button id='list' onclick="loadJS('./neurotransmitters/norepinephrine.js');">Norepinephrine</button></p>
                <p><button id='list' onclick="loadJS('./neurotransmitters/serotonin.js');">Serotonin</button></p>
            </section>
            <canvas id='canvas'></canvas>
        </section>

    <script type="application/javascript">
        function loadJS(file) {
        let jsElm = document.createElement("script");
        jsElm.type = "application/javascript";
        jsElm.src = file;
        document.body.appendChild(jsElm);
        }
    </script>
    ```

    This shows the javascript file is only loaded and displayed when the user clicks on the specific biochemical that they would like to learn more about. By imbedding the JavaScript into the HTML, it allows the user more control over what they see on the page.

## Bonus features
 
Given time, the project could also include:
 
- [ ] The structure of various drugs used to treat a number of health disorders that results from either an excess or depletion of the various neurotransmitters.
- [ ] If the drug induces a change in chemical structure, users can see the change; if not, a description about which drug does what to the patient.
