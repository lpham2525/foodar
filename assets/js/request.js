// const getTotal = (event) => {

//   let total = document.getElementById('total')
//   let expr

//   let classicTen = classic.checked && tenP.checked
//   let classicFif = classic.checked && fifP.checked
//   let classicTw = classic.checked && twentyP.checked
//   let premiumTen = premium.checked && tenP.checked
//   let premiumFif = premium.checked && fifP.checked
//   let premiumTw = premium.checked && twentyP.checked
//   let royalTen = royal.checked && tenP.checked
//   let royalFif = royal.checked && fifP.checked
//   let royalTw = royal.checked && twentyP.checked

//   switch (expr) {
//     case classicTen:
//       total.textContent = "$3.30"
//       break;
//     case classicFif:
//       total.textContent = "$3.45"
//       break;
//     case classicTw:
//       total.textContent = "$3.60"
//       break;
//     case premiumTen:
//       total.textContent = "$5.50"
//       break;
//     case premiumFif:
//       total.textContent = "$5.75"
//       break;
//     case premiumTw:
//       total.textContent = "$6.00"
//       break;
//     case royalTen:
//       total.textContent = "$11.00"
//       break;
//     case royalFif:
//       total.textContent = "$11.50"
//       break;
//     case royalTw:
//       total.textContent = "$12.00"
//       break;
//   }
// }


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

// const requestMade = () => {
//   document.getElementById('request').addEventListener('click', event => {
//     console.log('processing...')
//     event.preventDefault()
//     document.getElementById('requestDiv').textContent = "Request processed! Your food is on its way!"
//     console.log('done!')
//   })
// }

const requestMade = () => {
  document.getElementById('request').addEventListener('click', () => {
    document.getElementById('requestDiv').textContent = "Request processed! Your food is on its way!"
    console.log('done!')
  })
}

