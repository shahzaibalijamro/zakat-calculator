let input1 = document.querySelector(".cash");
let input2 = document.querySelector(".gold");
let h1 = document.querySelector(".h1");
function calculateZakat() {
    let radio1 = document.querySelector(".radio1")
    let radio2 = document.querySelector(".radio2")
    let input11 = parseFloat(input1.value);
    let input12 = parseFloat(input2.value);
    let finalAnswer;
    if (isNaN(input11)) {
        input11 = 0;
    }
    if (isNaN(input12)) {
        input12 = 0;
    }
    if(radio1.checked===true){
        finalAnswer = radio1.value * input12 + input11;
    }else if(radio2.checked===true){
        finalAnswer = radio2.value * input12 + input11;
    }else{
        alert("maalik kam kharab he")
    }
    let finalAnswer2 = finalAnswer / 40;
    if (finalAnswer >= 1744500) {
        h1.innerHTML = "Your Zakat would be " + finalAnswer2 + " PKR";
    } else {
        h1.innerHTML = "You are not eligible";
    }
}