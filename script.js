console.log(`This application is created to demonstrate the power of the JavaScript language. The pads play sound only when the keys are pressed, just like in a real drum machine. For serious audio performance, we recommend using more powerful web applications/daw's.`)

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio.${e.code}`)
    const key = document.querySelector(`div.${e.code}`)

    if (!audio || !key) return
    
    audio.currentTime = 0
    audio.play()
    key.classList.add('play')
})

window.addEventListener('keyup', (e) => {
    const key = document.querySelector(`div.${e.code}`)
    if (!key) return
    key.classList.remove('play')
})

function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('play')
    // console.log(this)
}

const keys = document.querySelectorAll('.key')
keys.forEach(el => el.addEventListener('transitionend', removeTransition))