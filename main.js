const btnCookie = document.querySelector("#btn-cookie")
const btnReset = document.querySelector("#btn-reset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const fortune = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

btnCookie.addEventListener('click', handleTryClick) 
btnReset.addEventListener('click', handleTryClick)

function handleTryClick() {
    toggleScreen()
    pickFortune()
}

function pickFortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    screen2.querySelector("span").innerText = `${fortune[randomNumber]}`
}

function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}