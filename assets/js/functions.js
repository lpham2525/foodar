// const zip = document.getElementById('zipcode').value

// const checkZipCode = () => {
//   if (zip > 20000) {
//     return true
//   } else {
//     return false
//   }
// }

//checkZipCode()

const sumTotal = (event) => {

  let total = document.getElementById('total')
  let expr

  let classicTen = classic.checked && Number(tenP.checked)
  let classicFif = classic.checked && Number(fifP.checked)
  let classicTw = classic.checked && Number(twentyP.checked)
  let premiumTen = premium.checked && Number(tenP.checked)
  let premiumFif = premium.checked && Number(fifP.checked)
  let premiumTw = premium.checked && Number(twentyP.checked)
  let royalTen = royal.checked && Number(tenP.checked)
  let royalFif = royal.checked && Number(fifP.checked)
  let royalTw = royal.checked && Number(twentyP.checked)

  switch (expr) {
    case classicTen:
      total.textContent = "$3.30"
      break;
    case classicFif:
      total.textContent = "$3.45"
      break;
    case classicTw:
      total.textContent = "$3.60"
      break;
    case premiumTen:
      total.textContent = "$5.50"
      break;
    case premiumFif:
      total.textContent = "$5.75"
      break;
    case premiumTw:
      total.textContent = "$6.00"
      break;
    case royalTen:
      total.textContent = "$11.00"
      break;
    case royalFif:
      total.textContent = "$11.50"
      break;
    case royalTw:
      total.textContent = "$12.00"
      break;
  }
}

document.getElementById('request').addEventListener('click', event => {
  event.preventDefault()
  console.log('ping')
  sumTotal()
})
