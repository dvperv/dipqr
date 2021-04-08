const QRCode = require('qrcode');

module.exports = async (strToEncode) =>
    await QRCode.toDataURL(strToEncode).then(url => url)
