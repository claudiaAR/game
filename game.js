const textElement = document.getElementById('text')
const inputElement = document.getElementById('typeAnswer')
let currentRoomIndex = 0

function showRoom() {
    const room = gameStory[currentRoomIndex]
    textElement.innerText = room.message
}

function startGame() {
    showRoom()
}

function bindKeyEvent() {
    inputElement.addEventListener("keypress", handleEnter)
}

function handleEnter(event) {
    if (event.key === "Enter") {
        const answer = inputElement.value
        inputElement.value = ""
        const currentRoom = gameStory[currentRoomIndex]

        let isAnswerAccepted = false
        for(const option of currentRoom.options){
            if (answer === option.text) {
                currentRoomIndex = option.nextRoom
                showRoom()
                isAnswerAccepted = true
            }
        }

        if(!isAnswerAccepted) {
            
        }

        console.log(answer)
    }
}

function setup() {
    bindKeyEvent()
    startGame()
}


window.onload = setup

