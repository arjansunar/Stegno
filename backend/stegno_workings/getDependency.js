const atob = require('atob')

// function arraysEqual(a, b) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] != b[i]) return false;
//     }
//     return true;
// }
function getPixelValue(base64) {
    const raw = atob(base64);
    const rawLength = raw.length;
    const array = new Uint8Array(new ArrayBuffer(rawLength));
    for (i = 0; i < rawLength; i++) {
        array[i] = +raw.charCodeAt(i)
    }
    return array;
}
function getBinaryByteArray(byteArray) {
    const binaryArray = []
    for (let i in byteArray) {
        binaryArray[i] = (byteArray[i] >>> 0).toString(2)
    }
    return binaryArray
}
function getDecimalArray(binaryArray) {
    const decimalArray = []
    for (let i in binaryArray) {
        decimalArray[i] = parseInt(binaryArray[i], 2).toString(10)
    }
    return decimalArray
}

module.exports = {
    getBinaryByteArray,
    getPixelValue,
    getDecimalArray
}