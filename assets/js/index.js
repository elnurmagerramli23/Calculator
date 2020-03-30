const display = document.querySelector('input.screen');
let firstNumber = '';
let secondeNumber = '';
let operationSign = '';
let result = 0;

function clearDisplay() {
    display.value = '';
    console.log("Display cleared!");
}

function insert(value) {
    display.value += value;
    console.log('inserted new number in display');
}

function getSign(sign) {
    firstNumber = display.value;
    console.log('remember new number');
    clearDisplay();
    

    if(!firstNumber){
        console.log('input first number')
        return;
    }
    operationSign = sign;
}

function checkVariables() {
    secondeNumber = display.value;
    clearDisplay();

    if(!secondeNumber){
        return
    }
	+firstNumber;
	+secondeNumber;
    getResult(operationSign);
    console.log('checking variables');
    
}

const getSum = () => firstNumber + secondeNumber;
const getSubtraction = () => firstNumber - secondeNumber;
const getMultipication = () => firstNumber * secondeNumber;
const getDivision = () => firstNumber / secondeNumber;
// функция ничего не принимает, а switch принимает, как такое может быть?
//какой из них равно у тебя?
// равно у меня перемнная в которую после кейса запишется значение подождипопробую позвонить. ок. может проверить сейчас работает кейс или нет?
function getResult(operationSign) {
    console.log('get result');
    
    switch (operationSign) {
        case '+':
           result = getSum();
            break;
        case '-':
            result = getSubtraction();
            break;
        case '*':
            result = getMultipication();
            break;
        case '/':
            result = getDivision();
            break;
        default:
            console.log('default case');
            
            return;
	}
	clearDisplay();
    display.value = result
}