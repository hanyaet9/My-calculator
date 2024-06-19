// selecting inputs

display = document.getElementById('text');


// making Functions

function appendToDisplay(number){

    text.value += number
}

function parancess(){
    if(text.value= ""){}

}


function clearDisplay(){

     text.value = "";
}

function del(){
    text.value = text.value.slice(0 , -1)
}


function calculate(){

    try {
        text.value = eval(text.value)
    }
     catch (error) {
        text.value = "Error"

    }
}



