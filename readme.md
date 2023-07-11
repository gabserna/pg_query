npm init -y
npm i pg express
npm i -D dotenv
npm run dev


# add to package.json
"scripts": {
    "dev": "nodemon - r dontenv/config app.js"
}