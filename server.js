const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "",
        pass: ""
    }
})

const mailOption = {
    from: "",
    to: "",
    subject: "Test Node Mailer",
    text: "Hallo World, this is test node mailer"
}

transporter.sendMail(mailOption, function(err, info){
    if(err){
        console.log(err)
    }else {
        console.log('email send :',info.response)
    }
})