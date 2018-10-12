document.addEventListener("DOMContentLoaded", () => {
    
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

    let playAgain = () => {
        let play = document.getElementById('detect').innerHTML = "Play Again";
        clearNode();
    }

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
    };
    
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
        }

    let clearText = () => {
        document.getElementById('input').value = '';
    }

    let clearNode = () => {
        let msg = document.getElementById("msg");
        while(msg.firstChild) {
            msg.removeChild(msg.firstChild);
        }
    }


    
    let start = document.getElementById('start');
    let cancel = document.getElementById('cancel');
    let detect = document.getElementById('detect');
    let input = document.getElementById('input');

    let isNum = () => {
        if (isNaN(input)) {
            return false;
        }
        return true;
    }
    
    start.addEventListener('click', openForm);
    cancel.addEventListener('click', closeForm);
    detect.addEventListener('click', detectNarcissistic);
    input.addEventListener('focus',clearText);
    input.addEventListener('keypress', isNum);

}) 






