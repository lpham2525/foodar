const register = document.getElementById('register')
boolean registerSuccess = false

register.addEventListener('click', () => {
  if (registerSuccess) {
    document.getElementById('regAlert').textContent = "You are now registered! Please log in to continue."
  } else {
    document.getElementById('regAlert').textContent = "There was problem with registration. Please try again."
  }
})

const mailListSignUp = () => {

  document.getElementById("register").addEventListener("click", () => {

    mailInput = document.getElementById("mailInput").value
    regAlert = document.getElementById("regAlert")

    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (mailInput !== "" && mailInput.match(mailFormat)) {
      regAlert.textContent = "You are now registered!"
      mailInput.value = " ";
    } else {
      console.log(mailInput)
      regAlert.textContent = "Please enter a valid email."
    }
  })
}

mailListSignUp()
