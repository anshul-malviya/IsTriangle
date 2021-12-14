const inputs = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#btn");
const outputBox = document.querySelector("#output");



function calculateSumOfTriangle (angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;

}

function isTriangle() {
    const sumOfAngles = calculateSumOfTriangle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputBox.innerHTML = "Yay, The angles form a triangle";
    }
    else{
        outputBox.innerHTML = "Oh Oh!, The angles don't form a triangle";
    }
}

checkBtn.addEventListener("click", isTriangle);