const zip = document.getElementById('zipCode').value
const zipAlert = document.getElementById('zipAlert')
const zipBtn = document.getElementById('zipBtn')
const n = parseInt(document.querySelector("input[name='n']").value);

const checkZipCode = () => {
  zipBtn.addEventListener('click', (event) => {
    console.log(event)
    if (isNaN(n)) {
      zipAlert.textContent = "Input must be a 5-digit integer."
      zipAlert.className = "red"
    } else if (zip > 20000 && zip < 20600) {
      zipAlert.textContent = "We’ve got your area covered!"
      zipAlert.className = "green"
    } else {
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
