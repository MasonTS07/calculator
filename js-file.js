const previousOp = document.querySelector('[data-previousOp]');
const currentTotal = document.querySelector('[data-currentTotal]');
const currentOp = document.querySelector('[data-currentOp]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const operationBtn = document.querySelectorAll('[data-operation]');
const numberBtn = document.querySelectorAll('[data-number]');
const equalsBtn = document.querySelector('[data-equals]');

let num1 = '';
let num2 = '';
let result = null;
let lastOperation = '';
let hasDot = false;


numberBtn.forEach(number => {
    number.addEventListener('click', (e)=> {
        if( e.target.innerText === '.' && !hasDot) {
            hasDot=true;
        }
        else if(e.target.innerText === '.' && hasDot){
            return;
        }
        num2 += e.target.innerText;
        currentOp.innerText = num2;
    })
})

operationBtn.forEach(operation => {
    operation.addEventListener('click', (e)=> {
        if (!num2) result;
        hasDot = false;
        const operationName = e.target.innerText;
        if(num1 && num2 && lastOperation) {
            mathOperation();
        }
        else {
            result = parseFloat(num2);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

function clearVar(name = '') {
    num1 += num2 + '' + name + '';
    previousOp.innerText = num1;
    currentOp.innerText = '';
    num2 = '';
    currentTotal.innerText = '=' + result;
}

function mathOperation() {
    if(lastOperation === '+') {
        result = parseFloat(result) + parseFloat(num2);
    }
    else if(lastOperation === '-') {
        result = parseFloat(result) - parseFloat(num2);
    }
    else if(lastOperation === '×') {
        result = parseFloat(result) * parseFloat(num2);
    }
    else if(lastOperation === '/') {
        result = parseFloat(result) / parseFloat(num2);
    }
    else if(lastOperation === '%') {
        result = parseFloat(result) % parseFloat(num2);
    }
}

equalsBtn.addEventListener('click', (e)=> {
    if( !num1 || !num2 ) return;
    hasDot = false;
    mathOperation();
    clearVar();
    currentOp.innerText = result;
    currentTotal.innerText = '';
    num2 = result;
    num1 = '';
})

clearBtn.addEventListener('click', (e)=> {
    previousOp.innerText = '0';
    currentOp.innerText = '0';
    num1 = '';
    num2 = '';
    currentTotal.innerText = '';
    result = '';
})

deleteBtn.addEventListener('click', (e)=> {
    currentOp.innerText = '';
    num2 = '';
})

