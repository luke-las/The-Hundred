//get values from interface
function getValues(){
    //get values
    let startValue = Number(document.getElementById("startValue").value);
    let endValue = Number(document.getElementById("endValue").value);

    //call generateNumbers
    let numbersGenerated = generateNumbers(startValue, endValue);

    //call displayNumbers
    displayNumbers(numbersGenerated);
}

//generate numbers from startValue to endValue
function generateNumbers(startValue, endValue){
    let numbersGenerated = [];
    for (let i = startValue; i <= endValue; i++) {
        numbersGenerated.push(i);
    }
    return numbersGenerated;
}

//display even numbers in bold
function displayNumbers(numbersGenerated){
    let templateRows = "";
    for(let i = 0; i < numbersGenerated.length; i++){
        let numberI = numbersGenerated[i];
        if(numberI%2 == 0){
            templateRows += `<tr><td style="font-weight:bold">${numberI}</tr></td>`;
        }
        else{
            templateRows += `<tr><td>${numberI}</tr></td>`;
        }
    }

    document.getElementById("results").innerHTML = templateRows;
}