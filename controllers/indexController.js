// Model
import indexModel from '../models/updateModel.js';
import JSONFile from '../models/fetcherModel.js';
import Checksum from '../models/checkModel.js';

export default {
    // Get home
    Empty(req,res,next){
        res.redirect('/home');
    },
    Home(req,res,next){
        res.render('index', {
            page:'Home', 
            menuId:'home'});
    },
    // Get lord-of-the-rings
    Quiz(req,res,next){
        res.render('quiz', { 
            page:'Lord of the rings',
            showResults: false,
        });
    }, 
    request(req,res,next){
        let data_questions = [];
        let data_characters = [];

        switch (req.body.value) {
            case "request questions":
                while (data_questions.length < 30) {
                    let temp_question = JSONFile.getQuestion();
                    if(data_questions.indexOf(temp_question) === -1) 
                        data_questions.push(temp_question);
                }

                data_questions.forEach(element => {
                    data_characters.push(JSONFile.setRandomButtons(element.character))                  
                });
                
                res.send(JSON.stringify(
                    {
                        value: "play",
                        questions: data_questions,
                        buttons: data_characters
                    }
                ));
                break;
            case "request result":
                let points = Checksum.checkAnswer(req.body.answers, req.body.questions)
                
                res.send(JSON.stringify(
                    {
                        value: "result",
                        points: points
                    }
                ));
                break;    
            case "get hint":
                let hint = req.body.answers.character;

                let result = JSONFile.getCharacter(hint);

                res.send(JSON.stringify(
                    {
                        value: "hint",
                        hint: result
                    }
                ));
                break; 
            case "login":
                break;   
            case "create":
                break;   
            default:
                break;
        }
    },
    // Get lord-of-the-rings
    Login(req,res,next){
        res.render('login', { 
            page:'Login',
        });
    }, 
    // Get lord-of-the-rings
    Create(req,res,next){
        res.render('account', { 
            page:'Create account',
        });
    },
    // Get lord-of-the-rings
    Profile(req,res,next){
        res.render('users', { 
            page:'Create account',
        });
    }, 
    // Get lord-of-the-rings
    Sitemap(req,res,next){
        res.render('sitemap', { 
            page:'Sitemaps',
        });
    }, 
}