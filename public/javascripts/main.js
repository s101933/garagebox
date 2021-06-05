'use strict';
let container;
let my_questions;
let buttons;
let answers = [];
let current = 0;
let username = "";

let hasHint = false

const HTML = {
    addElement: function(tag, className, text) {
        var element = document.createElement(tag);
        if(className != "") element.className = className;
        element.appendChild(document.createTextNode(text))
        return element;
    },
    addImage: function(url, alt, className) {    
        var element = document.createElement("img");
        element.src = url;  
        element.alt = alt;  
        if(className != "") element.className = className;        
        return element;
    }
}

function requests(value, answers, questions){
    container = document.getElementById("quiz-container");
    // Setup connection
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/lord-of-the-rings", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    // Send to server
    xhttp.send(JSON.stringify({
        value: value,
        answers: answers,
        questions: questions
    }));
    
    // Responses from server
    xhttp.onload = function() {
        let data = JSON.parse(this.responseText);
        switch (data.value) {
            case "play":       
                my_questions = data.questions;
                buttons = data.buttons;
                addQuestion(current);         
                break;
            case "result":    
                showResult(data.points);                
                break;
            case "hint":
                setHint(data.hint);
                break;
            default:
                console.log("Error: default")
                break;
        }
    };
}

function saveQuestion(event) {
    if(hasHint) {
        event = event + "hint";
    }
    answers.push(event);
    hasHint = false;
    if(current < my_questions.length - 1){
        current++;
        addQuestion(current);
    } else {
        requests("request result", answers, my_questions);
    }
}

function addQuestion(key) {

    container.innerHTML = "";

    let center = HTML.addElement("div", "container center  fade-in-fast", "");
    container.appendChild(center)

    let question_container = HTML.addElement("div", "question-container", "");
    let question_title = HTML.addElement("p", "question-title", my_questions[key].dialog);
    center.appendChild(question_container);
    question_container.appendChild(question_title);

    let button_container = HTML.addElement("div", "button-container", "");

    // Hint instellen
    let hint = HTML.addElement("div", "center", "")
    let hint_text = HTML.addElement("p", "", "Hint: ")
    let hint_answer = HTML.addElement("span", "", "**********")
    hint_answer.setAttribute("id", "hint-text");
    hint.style.color = "#d9a441"
    hint.style.marginTop = "35px"
    hint.style.cursor = "pointer"
    hint.onclick = function() {
        getHint()
    };
    hint.appendChild(hint_text);
    hint_text.appendChild(hint_answer);

    container.appendChild(button_container)
    container.appendChild(hint)

    // Button instellen
    buttons[key].forEach(element => {        
        let button = HTML.addElement("button", "btn my-button fade-in-fast", element.name);
        button.onclick = function() { saveQuestion(element.name) };
        button.style.width = "100%"
        button.style.margin = "10px"
        button.style.height = "68px"
        button_container.appendChild(button);
    });    
}

function getHint() {
    hasHint = true
    requests("get hint", {
        character: my_questions[current].character
    })
}

function setHint(params) {
    document.getElementById("hint-text").innerHTML = params.name;    
}

var showStates = {
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

function showResult(points) {
    container.innerHTML = "";
    let status = points >= 15;
    container.className = "results"
    let my_points = HTML.addElement("h3", "points fade-in", points + "/30");
    let my_state = HTML.addElement("h3", "state", "You shall");
    let state_span = HTML.addElement("span", "fade-in", status ? " pass" : " not pass");
    state_span.style.color = status ? "greenyellow":"red";
    let my_text = HTML.addElement("p", "fade-in", status ? showStates.passed.text[1] : showStates.failed.text[1])
    let my_img = HTML.addImage(status ? showStates.passed.img[0] : showStates.failed.img[0], "state_picture fade-in");
    my_img.style.maxWidth = "500px";
    my_img.style.width = "100%";
    let login_container = HTML.addElement("div", "login_container", "");
    let login = HTML.addElement("a", "", "Reveal thouself");
    login.style.float = "left"
    login.href = "/login"
    let account = HTML.addElement("a", "", "Make thou new identity");
    account.style.float = "right"
    account.href = "/create-account"
    login_container.appendChild(login);
    login_container.appendChild(account);
    container.appendChild(my_points);
    container.appendChild(my_state);
    my_state.appendChild(state_span);
    container.appendChild(my_text);
    container.appendChild(my_img);
    container.appendChild(login_container);
}

/**************************************************************************** */

function validateForm(params) {    
    switch (params) {
        case "login":
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var checkbox = document.getElementById("checkbox").value;
            console.log(email, password, checkbox);
            if(hasCookie()) {
                let cookie = getCookie("account");
                let result = cookie.split(",");
                if(result[1] == email && result[2] == password){             
                    window.location.href = "/users"
                }
            }
            break;
        case "create":
            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var password1 = document.getElementById("password1").value;
            var password2 = document.getElementById("password2").value;

            if(password1 !== password2){
                alert("Passwords don't match!");
                break;
            } else {
                document.cookie = "account="+username+","+email+","+password1;                
                window.location.href = "/login"
            }
            break;    
        default:
            break;
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function hasCookie() {
    var username = getCookie("account");
    if (username != "") {
        return true;
    } else {
        return false;
    }
  }

  function checkUserNavigation() {
    var profile = document.getElementById("navbar-profile");
      if(hasCookie()) {
        profile.innerHTML = "";
        console.log("PROFILE")
        let li1 = HTML.addElement("li", "nav-item", "");
        let a_login = HTML.addElement("a", "nav-link", getCookie("account").split(",")[0]);
        a_login.href = "/users";
        profile.appendChild(li1);     
        li1.appendChild(a_login);
        a_login.setAttribute("id", "user")
      }
  }

  checkUserNavigation();