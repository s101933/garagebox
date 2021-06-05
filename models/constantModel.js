export default class Constant {

    static getFile = {
        quotes: 0,
        characters: 1
    }

    //API Files
    static files = [
        './data/quotes.json',        
        './data/characters.json'
    ]

    //API URL
    static url = [
        'https://the-one-api.dev/v2/quote',
        'https://the-one-api.dev/v2/character'
    ]

    static Game = {
        Button: "<button onClick='hasClicked()'>Start the game</button>",

    }
    

    static states = {
        passed: {
            text: [
                "You have succesfully completed the adventure.",
                "JRR Tolkien couldn't have done it better.",
                "You are worthy of traversing Middle Earth after this success!"
            ],
            img: [
                "../public/images/passed.jpg"
            ]
        },
        failed: {
            text: [
                "You are not worthy of taking the ring to Rivendell",
                "You shall not pass today. Someday you will...",
                "The day may come when the knowledge of men fails, today is that day."    
            ],
            img: [
                "../public/images/failed.jpg"
            ]
        }
    }

}