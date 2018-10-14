// use javascript only when the DOM element has completely loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // calculate any user input using the narcissistic formular
    let narcissistic = (value) => {
        let digits = value.toString();
        let power = digits.length;
        let sum = 0;
        let allDigits = [];
        
        for (let i = 0; i < digits.length; i++) {
            allDigits.push(parseInt(digits[i]));
        }
    
        for (let i = 0; i < allDigits.length; i++) {
            sum += Math.pow(allDigits[i], power);
        }
        return sum;
    }

    // detect if the input is a narcissistic number or not
    let detectNarcissistic = () => {
        let input = document.getElementById('input').value;
        console.log(input);
        if (input !== "" && !(input < 0) ) {
            input = parseInt(input);
            let result = narcissistic(input);
            let msg;
            if (input === result) {
                playAgain();
                msg = "You should be proud of yourself, you can call yourself an ACE... your input is " + input + " and your result is " + result + " NARCISSISTIC EXPERT!!!"; 
                return computerInputDisplay(msg,1000,"computer");
            } else {
                playAgain();
                msg = "lol, you can't even guess a Narcissistic Number...your input is " + input + " and your result is " + result;
                return computerInputDisplay(msg,1000,"computererror");
            }
        } else {
            playAgain();
            msg = "you need to enter a number, it looks like we are having an empty value or a negative number";
            return computerInputDisplay(msg,1000,"computererror");
        }
    }

    //repeat the game after each result
    let playAgain = () => {
        let play = document.getElementById('detect').innerHTML = "Play Again";
        clearNode();
    }

    // create a automated message by the computer
    let computerInputDisplay = (input,delay,idclass) => {
        computerMsg = document.createElement('div');
        computerMsg.textContent = input;
        computerMsg.setAttribute('id',idclass);
        computerMsg.setAttribute('class',idclass);

        setTimeout(() => {
            document.getElementById("msg").appendChild(computerMsg);
        },delay);
    }

    let openForm = () => {
        document.getElementById('myForm').style.display = "block";
        computerInputDisplay("Welcome! enter a number to play",1000,"computer");
        disableEnableButton('example');
        disableEnableButton('start');
    };

    let disableEnableButton = (id) => {
        let button = document.getElementById(id);
        if(button.disabled) {
            return button.disabled = false;
        } else {
            return button.disabled = true;
        }
    }
    
    //open the narsissitic detector form
    let closeForm = () => {
        let computerMsg = document.createElement('div');
        computerMsg.textContent = "Thanks for using the App!!!";
        computerMsg.setAttribute('id',"computer");
        computerMsg.setAttribute('class',"computer");
        document.getElementById("msg").appendChild(computerMsg);
        setTimeout(() => {
            clearText();
            document.getElementById('myForm').style.display = "none";
            clearNode();
        },2000)

        disableEnableButton('start');
        disableEnableButton('example');
        }

    //clear user input box
    let clearText = () => {
        document.getElementById('input').value = '';
    }

    //remove all message my the computer
    let clearNode = () => {
        let msg = document.getElementById("msg");
        while(msg.firstChild) {
            msg.removeChild(msg.firstChild);
        }
    }

    //shoews the user an example before playing the game
    let examples = () => document.getElementById('alert').style.display = "block";

    // close the example displayed
    let closeExample = () => setTimeout(() => { document.getElementById('alert').style.display = "none"; }, 600);


    let start = document.getElementById('start');
    let cancel = document.getElementById('cancel');
    let detect = document.getElementById('detect');
    let input = document.getElementById('input');
    let example = document.getElementById('example');
    let close = document.getElementById("closebtn");

    
    // eventListners
    start.addEventListener('click', openForm);
    cancel.addEventListener('click', closeForm);
    detect.addEventListener('click', detectNarcissistic);
    input.addEventListener('focus',clearText);
    example.addEventListener('click', examples);
    close.addEventListener('click', closeExample);

}) 






