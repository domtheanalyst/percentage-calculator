let input1 = document.getElementById( "input1");
let input2 = document.getElementById("input2");
let form = document.getElementById("calcForm");
let resultDisplay = document.getElementById("resultDisplay");

form.addEventListener('submit', (event)=>{
    event.preventDefault();  
    if (!input1.value || !input2.value) {

        alert("Please enter values in the  fields!");

         return false;

    } else {

        x =  parseFloat(input1.value);
        y = parseInt(input2.value);

        let result = x/y;

        let percent = result * 100;

        resultDisplay.innerText = "Answer is" + " "+ percent.toFixed(2) + "%" ;
    }

});