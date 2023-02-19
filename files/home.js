const api = "https://api.exchangerate-api.com/v4/latest/USD";

submitButton = document.querySelector(".submitButton");
inputVal = document.querySelector(".inp");


function updateValue(e){
    searchValue =e.target.value;
}

submitButton.addEventListener("click",getResults);

function getResults(){
    fetch(api).then(currency => {
        return currency.json();
    }).then(displayResults);
}

function displayResults(currency){
    let currencyVal;
    input = inputVal.value;
    currencyVal = currency.rates[input];
    console.log(currencyVal)
}