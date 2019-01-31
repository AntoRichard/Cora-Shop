const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

let transport = nodemailer.createTransport(sendGridTransport({
    auth:{
        api_key : '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'
    }
}));

module.exports = transport;

