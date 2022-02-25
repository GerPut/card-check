const legal = ["Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Congo", "DR Congo", "Egypt", "Equatorial Guinea", "Gabon", "Ghana", "Guinea-Bissau", "Côte d'Ivoire", "Kenya", "Lesotho", "Liberia", "Madagascar", "Malawi", "Mali", "Morocco", "Mozambique", "Namibia", "Niger", "Sao Tome and Principe", "Senegal", "Sierra Leone", "South Sudan", "Swaziland", "Tanzania", "Togo", "Tunisia", "Uganda", "Western Sahara", "Zambia", "Zimbabwe", "Bangladesh", "Macau", "India", "Mongolia", "Myanmar", "Tajikistan", "Albania", "Andorra", "Belarus", "Faroe Islands", "Gibraltar", "Isle of Man", "Kosovo", "Liechtenstein", "Malta", "Bahamas", "Barbados", "Bermuda", "Costa Rica", "Djibouti", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Nicaragua", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Turks and Caicos", "Argentina", "Bolivia", "Chile", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Trinidad and Tobago", "Uruguay", "Venezuela", "Cook Islands", "Kiribati", "Micronesia", "Nauru", "Northern Mariana Islands", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "East Timor", "Tonga"]

const numberInput = document.querySelector('#number')
const countryInput = document.querySelector('#country')
const errorMsg = document.querySelector('#error-message')
const validateBtn = document.getElementById('validateBtn')




// Validate Action
validateBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (!legal.includes(countryInput.value) && numberInput.value.length < 13 || numberInput.value.length > 19) {
        return errorMsg.innerHTML = "This is not a valid Card number or Country"

    }
})

// Check card number
const validate = (cardNumber) => {
    let digits = cardNumber.toString().split('').map(Number)
    if (digits.length % 2 === 0) {
        digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit)
    } else {
        digits = digits.map((digit, idx) => idx % 2 === 1 ? digit * 2 : digit)
    }
    digits = digits.map(digit => digit > 9 ? digit - 9 : digit)

    const sum = digits.reduce((acc, digit) => acc += digit, 0)
    return sum % 10 === 0
}





console.log(validate(numberInput.value))


