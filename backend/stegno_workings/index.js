const { getBinaryByteArray, } = require("./getDependency")

function getMessageArray(message) {
  const messageArray = message.split('').map(val => val.charCodeAt(0))
  return messageArray.map(Number)
}

// trying to embed the message bits over the given array 

const getBinaryIn8bitFormat = (binaryArray) => {
  const binary8bits = binaryArray.map(String)
  for (let index in binary8bits) {
    let temp = ''
    for (let j = 0; j < 8 - binary8bits[index].length; j++) {
      temp += '0'
    }
    binary8bits[index] = temp + binary8bits[index]
  }
  return binary8bits
}

const stegnography_encrypt = (imageBitmap, message, messageLimit) => {
  const messageArray = getMessageArray(message)
  const messageBitmap = getBinaryIn8bitFormat(getBinaryByteArray(messageArray))
  const totalBinary = messageBitmap.join('').split('').map(Number) //converting to a linear binary array 
  for (let i = 0; i < messageLimit * 8; i++) {
    let lastBit = parseInt(imageBitmap[imageBitmap.length - 1 - i].toString().charAt(imageBitmap[imageBitmap.length - 1 - i].length - 1))
    if (lastBit !== totalBinary[i]) {
      lastBit = totalBinary[i]
      imageBitmap[imageBitmap.length - 1 - i] = parseInt(imageBitmap[imageBitmap.length - 1 - i].toString().substr(0, imageBitmap[0].length - 2) + lastBit)
    }
  }
  return imageBitmap
}

const stegnography_decrypt = (imageBitmap, messageLimit) => {
  const messageBinary = []
  for (let i = 0; i < messageLimit * 8; i++) {
    const lastBit = parseInt(imageBitmap[imageBitmap.length - 1 - i].toString().charAt(imageBitmap[imageBitmap.length - 1 - i].length - 1))
    messageBinary.push(lastBit)
  }
  let message = '';
  for (let i = 0; i < messageBinary.length; i += 8) {
    const charcode = parseInt(messageBinary.slice(i, i + 8).join(''), 2).toString(10)
    message += String.fromCharCode(charcode)
  }
  return message
}

// const encrypted_imageData = stegnography_encrypt(letPictureBinaryData, message)
// const decrypt_message = stegnography_decrypt(encrypted_imageData)
// console.log("decrypt: ", decrypt_message)
module.exports = {
  stegnography_encrypt,
  stegnography_decrypt
}