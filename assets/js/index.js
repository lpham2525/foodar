
const zipAlert = document.getElementById('zipAlert')
const zipBtn = document.getElementById('zipBtn')

const checkZipCode = () => {
  zipBtn.addEventListener('click', () => {
    let zip = parseInt(document.getElementById('zipCode').value)
    if (zip == '' || isNaN(zip) || zip < 10000) {
      console.log(zip)
      zipAlert.textContent = "Please enter in a 5-digit zip code."
      zipAlert.className = "red"
    } else if (zip !== '' && zip > 20000 && zip < 20600) {
      console.log(zip)
      zipAlert.textContent = "We’ve got your area covered!"
      zipAlert.className = "green"
    } else {
      console.log(zip)
      zipAlert.textContent = "Sorry, we haven’t expanded to that area yet."
      zipAlert.className = "red"
    }
  })
}

checkZipCode()

const showBanner = () => {
  document.querySelector('.banner').style.display = 'block'
}

document.onreadystatechange = () => {
  if (document.readyState !== "complete") {
    document.querySelector('.banner').style.display = "none";
  } else {
    setTimeout(showBanner, 5000)
  }
}

const closeBanner = () => {
  document.getElementById('close').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none'
  })
}

closeBanner()

const mailListSignUp = () => {


  document.getElementById("mailBtn").addEventListener("click", () => {

    mailInput = document.getElementById("mailInput").value

    if (mailInput !== "") {
      console.log(mailInput)
      document.getElementById("mailAlert").textContent = "You are signed up for our mailing list!"
    } else {
      console.log(mailInput)
      document.getElementById("mailAlert").textContent = "Please enter a valid email."
    }
  })
}

mailListSignUp()