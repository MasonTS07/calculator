const previousOp = document.querySelector('[data-previousOp]');
const currentTotal = document.querySelector('[data-currentTotal]');
const currentOp = document.querySelector('[data-currentOp]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const operationBtn = document.querySelectorAll('[data-operation]');
const numberBtn = document.querySelectorAll('[data-number]');
const equalsBtn = document.querySelector('[data-equals]');

let display1Num = '';
let display2Num = '';
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
        display2Num += e.target.innerText;
        currentOp.innerText = display2Num;
    })
})

operationBtn.forEach(operation => {
    operation.addEventListener('click', (e)=> {
        if (!display2Num) result;
        hasDot = false;
        const operationName = e.target.innerText;
        if(display1Num && display2Num && lastOperation) {
            mathOperation();
        }
        else {
            result = parseFloat(display2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

function clearVar(name = '') {
    display1Num += display2Num + '' + name + '';
    previousOp.innerText = display1Num;
    currentOp.innerText = '';
    display2Num = '';
    currentTotal.innerText = '=' + result;
}

function mathOperation() {
    if(lastOperation === '+') {
        result = parseFloat(result) + parseFloat(display2Num);
    }
    else if(lastOperation === '-') {
        result = parseFloat(result) - parseFloat(display2Num);
    }
    else if(lastOperation === '×') {
        result = parseFloat(result) * parseFloat(display2Num);
    }
    else if(lastOperation === '/') {
        result = parseFloat(result) / parseFloat(display2Num);
    }
    else if(lastOperation === '%') {
        result = parseFloat(result) % parseFloat(display2Num);
    }
}

equalsBtn.addEventListener('click', (e)=> {
    if( !display1Num || !display2Num ) return;
    hasDot = false;
    mathOperation();
    clearVar();
    currentOp.innerText = result;
    currentTotal.innerText = '';
    display2Num = result;
    display1Num = '';
})

clearBtn.addEventListener('click', (e)=> {
    previousOp.innerText = '0';
    currentOp.innerText = '0';
    display1Num = '';
    display2Num = '';
    currentTotal.innerText = '';
    result = '';
})

deleteBtn.addEventListener('click', (e)=> {
    currentOp.innerText = '';
    display2Num = '';
})

