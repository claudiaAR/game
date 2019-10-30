const textElement = document.getElementById('text')

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')

const input1 = document.getElementById('input1')

//En array med flera objek
const gameStory = [
    //Första objektet som innehåller en string 'message'
    //scenario BÖRJAN
    {
        message: 'Du befinner dig i en skog. Det är en fin höstdag men du har kommit bort. Du vill hem. Lite längre fram ser du ett hus som ligger vid en sjö, utanför huset finns det en bil.',
        options: [{
            btnText: 'Vill du gå in i huset? 🏡',
            nextRoom: 1
        }, {
            btnText: 'Vill du gå till sjön? ⚓️',
            nextRoom: 2
        }]
    },

    //scenario HUS
    {
        message: 'Du befinner dig nu i huset, det är dammigt och känns övergivet. Men det doftar nybryggt kaffe. Vad vill du göra',
        options: [{
            btnText: 'Följa kaffedoften och se om du hittar någon som kan hjälpa dig? ☕️',
            nextRoom: 3
        }, {
            btnText: 'Kommer på att du har gjort inbrott i huset får panik och springer ut igen. 😳',
            nextRoom: 4
        }]
    },

    //scenario SJÖ
    {
        message: 'Du står nu vid sjön, några meter bort finns en motorbåt. Vad vill du göra?',
        options: [{
            btnText: 'Du kollar in motorbåten såklart! 🚤',
            nextRoom: 5
        }, {
            btnText: 'Vänder tillbaka till huset för att se om någon kan hjälpa dig hem. 🏡',
            nextRoom: 6
        }]
    },

    //scenario HUS => KAFFEDOFT
    {
        message: 'Doften ledder dig till köket, kaffebryggaren står på och du ser att det ligger någon bakom köksbordet. Vad gör du?',
        options: [{
            btnText: 'Du kollar hur det är med personen som ligger ner',
            nextRoom: 7
        }, {
            btnText: 'Du ropar: -Hey! Är allt ok?',
            nextRoom: 8
        }]
    }, 

     //scenario HUS => INNBROTT
    {
        message: 'Du står nu utanför huset. Dörren stängs bakomdig med ett högt BANG! Vad gör du?',
        options: [{
            btnText: 'Springer!!!',
            nextRoom: 9
        }, {
            btnText: 'Står stilla och hoppas att det bara va du som hörde det!',
            nextRoom: 9
        }]
    },
    //scenario END SCEN
    {
        message: 'Du hör ett obehagligt ljud backom dig, ljudet kommer närmare och närmare en stark illaluktande doft omringar dig och det blir svart. Game over, du har blivit uppäten av en zombie 🧟‍🧟‍'
    }

  ]







function showRoom(roomIndex) {
    
    const room = gameStory[roomIndex]
    textElement.innerText = room.message
    button1.innerText = room.options[0].btnText
    button2.innerText = room.options[1].btnText

    button1.addEventListener('click', () => {
        showRoom(room.options[0].nextRoom)
    })

    button2.addEventListener('click', () => {
        showRoom(room.options[1].nextRoom)
    })
}

function startGame() {
  showRoom(0)
}

startGame()

