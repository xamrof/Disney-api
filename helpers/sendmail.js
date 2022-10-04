const sgMail = require('@sendgrid/mail')

const sendMail = (to) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: to,
        from: 'codingxam@gmail.com', 
        subject: 'Disney Api',
        text: 'Welcome to the Disney Api',
        html: '<strong>Welcome to disney api, here you can view, add, edit or delete disney characters.</strong>',
    }
    
    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) =>{
            console.log(error)
        })

}


module.exports = {
    sendMail
}