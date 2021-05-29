const register = document.getElementById('register')
boolean registerSuccess = false

register.addEventListener('click', () => {
  if (registerSuccess) {
    document.getElementById('regAlert').textContent = "You are now registered! Please log in to continue."
  } else {
    document.getElementById('regAlert').textContent = "There was problem with registration. Please try again."
  }
})

