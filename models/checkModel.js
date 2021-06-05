
import fs from 'fs';   
import Constant from './constantModel.js'

export default class Check {


    static checkAnswer(answers, question){

        let points = 0;
        for (let i = 0; i < answers.length; i++) {
            if(answers[i] === this.getCharacterName(question[i].character)) {
                points++;
            }
        }
        return points;
    }

    static getCharacterName(characterID){        
        let characters = this.readJSONFile(Constant.getFile.characters);
        let value = "";

        characters.forEach(element => {
            if(element._id == characterID){
                value = element.name;
            }
        });
        return value;
    }

    //Read file
    static readJSONFile(key){
        let rawdata = fs.readFileSync(Constant.files[key]);
        let json = JSON.parse(rawdata);    
        return json;
    }

}