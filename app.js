const legal = ["Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Congo", "DR Congo", "Egypt", "Equatorial Guinea", "Gabon", "Ghana", "Guinea-Bissau", "Côte d'Ivoire", "Kenya", "Lesotho", "Liberia", "Madagascar", "Malawi", "Mali", "Morocco", "Mozambique", "Namibia", "Niger", "Sao Tome and Principe", "Senegal", "Sierra Leone", "South Sudan", "Swaziland", "Tanzania", "Togo", "Tunisia", "Uganda", "Western Sahara", "Zambia", "Zimbabwe", "Bangladesh", "Macau", "India", "Mongolia", "Myanmar", "Tajikistan", "Albania", "Andorra", "Belarus", "Faroe Islands", "Gibraltar", "Isle of Man", "Kosovo", "Liechtenstein", "Malta", "Bahamas", "Barbados", "Bermuda", "Costa Rica", "Djibouti", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Nicaragua", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Turks and Caicos", "Argentina", "Bolivia", "Chile", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Trinidad and Tobago", "Uruguay", "Venezuela", "Cook Islands", "Kiribati", "Micronesia", "Nauru", "Northern Mariana Islands", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "East Timor", "Tonga"]

// Variables
const optionBox = document.querySelector('.optionBox')
const validateBtn = document.getElementById('validateBtn')
const saveBtn = document.getElementById('saveBtn')
const viewCardsBtn = document.getElementById('viewCards')
const returnBtn = document.getElementById('returnBtn')
var numberInput = document.querySelector('#number')
var countryInput = document.querySelector('#country')

// Event Listener Validate Card Action
validateBtn.addEventListener('click', validate)
function validate(e) {
    e.preventDefault()

    if (!legal.includes(countryInput.value) && numberInput.value.length < 13 || numberInput.value.length > 19) {
        // return errorMsg.innerHTML = "This is not a Valid Card number or Country"
        return alert("This is not a Valid Card number or Country")

    } else if (!legal.includes(countryInput.value)) {
        // Luhn Algo
        function checkNumber(cardNumber) {
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
        if (checkNumber(numberInput.value)) {
            return optionBox.classList.toggle('optionBoxNone')
        } else {
            alert("This is not a Valid Card number or Country")
        }
    } else {
        alert("This is not a Valid Card number or Country")
    }
}
// Save Cards
saveBtn.addEventListener('click', saveCard)
function saveCard() {
    const validCard = numberInput.value
    const validCountry = countryInput.value

    if (validCard && validCountry) {
        localStorage.setItem(validCard, validCountry)
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
    lsOutput.innerHTML += `${key} : ${value}<br>`
}
// View Cards
viewCardsBtn.addEventListener('click', showCards)
function showCards() {
    const lsOutput = document.getElementById('lsOutput')
    return lsOutput.classList.toggle('hide')
}
// Refresh
returnBtn.addEventListener('click', reload)
function reload() {
    lsOutput.classList.remove('hide')
    location.reload()
}
// Reset Input
function resetInput() {
    document.querySelector("form").reset();
}