const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

const routes = require("./Routes/routes");

const {DB_Connect} = require("./Database/db_connect");

app.use("/home", routes);

app.get("/", (req,res) => {
    res.send("Hello World");
}); 

const connectDB = async () => {
    try {
        await DB_Connect();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

connectDB();