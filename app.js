let input1 = document.querySelector(".cash");
let input2 = document.querySelector(".gold");
let h1 = document.querySelector(".h1");
let select = document.querySelector("#select");
function calculateZakat() {
    let input11 = parseFloat(input1.value);
    let input12 = parseFloat(input2.value);
    if (isNaN(input11)) {
        input11 = 0;
    }
    let finalAnswer = select.value * input12 + input11;
    let finalAnswer2 = finalAnswer / 40;
    if (finalAnswer >= 1744500) {
        h1.innerHTML = "Your Zakat would be " + finalAnswer2 + " PKR";
    } else {
        h1.innerHTML = "You are not eligible";
    }
}