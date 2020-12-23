//imports
// const fs = require('fs')
const express = require("express")
const morgan = require("morgan")
const app = express()
const cors = require("cors")
const helmet = require('helmet')
// const { stegnography_encrypt, stegnography_decrypt } = require('./stegno_workings')
// const { getBinaryByteArray, getPixelValue, getDecimalArray } = require('./stegno_workings/getDependency')

//using middlewares
app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use(helmet())

app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "hello this is the basic steganography project ",
    });
});

app.post("/encrypt", (req, res) => {
    const { emailId, password, message, to, image64 } = req.body
    // const binaryArray = getBinaryByteArray(getPixelValue(image64))
    // const newImageBitmap = stegnography_encrypt(binaryArray, message, message.trim().length)
    // const decimalArray = getDecimalArray(newImageBitmap)

    // const newImage = new Buffer.from(decimalArray)
    // fs.writeFile('image/stegImage.png', newImage, (err) => {
    //     if (err) throw err;
    //     console.log('Steg-image created!')
    // })
    res.json({
        status: 200,
        user: emailId
    })
})
app.post("/decrypt", (req, res) => {
    const { messageLength, image64 } = req.body
    // const binaryArray = getBinaryByteArray(getPixelValue(image64))
    // const message = stegnography_decrypt(binaryArray, messageLength)
    res.json({
        status: 200,
        messageLength: messageLength,
        // message: message
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