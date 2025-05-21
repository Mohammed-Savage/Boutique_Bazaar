Step by step guide to creating this app:
Created new folder "Boutique Bazaar", created the backend and frontend folders.
We're using express as our web framework to easily build our restful API. This basically handles our routing. We're using MongoDB(oose) as our database to hold our data (collections). dotenv installs our environment variables.
We're building our API in the backend folder.
Initialized the root directory "Boutique Bazaar" with npm (Node Packer Manager) init (Initialize) -y. This creates our package.json and package-lock.json.
Installed express, mongoose, and dotenv in the root directory with the terminal command: npm install express mongoose dotenv. This lists express, mongoose, and dotenv in the dependencies of our package.json.
We add "type": "module", to our package.json file so that we can use the modern ES6 import syntax. This basically allows us to use import export syntax.
We added "dev": "node backend/server.js" to the "scripts" section of our package.json file. This allows us to launch our app by running npm run dev instead of typing the file name.
We also npm i nodemon -D which installs nodemon into our devdependencies. We then updated the "scripts" to "node backend/server.js". This will refresh our app without us having to relaunch it.

We had to downgrade our dependencies and devDependencies from-to these specific versions:
npm install dotenv@16.4.6 express@4.21.1 mongoose@8.8.3
npm install --save-dev nodemon@3.1.7
We also had to delete and reinstall package-lock.json and node_modules/:
rm -rf node_modules package-lock.json
npm install


Backend Folder Specifics:
We create the entrypoint for our API: server.js

Database specifics:
There are SQL databases such as MySQL, PostgreSQL but Mongo is a NON-SQL database. This means that while SQL databases store our data in tables with rows and colums, NON-SQL databases store information as "collections". The benefit being you can create multiple collections for multiple purposes, each with their own subsection of documents.

Frontend specifics:
To test our work without a working front end we use the Postman Desktop app.

We specifically install and run older versions of the following due to stability:

npm install @chakra-ui/react@v2.10.3 @emotion/react @emotion/styled framer-motion
npm install @chakra-ui/icons@v2.1.1

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

In order for our front end npm run dev to work, we also need to update our node.js. to a minimum of V 20 so we don't get any $crypto erros when we try running npm run dev in our front end by running the following terminal commands:
nvm install 20
nvm use 20
