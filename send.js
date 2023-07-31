function sendMail() {
    var params = {
        name: document.getElementById("name").Value,
        email: document.getElementById("email").Value,
        message: document.getElementById("message").Value,
    };


const serviceID = "service"
const templateID = "template-"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").Value ="";
        document.getElementById("email").Value ="";
        document.getElementById("message").Value ="";
        console.log(res);
        alert("Thanks,your message sent successfully.")
    }
)
.catch((err) => console.log(err));
}
