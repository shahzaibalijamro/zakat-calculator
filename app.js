let input1 = document.querySelector(".cash");
let input2 = document.querySelector(".gold");
let input3 = document.querySelector(".gold-rate");
let h1 = document.querySelector(".h1");

function calculateZakat() {
    let input11 = parseFloat(input1.value);
    let input12 = parseFloat(input2.value);
    let input13 = parseFloat(input3.value);
    let finalAnswer = (input13*input12)+input11;
    let finalAnswer2 = finalAnswer/40;
    if (finalAnswer > 952000) {
        h1.innerHTML = "Your Zakat would be " + finalAnswer2;
    }else{
        h1.innerHTML = "You are not eligible";
    }
}