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
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (mailInput !== "" && mailInput.match(mailFormat)) {
      document.getElementById("mailAlert").textContent = "You are signed up for our mailing list!"
      document.getElementById("mailInput").value = " ";
    } else {
      console.log(mailInput)
      document.getElementById("mailAlert").textContent = "Please enter a valid email."
    }
  })
}

mailListSignUp()

ImageArray = new Array()
ImageArray[0] = 'hershey.gif'
ImageArray[1] = 'blackberry.png'
ImageArray[2] = 'tiramisu.png'

const changeImage = () => {
  let num = Math.floor(Math.random() * 3)
  let img = ImageArray[num]
  document.getElementById("changeRecipe").innerHTML = ('<img src="' + 'assets/images/' + img + '" width="800px" height="500px">')
}

window.onload = changeImage;