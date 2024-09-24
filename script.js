const input = document.querySelector('input')
const buttons = document.querySelectorAll('button')
buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        switch (buttonValue) {
            case "AC":
                clearDisplay();
                break;
            case "DEL":
                deleteLast();
                break;
            case "=":
                result();
                break;
            default:
                appendCharacter(buttonValue);
            // console.log(buttonValue);                
        }
    })
})

// add character
function appendCharacter(character) {
    if (input.value === "0" || input.value === "Error") {
        input.value = character;
    } else {
        input.value += character;
    }
}

// clean the display
function clearDisplay(){
    input.value = "0";
}

// delete the last item
function deleteLast(){
    if(input.value.length>1){
        input.value = input.value.slice(0,-1);
    }else{
        input.value = "0";
    }
}

// result 
function result(){
    input.value = eval(input.value);
}