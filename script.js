function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
function active_p(){
  let desc = document.querySelector(".left-side p")
  // desc.classList.add("active");
  desc.style.display = "block";
  // console.log("Click");

}

function sendEmail(){
  Email.send({
  SecureToken: "536a98bd-185b-450a-9639-5248587ebd19",
  To : "arjunmk4u@nirmalacollege.ac.in",
  From : document.getElementById("email").value,
  Subject : "New Enquiry",
  Body : "Name: " + document.getElementById("name").value
    +"<br> Email: " + document.getElementById("email").value 
    +"<br> Message: " + document.getElementById("enquiry").value
}).then(
  message => alert(message)
);
}