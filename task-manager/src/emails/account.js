const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to: 'than12@myseneca.ca',
    from: 'than12@myseneca.ca',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you'
})

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'than12@myseneca.ca',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the`
    })
}

const sendCancleEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'than12@myseneca.ca',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancleEmail
}