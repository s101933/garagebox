// Dependencies
import fs from 'fs';   
import Constant from './constantModel.js'

export default class Fetcher {

    static getJsonCharacters(){
        return this.readJSONFile(Constant.getFile.characters);

    }

    //Read file
    static readJSONFile(key){
        let rawdata = fs.readFileSync(Constant.files[key]);
        let json = JSON.parse(rawdata);    
        return json;
    }

    //Get specifiq Question
    static getQuestion(){ 
        let question = this.readJSONFile(Constant.getFile.quotes);
        return question[Fetcher.getRandomInt(question.length)];
    }

    static getCharacter(character){
        let json = this.getJsonCharacters();

        let original = "";

        json.forEach(element => {
            if(element._id == character) {
                original = element;
                return;
            }
        });

        return original;

    }

    static setRandomButtons(character){
        let json = this.getJsonCharacters();

        let original;
        let data = [];

        json.forEach(element => {
            if(element._id == character) {
                original = element;
                return;
            }
        });


        while (data.length < 4) {
            let temp = json[this.getRandomInt(json.length)];
            if(data.indexOf(temp) === -1 && temp._id != character) data.push(temp);
        }

        data[this.getRandomInt(data.length)] = original;

        return data;

    }
    
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}