// const zip = document.getElementById('zipcode').value

// const checkZipCode = () => {
//   if (zip > 20000) {
//     return true
//   } else {
//     return false
//   }
// }

//checkZipCode()

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

// function talk() {
//   alert("hello")
// }

// function consoleLog() {
//   console.log("ping")
// }

// setTimeout(talk, 2000)

// setTimeout(consoleLog, 3000)