import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());

app.post("/give-me-memes", (req, res) => {
    console.log(req.body);
    res.status(200).send("Meme endpoint called");
});

app.post("/give-me-jokes", (req, res) => {
    console.log(req.body);
    res.status(200).send("Joke endpoint called");
});

app.post("/give-me-quotes", (req, res) => {
    console.log(req.body);
    res.status(200).send("Quote endpoint called");
});

// start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});