const button = document.querySelector('#button')
const button2 = document.querySelector('#button2')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const prase = document.querySelector('#prase')
const prase2 = ['Se alguém está tão cansado que não possa te dar um sorriso deixa-lhe o teu.', 'amor eterno','amanda te amo']

function handleClick(event){
    event.preventDefault()
    prase.innerText = prase2[ Math.round(Math.random() * 2)]

    screen1.classList.add('hide')
    screen2.classList.remove('hide')
}



button.addEventListener('click', handleClick)
button2.addEventListener('click', function() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
})

