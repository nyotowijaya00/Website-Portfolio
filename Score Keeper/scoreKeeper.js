const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const resetButton = document.querySelector('#reset')

const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const playTo = document.querySelector('#playTo')

let p1Score = 0
let p2Score = 0

let isGameOver = false

let winScore = 3

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winScore) {
            isGameOver = true
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.innerHTML = p1Score;

        sleep(50).then(() => {
            if (winScore - 1 === p1Score && winScore - 1 === p2Score) {
                deuce();
            }
        })
    }
})

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winScore) {
            isGameOver = true
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.innerHTML = p2Score;

        sleep(50).then(() => {
            if (winScore - 1 === p1Score && winScore - 1 === p2Score) {
                deuce();
            }
        })
    }
})

playTo.addEventListener('change', () => {
    winScore = parseInt(playTo.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false
    p1Score = 0
    p2Score = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Button.disabled = false;
    p2Button.disabled = false;
}

function deuce() {
    winScore += 2;
    alert('Deuce score extended +2!')
    // const div = document.createElement('div.container')
    // const annoucement = document.createElement('h5')
    // const buttonClose = document.createElement('button')
    // const subtitle = document.querySelector('.subtitle')

    // annoucement.innerText = 'Deuce score extended +2 more!'
    // buttonClose.innerText = 'Close'

    // div.append(annoucement)
    // div.append(buttonClose)
    // subtitle.appendChild(div)
    // subtitle.appendChild(buttonClose)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}