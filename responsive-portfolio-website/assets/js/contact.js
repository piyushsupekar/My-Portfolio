/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_2dqrwwr','template_p1jro7q', "#contact-form",'Rhho7KcI4T9Zuk4SZ')
    // emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()

        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
            // .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
        })
}

contactForm.addEventListener('submit', sendEmail)