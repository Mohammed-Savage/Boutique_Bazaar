Step by step guide to creating this app:
Created new folder "Boutique Bazaar", created the backend and frontend folders.
We're using express as our web framework to easily build our restful API. This basically handles our routing. We're using MongoDB(oose) as our database to hold our data (collections). dotenv installs our environment variables.
We're building our API in the backend folder.
Initialized the root directory "Boutique Bazaar" with npm (Node Packer Manager) init (Initialize) -y. This creates our package.json and package-lock.json.
Installed express, mongoose, and dotenv in the root directory with the terminal command: npm install express mongoose dotenv. This lists express, mongoose, and dotenv in the dependencies of our package.json.
We add "type": "module", to our package.json file so that we can use the modern ES6 import syntax. This basically allows us to use import export syntax.
We added "dev": "node backend/server.js" to the "scripts" section of our package.json file. This allows us to launch our app by running npm run dev instead of typing the file name.
We also npm i nodemon -D which installs nodemon into our devdependencies. We then updated the "scripts" to "node backend/server.js". This will refresh our app without us having to relaunch it.

Backend Folder Specifics:
We create the entrypoint for our API: server.js
