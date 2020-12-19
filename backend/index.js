const express = require("express")
const morgan = require("morgan");
const app = express();
const cors = require("cors");

app.use(morgan("common"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "hello this is the basic steganography project ",
    });
});

app.get("/encrypt", (req, res) => {
    res.json({
        status: 200,
        message: "this is the encrypt page"
    })
})
app.get("/decrypt", (req, res) => {
    res.json({
        status: 200,
        message: "this is the decrypt page"
    })
})
app.use((req, res, next) => {
    const error = new Error(`---NOT FOUND---${req.originalUrl}`);
    res.status(404);
    next(error);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listeninig at http://localhost:${port}`);
});