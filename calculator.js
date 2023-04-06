function calculateRemainder() {
    let result = parseInt(document.getElementById("dividend").value) % parseInt(document.getElementById("divisor").value);
    let calculator = document.getElementById("calculate-button");
    let reset = document.getElementById("reset-button");
    let para = document.getElementById("result-message");
    para.textContent = "The Remainder of " + document.getElementById("dividend").value + " and " + document.getElementById("divisor").value + " is " + result;
    if(result!=0){
        document.getElementById("divisor").classList.add("message-style");
        document.getElementById("divisor").disabled = true;
        document.getElementById("dividend").classList.add("message-style");
        document.getElementById("dividend").disabled = true;
    }

}




function reset() {
    document.getElementById("divisor").value = "";
    document.getElementById("dividend").value = "";
    document.getElementById("divisor").classList.remove("message-style");
    document.getElementById("dividend").classList.remove("message-style");
    document.getElementById("result-message").textContent = "";
    document.getElementById("divisor").disabled = false;
    document.getElementById("dividend").disabled = false;


}

function changePalette2(){
    document.getElementById("sidebar").style.color = "red";
}

const colorButton2 = document.getElementById("palette2")
const calculatButton = document.getElementById('calculate-button');
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener("click", reset);
calculatButton.addEventListener("click", calculateRemainder);

colorButton2.addEventListener("click", changePalette2);


