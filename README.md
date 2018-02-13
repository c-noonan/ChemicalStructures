# ChemicalStructures - A tool for viewing chemicals in the brain

## Background and Overview

ChemicalStructures is a interactive tool that allows the user to click on various, prelisted chemicals that exist in the brain and receive information about what the structure looks like.

## Functionality & MVP

Users will be able to:
- [ ] Read a short description about what the biochemical does
- [ ] View the chemical structure of it
- [ ] Scroll through a list of multiple chemicals found in the brain
 
Also:
- [ ] A short about section that remains stationary to the side of the list telling the user how to interact with the tool          and what to expect.
- [ ] Links to my github repo and linkedIn page
 
## Wireframes
 
The app will be relatively basic in it's setup. It will consist of a single page that has a header with the title of the project, a main section that will have two parts: one part on the left side that describes what the user can do on the site and how to navigate it, and the second part on the right hand side that contains the list of biochemicals that when clicked, will render the structure of the chosen biochemical. The bottom will have a footer containing links to both my linkedIn and github repo.

![Wireframe](https://i.imgur.com/7HfUoL6.png)

## Architecture and Technologies

This project will be implemented with the following technologies:

- [ ] Vanilla JavaScript for overall structure
- [ ] jQuery or fetch to wrap the public, free API that contains the information about the biochemicals
- [ ] Webpack to bundle the various scripts.

Main scripts involved in the project:

- [ ] webpack.config
- [ ] a file where the network calls are made
- [ ] a file to contain the logic about rendering the information received
- [ ] any files needed to connect the API information to the logic of rendering it on the page

## Implementation Timeline

Day 1: Setup project. Get all files necessary created with bare skeletons to be filled in when necessary. Figure out how to connect to the public API and test to make sure what information you're receiving, what format it is in, and how it can be broken down into the pieces needed for the project. 

- [ ] Get wepack up and running
- [ ] Test foreign API
- [ ] Complete enough styling to render basic functionality on the page.

Day 2: Complete foreign API calls. Make sure all the information necesary for the project is received accurately. Decide how many bichemicals should be featured on the site. Have the file written that contains all the network requests and get the data back for each one in a format that can be manipulated in vanilla JS.

- [ ] Finish network call file
- [ ] Maniulate received data to show just what should be shown on the page.
- [ ] Style enough to have one chemical structure rendered on the page. 

Day 3: Finish rendering all information. Make sure all network calls work and that everything show on the page is what should be show. Style completely and make sure entire website looks good and has easy UX/UI.

- [ ] Complete remaining files necessary for project to be fully functional.
- [ ] Make sure website looks good and is layed out in a simple, consise manner.

Day 4: Complete fully, including any bonus features given enough time. Style is complete and professional; everything works how it's supposed to and is easy to navigate and use.

- [ ] Complete all styling
- [ ] Complete any remaining files necessary for the logic of the application
- [ ] Potentially finish any bonus features of the application

## Bonus features
 
Given time, the project could also include:
 
- [ ] The structure of various drugs used to treat a number of health disorders
- [ ] If the drug induces a change in chemical structure, users can see the change; if not, a description about which drug does what to the patient.
