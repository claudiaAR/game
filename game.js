const textElement = document.getElementById('text')

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')

const input1 = document.getElementById('input1')

//En array med flera objek
const gameStory = [
    //Första objektet som innehåller en string 'message'
    //scenario BÖRJAN 0
    {
        message: 'Du befinner dig i en skog. Det är en fin höstdag men du har kommit bort. Det ryktas om att någon har sett en zombie, det skrämmer dig och du vill hem. Lite längre fram ser du ett hus som ligger vid en sjö, utanför huset finns det en bil.',
        options: [{
            btnText: 'Vill du gå in i huset?',
            nextRoom: 1
        }, {
            btnText: 'Vill du gå till sjön?',
            nextRoom: 2
        }]
    },

    //scenario HUS 1
    {
        message: 'Du befinner dig nu i huset, det är dammigt och känns övergivet. Men det doftar nybryggt kaffe. \n Vad vill du göra?',
        options: [{
            btnText: 'Följa kaffedoften och se om du hittar någon som kan hjälpa dig? ',
            nextRoom: 3
        }, {
            btnText: 'Kommer på att du har gjort inbrott i huset får panik och springer ut igen.',
            nextRoom: 4
        }]
    },

    //scenario SJÖ 2
    {
        message: 'Du står nu vid sjön, några meter bort finns en motorbåt. Vad vill du göra?',
        options: [{
            btnText: 'Du kollar in motorbåten såklart! 🚤',
            nextRoom: 5
        }, {
            btnText: 'Vänder tillbaka till huset för att se om någon kan hjälpa dig hem.',
            nextRoom: 6
        }]
    },

    //scenario HUS => KAFFEDOFT 3
    {
        message: 'Doften ledder dig till köket, kaffebryggaren står på och du ser att det ligger någon bakom köksbordet. Vad gör du?',
        options: [{
            btnText: 'Du kollar hur det är med personen som ligger ner',
            nextRoom: 7
        }, {
            btnText: 'Du ropar: -Hey! Är allt ok?',
            nextRoom: 7
        }]
    }, 

     //scenario HUS => INNBROTT 4
    {
        message: 'Du står nu utanför huset. Dörren stängs bakomdig med ett högt BANG! Vad gör du?',
        options: [{
            btnText: 'Springer!!!',
            nextRoom: 7
        }, {
            btnText: 'Står stilla och hoppas att det bara va du som hörde det!',
            nextRoom: 7
        }]
    },

    //scenario SJÖ => MOTORBÅT 5
    {
        message: 'Du kan tyvärr inte starta båten, du får gå tillbaka på land. När du går i land snubblar du och hamnar i vattnet, Det blir ett högt ljud och du skriker efter hjälp, vad gör du?',
        options: [{
            btnText: 'Tar dig upp ur vattnet och springer mot huset',
            nextRoom: 7
        }, {
            btnText: 'Försöker komma på båten igen',
            nextRoom: 7
        }]
    },

     //scenario SJÖ => VÄND TILL HUSET 6
     {
         message: 'Du vänder och börjar gå mot huset och kommer på att det fanns en bil utanför. Du går till bilen, den är öppen och nycklarna ligger i vad gör du?',
         options: [{
             btnText: 'Sätter dig i bilen och kör iväg på stigen.',
             nextRoom: 8
         }, {
             btnText: 'Du går mot huset för att se om du får låna bilden.',
             nextRoom: 7
         }]
     },


    //scenario LOOSER END SCEN 7
    {
        message: 'Du hör ett obehagligt ljud backom dig, ljudet kommer närmare och närmare en stark illaluktande doft omringar dig och det blir svart. Game over, du har blivit uppäten av en zombie 🧟‍🧟‍',
        options: [{
            btnText: 'Vill du spela igen?',
            nextRoom: 0
        }, {
            btnText: 'Nej tack!',
            nextRoom: 0
        }]
    },

    //scenario WINNER END SCEN 8
    {
        message: 'Påvägen ser du massa zombies och blir rädd och överraskad men mest lättad. \n Grattis du har lyckats ta dig ut levande från zombie skogen 🏆',
        options: [{
            btnText: 'Bra jobbat, vill du spela igen?',
            nextRoom: 0
        }, {
            btnText: 'Nej tack!',
            nextRoom: 0
        }]
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

