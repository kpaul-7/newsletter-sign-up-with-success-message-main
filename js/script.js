

const onSubmitHandler = (e) =>{
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
    let inputedEmail = document.querySelector("#email").value
    inputedEmail = inputedEmail.trim()
    if(!inputedEmail || !validateEmail(inputedEmail)){
      document.querySelector("#errorMessage").style.display = "block"
        document.querySelector("#email").classList.remove("bordercolornormal")
      document.querySelector("#email").classList.add("errorFormState")
        document.querySelector("#email").classList.add("errorFormState").style.borderColor = "hsl(4, 100%, 67%)"
    }else{
      document.querySelector(".welcome").style.display = "none"
      document.querySelector(".successDiv").style.display = "block"
    
  }
}




const dismissMessage = () =>{
    document.querySelector(".successDiv").style.display = "none"
    document.querySelector(".welcome").style.display = "block"
}
