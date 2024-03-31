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
        if (radio1.checked===true) {
            h1.innerHTML = `1. You currently possess ${input11} PKR of amount in cash. <br> 2. You currently possess ${input12} grams of gold, whose worth is ${finalAnswer-input11} PKR. <br> 3. Upon adding both values and dividing the total by 40. <br> 4.  We get the amount of Zakat you are obliged to give which is <br> <span class="zakat"> ${finalAnswer2} PKR. </span`;
        }else if(radio2.checked===true){
            h1.innerHTML = `1. You currently possess ${input11} PKR of amount in cash. <br> 2. You currently possess ${input12} tolas of gold, whose worth is ${finalAnswer-input11} PKR. <br> 3. Upon adding both values and dividing the total by 40. <br> 4.  We get the amount of zakat you are obliged to give which is <br> <span class="zakat"> ${finalAnswer2} PKR. </span`;
        }
    } else {
        h1.innerHTML = "You are not obliged to give zakat.";
    }
}