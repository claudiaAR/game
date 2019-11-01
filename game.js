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
    inputElement.classList.remove('answer_error')
    if (event.key === "Enter") {
        const answer = inputElement.value
        inputElement.value = ""
        const currentRoom = gameStory[currentRoomIndex]

        let isAnswerAccepted = false
        for (const option of currentRoom.options) {

            if(textMatch(answer, option.text)){
                currentRoomIndex = option.nextRoom
                showRoom()
                isAnswerAccepted = true
                inputElement.placeholder = 'skriv... '
            } 
        }

        if (!isAnswerAccepted) {
            inputElement.placeholder = '404 testa igen 👾'
            inputElement.classList.add('answer_error')
        }
    }
}

function textMatch(inputText, arrayOfTexts){

    for(let text of arrayOfTexts) {
        if(inputText.toLowerCase() === text.toLowerCase()){
            return true
        }
    }
    return false
}


function setup() {
    bindKeyEvent()
    startGame()
}


window.onload = setup()
