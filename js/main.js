const buttons = document.querySelectorAll("button");

//Obtener valor del campo input
const inputField = document.getElementById("result");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        const buttonValue = buttons[i].textContent;

        //Validaciones
        if(buttonValue === "C"){
            resultDelete();
        } else if(buttonValue === "="){
            calculateResult();
        } else{
            appendValue(buttonValue);
        }
    });
}

function resultDelete(){
    inputField.value = "";
}

function appendValue(buttonValue){
    inputField.value += buttonValue;
}

function calculateResult(){
    inputField.value = eval(inputField.value);
}
/*La funcion eval() se utiliza para evaluar una cadena de texto 
como codigo js en tiempo de ejecución.*/


//buttons[i] se refiere a un valor específic en la lista

