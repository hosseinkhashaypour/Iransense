const backhome = document.querySelector(".backhome")
backhome.addEventListener('click', () => {
    window.location.href = "home.html"
})

function generateotp() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const otplength = '6'
    let otp = ''
    for (let i = 0; i < otplength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        otp += characters[randomIndex]
    }
    return otp
}
function showOtp() {
    const otp = generateotp()
    const displayOtp = document.getElementById('displayOtp')
    displayOtp.innerText = otp
}

const pwdInput = document.getElementById('password')
const err = document.querySelector('.err')
pwdInput.addEventListener('blur', () => {
    if (pwdInput.value.length < 6) {
        err.style.display = 'flex'
    }
})

const subBtn = document.getElementById('submit')
subBtn.addEventListener('click', () => {
    window.location.href = "index.html"
    const emailInput = document.getElementById("email")
    const savemail = localStorage.setItem("email", emailInput.value)
    const savepwd = localStorage.setItem("pwd", pwdInput.value)
})

// save to storage
