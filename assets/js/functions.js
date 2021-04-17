const zip = document.getElementById('zipcode').value

const checkZipCode = () => {
  if (zip > 20000) {
    return true
  } else {
    return false
  }
}

checkZipCode()
