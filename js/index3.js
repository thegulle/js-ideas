const clear_button = document.getElementById('clear_button');
const calcInput = document.getElementById('calcInput');
const calculator_keys = document.querySelector('.calculator_keys');
var value1 = "";
var value2 = "";
var calcType = "";
var result = "";

clear_button.addEventListener('click',function(){
    clearInput();
    clearAll();
});
calculator_keys.addEventListener('click',e => {
    if (e.target.matches("button")) {
        if((e.target).getAttribute("data-type")==undefined){
            setValueForInput(e.target);
        }else{
            setValueOrType(e.target);
        }
    }
});

function calc(){
    value1=parseInt(value1);
    value2=parseInt(value2);
    switch(calcType){
        case "plus":
            result = value1+value2;
            break;
        case "minus":
            result = value1-value2;
            break;
        case "multiply":
            result = value1*value2;
            break;
        case "divide":
            result = value2/value1;
            break;
        case "":
            alert("Please choose type");
            break;
    }
    calcInput.value = result;
    clearAll();
    value1 = result;
}

function setValueForInput(params){
    calcInput.value=calcInput.value+(params).getAttribute("data-value");
    value1 = parseInt(calcInput.value);
}

function setValueOrType(params){
    if((params).getAttribute("data-type")==="equal"){
        /* start calculator */
        calc();
    }else if((params).getAttribute("data-type")!==""){
        /* set calculator type */
        calcType = (params).getAttribute("data-type");
        if(typeof value2=="string"){
            value2 = parseInt(value1);
            value1="";
            clearInput();
        }
        if(typeof value1=="number" && typeof value2=="number"){
            calc();
        }
    }
}

function clearInput(){
    calcInput.value = "";
}

function clearAll(){
    value1 = "";
    value2 = "";
    calcType = "";
}
