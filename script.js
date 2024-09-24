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
function appendCharacter(character) {
    if (input.value === "0" || input.value === "Error") {
        input.value = character;
    } else {
        input.value += character;
    }
}
function clearDisplay(){
    input.value = "0";
}
function deleteLast(){
    if(input.value.length>1){
        input.value = input.value.slice(0,-1);
    }else{
        input.value = "0";
    }
}
function result(){
    
}