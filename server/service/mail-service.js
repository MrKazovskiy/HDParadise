const nodemailer = require('nodemailer');

class MailService {
    async sendActivationMail(to, link) {
        this.transporter = nodemailer.createTestAccount({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                password: process.env.SMTP_PASSWORD,
            }
        })
    }
}

module.exports = new MailService();