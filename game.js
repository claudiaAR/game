
const textElement = document.getElementById('text')
const inputElement = document.getElementById('typeAnswer')
let currentRoomIndex = 0


/**
 * game funktionen läser den globala variabeln currentRoomIndex och skriver 
 * ut värdet message i det objektet.
 */
function game() {
    const room = gameStory[currentRoomIndex]
    textElement.innerText = room.message
}

/**
 * Lyssnar på tangentbordets alla knappar
 */
function bindKeyEvent() {
    inputElement.addEventListener("keypress", handleEnter)
}


/**
 * 
 * @param {KeyboardEvent} event 
 * funktionen tar in ett event som först tar bort en css-klass 
 * den första if-satsen kollar om det inkommande eventet är av värdet enter
 * loopar igenom de två värdena i options arrayen och jämför dess textvärden 
 * med textvärden från inputfältet
 * 
 * om inputfältets text matchar så uppdtteras currentRoomIndex variablen med 
 * värdet i option.nextRoom,
 * kör game funtionen och uppdaterar placeholder attributet på inputfältet
 * 
 * om keypress-eventet inte matchar nångon text i någon av options-arrayerna
 * så uppdateras placeholder attributet på inputfältet med ett felmeddelande
 * oc en css-klass sätts på input-elementet
 * 
 * 
 * Om texten från inputfältet matchar en text i textarrayen så uppdateras 
 * currentRoomIndex och spelaren skickas framåt annars visas ett felmeddelnade
 */
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
                game()
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

/**
 * The function textMatch checks if the input field text is matching 
 * the text array under options.
 * 
 * @param {String} inputText Texten som användaren skriver in i inputfältet
 * @param {Array<String>} arrayOfTexts Alternativen som ska matchas med texten från inputfältet
 * @returns {Boolean} matchar inputText med en av arrayOfText så returnera true annars returnera false
 */
function textMatch(inputText, arrayOfTexts){

    for(let text of arrayOfTexts) {
        if(inputText.toLowerCase() === text.toLowerCase()){
            return true
        }
    }
    return false
}

/**
 * Setups to start the game
 */
function setup() {
    bindKeyEvent()
    game()
}


window.onload = setup()
