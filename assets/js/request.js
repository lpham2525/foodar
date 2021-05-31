const calculateTotal = () => {
  let finalTotal = 0

  const stylesList = document.getElementsByClassName("styles")
  for (i = 0; i < stylesList.length; i++) {
    if (stylesList[i].checked) {
      finalTotal = Number(stylesList[i].value)
    }
  }

  const tipList = document.getElementsByClassName("tips")
  for (i = 0; i < tipList.length; i++) {
    if (finalTotal > 0 && tipList[i].checked) {
      finalTotal *= (1 + tipList[i].value / 100)
    }
  }

  finalTotal = finalTotal.toFixed(2)

  document.getElementById("total").textContent = "$ " + finalTotal
}

document.getElementById("form").addEventListener("change", calculateTotal)



const requestMade = () => {
  document.getElementById('request').addEventListener('click', () => {

    let mailInput = document.getElementById('mailInput').value
    let restaurant = document.getElementById('restaurant').value
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (mailInput !== '' && restaurant !== '' && mailInput.match(mailFormat)) {
      document.getElementById('requestDiv').textContent = "Request processed! Your food is on its way!"
      console.log('done!')
    } else if (mailInput == '' || !mailInput.match(mailFormat)) {
      console.log(mailInput)
      document.getElementById('requestDiv').textContent = "Please enter in a valid email."
    } else if (restaurant == '') {
      console.log(restaurant)
      document.getElementById('requestDiv').textContent = "Please enter in a restaurant name."
    } else {
      document.getElementById('requestDiv').textContent = "There was a problem processing the request."
    }
  })
}

