/**
 * this is the gameStory array
 */

//En array med flera objek
const gameStory = [
    //Första objektet som innehåller en string 'message'
     //scenario STARTA SPELET 0
    {
        message: 'Vill du spela zombie spelet?',
        options: [{
            text: ['starta', 'kör', 'spela', 'ja', 'lets go', 'japp', 'yes', 'yeah'],
            nextRoom: 1
        }, {
            text: ['nej', 'no', 'nä', 'nope', 'oh no'],
            nextRoom: 10
        }]
    },
    //scenario BÖRJAN [1]
    {
        message: 'Du befinner dig i en skog. Det är en fin höstdag men du har kommit bort. Det ryktas om att någon har sett en zombie, det skrämmer dig, det enda du vet är att zombies drars till höga ljud. Lite längre fram ser du ett hus som ligger vid en sjö, utanför huset finns det en bil. \n Väljer du att gå till huset eller till sjön?\n\n Val: \n Går till huset \n Går till Sjön',
        options: [{
            text: ['Huset', 'till huset', 'house', 'hus', 'casa', 'gå in i huset', 'gå till huset','går till huset'],
            nextRoom: 2
        }, {
            text: ['Sjön', 'lake', 'vattnet', 'sjö', 'lago', 'gå till sjön', 'jag väljer sjön'],
            nextRoom: 3
        }]
    },

    //scenario HUS [2]
    {
        message: 'Du befinner dig nu i huset, det är dammigt och känns övergivet. Men det doftar nybryggt kaffe. Vad vill du göra? \n\nFölja kaffedoften och se om du hittar någon som kan hjälpa dig?\n\n Kommer på att du har gjort inbrott i huset får panik och springer ut igen.\n\n Val: \nKaffe \nSpringer ut',
        options: [{
            text: ['Följa kaffedoften', 'kaffedoften', 'kaffedoft', 'kaffe', 'cafe', 'café'],
            nextRoom: 4
        }, {
            text: ['springer ut', 'springer ut igen', 'panik', 'springa', 'springer', 'går ut', 'går', 'jag får panik', 'jag springer', 'jag springer ut', 'jag går', 'jag går ut','ut'],
            nextRoom: 5
        }]
    },

    //scenario SJÖ [3]
    {
        message: 'Du står nu vid sjön, några meter bort finns en motorbåt. Vad vill du göra? \n\n Val: \nGå till motorbåten \n Går tillbaka till huset',
        options: [{
            text: ['gå till motorbåten', 'motorbåten', 'båten', 'båt', 'kolla båten', 'jag går till motorbåten'],
            nextRoom: 6
        }, {
            text: ['går tillbaka till huset', 'tillbaka till huset', 'huset', 'tillbaka', 'jag går tillbaka till huset'],
            nextRoom: 7
        }]
    },

    //scenario HUS => KAFFEDOFT [4]
    {
        message: 'Doften ledder dig till köket, kaffebryggaren står på och du ser att det ligger någon bakom köksbordet. Vad gör du?\n\n Val:\n Du ser om personen mår bra \n Du skriker av räddsla!!',
        options: [{
            text: ['Du ser om personen mår bra', 'mår bra', 'ser till personen', 'undersöker perosnens välmåeende', 'mår', 'bra', 'jag ser om personen mår bra'],
            nextRoom: 8
        }, {
            text: ['Du skriker av räddsla!!', 'Du skriker av räddsla!', 'Du skriker av räddsla', 'skriker', 'frågar', 'uppmärsammhet', 'få personens uppmärksamhet', 'Du ropar', 'jag ropar'],
            nextRoom: 8
        }]
    },

    //scenario HUS => INNBROTT [5]
    {
        message: 'Du står nu utanför huset. Dörren stängs bakomdig med ett högt BANG! Vad gör du?\n\n Val: \nSpring!!! \nStår helt stilla och hoppas ingen hörde!',
        options: [{
            text: ['Springer!!!', 'Springer!!', 'springer!', 'springer', 'spring'],
            nextRoom: 8
        }, {
            text: ['Står helt stilla och hoppas ingen hörde!', 'står still', 'står helt stilla', 'hoppas ingen hörde', 'stilla', 'står kvar','står helt still'],
            nextRoom: 8
        }]
    },

    //scenario SJÖ => MOTORBÅT [6]
    {
        message: 'Du kan tyvärr inte starta båten, gå i land. Du snubblar och hamnar i vattnet, det blir ett högt ljud, vad gör du?\n\n Val:\nTar dig upp ur vattnet och springer mot huset \n Försöker komma på båten igen',
        options: [{
            text: ['Tar dig upp ur vattnet och springer mot huset', 'tar dig upp', 'tar dig upp ur vattnet', 'springer', 'springer mot huset', 'går tillbaka till huset', 'huset'],
            nextRoom: 8
        }, {
            text: ['Försöker komma på båten igen', 'går på båten', 'båten igen', 'går upp', 'testa båten', 'upp', 'båten'],
            nextRoom: 8
        }]
    },

    //scenario SJÖ => VÄND TILL HUSET [7]
    {
        message: 'Du vänder och börjar gå mot huset och kommer på att det fanns en bil utanför. Du går till bilen, den är öppen och nycklarna ligger i vad gör du? \n\n Val: \nSätter dig i bilen och kör iväg\n Du går mot huset för att se om du får låna bilen',
        options: [{
            text: ['Sätter dig i bilen och kör iväg på stigen', 'sätter dig i bilen','tar bilen', 'tar bilen och kör iväg', 'sätter dig i bilen och kör iväg', 'kör iväg i bilen', 'bilen', 'kör', 'ta bilen', 'drive'],
            nextRoom: 9
        }, {
            text: ['Du går mot huset för att se om du får låna bilden', 'lånar bilen', 'går mot huset', 'huset', 'går till huset', 'lånar', 'tillbaka'],
            nextRoom: 8
        }]
    },


    //scenario LOOSER END SCEN [8]
    {
        message: 'GAME OVER \n\nDu hör ett obehagligt ljud bakom dig, ljudet kommer närmare och närmare en stark illaluktande doft omringar dig och det blir svart. Game over, du har blivit uppäten av en zombie 🧟‍🧟‍ \n\nVill du spela igen?',
        options: [{
            text: ['ja', 'yes', 'si', 'jaa', 'ok', 'okey', 'yeah'],
            nextRoom: 0
        }, {
            text: ['nej', 'Nej tack!', 'no', 'hell no', 'well no', 'nä', 'neej', 'nep'],
            nextRoom: 10
        }]
    },

    //scenario WINNER END SCEN [9]
    {
        message: 'THE WINNER TAKES IT ALL 😎\n\nPåvägen ser du massa zombies och blir rädd och överraskad men mest lättad. \n Grattis du har lyckats ta dig ut levande från zombie skogen 🏆\n\nBra jobbat, vill du spela igen?',
        options: [{
            text: ['ja', 'yes', 'si', 'jaa', 'ok', 'okey', 'yeah'],
            nextRoom: 0
        }, {
            text: ['nej', 'Nej tack!', 'no', 'hell no', 'well no', 'nä', 'neej', 'nep', 'nope'],
            nextRoom: 10
        }]
    },
     //scenario WINNER END SCEN [10]
    {
        message: 'Ciao 👋🏾🖖🏾\n På återseende',
        options:[{
            text: ['spela', 'tack', 'igen','lets go'],
            nextRoom: 0
        }]
    }


]