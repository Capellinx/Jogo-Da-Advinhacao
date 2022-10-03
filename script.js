// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const randoNumber = Math.round(Math.random() * 10)
let xAttempts= 1

// Eventos
btnTry.addEventListener('click', handleTryCLick)
btnReset.addEventListener('click', handleResetClick)

// Funções
function handleTryCLick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randoNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerHTML = `acertou em ${xAttempts} tentativas`
    }
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}