//imports
const fs = require('fs')
const nodemailer = require("nodemailer");
const express = require("express")
const morgan = require("morgan")
const app = express()
const cors = require("cors")
const helmet = require('helmet')
const { stegnography_encrypt, stegnography_decrypt } = require('./stegno_workings')
const { getBinaryByteArray, getPixelValue, getDecimalArray } = require('./stegno_workings/getDependency')

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
    const binaryArray = getBinaryByteArray(getPixelValue(image64)).map(Number)
    const newImageBitmap = stegnography_encrypt(binaryArray, message, message.trim().length)
    const decimalArray = getDecimalArray(newImageBitmap)

    // creates the steg-image
    const newImage = new Buffer.from(decimalArray)
    fs.writeFile('image/stegImage.png', newImage, (err) => {
        if (err) throw err;
        console.log('Steg-image created!')
        console.log("email:", emailId, "password: ", password)
        const sender = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailId + "",
                pass: password + "",
            }
        });

        const mail = {
            from: emailId,
            to: to,
            subject: 'Message using stegno',
            text: `Check the attachment for the image\n Message Length: ${message.trim().length}`,
            attachments: [
                {
                    filename: 'stegImage.png',
                    path: 'image/stegImage.png',
                    cid: 'uniq-stegno.png'
                }
            ]
        };

        sender.sendMail(mail, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent successfully: '
                    + info.response);
                res.json({
                    status: 200,
                    message: 'message sent!'
                })
            }
        });
    })



})
app.post("/decrypt", (req, res) => {
    const { messageLength, image64 } = req.body
    const binaryArray = getBinaryByteArray(getPixelValue(image64)).map(Number)
    const message = stegnography_decrypt(binaryArray, messageLength)
    res.json({
        status: 200,
        message: message
    })
})
app.use((req, res, next) => {
    const error = new Error(`---NOT FOUND---${req.originalUrl}`);
    res.status(404);
    next(error);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listeninig at http://localhost:${port}`);
});