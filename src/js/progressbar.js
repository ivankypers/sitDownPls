/*
const progressBarMin = document.getElementById('.price-progressbar-min');
const progressBarMax = document.getElementById('.price-progressbar-max');


progressBarMin.addEventListener("input", () => {
    minPrice.textContent = progressBarMin.value;
})

progressBarMax.addEventListener("input", () => {
    maxPrice.textContent = progressBarMax.value;
})
*/
/*

const minPrice = document.querySelector('.progressbar-min')
const maxPrice = document.querySelector('.progressbar-max')
const progressBars = document.querySelectorAll('input[type="range"]');
const range = document.querySelector(".slider .progress");



progressBars[0].addEventListener('input', (e) => {
    range.style.left = ((minPrice / progressBars[0].max) * 100) + "%";
    if(+progressBars[0].value > +progressBars[1].value){
        progressBars[1].value = +progressBars[0].value;
    }
    minPrice.textContent = progressBars[0].value
    maxPrice.textContent = progressBars[1].value
    progressBars[1].value = maxPrice;

});

progressBars[1].addEventListener('input', (e) => {
    range.style.right = 100 - (maxPrice / progressBars[1].max) * 100 + "%";
    if(+progressBars[1].value < +progressBars[0].value){
        progressBars[0].value = +progressBars[1].value;
    }
    maxPrice.textContent = progressBars[1].value
    minPrice.textContent = progressBars[0].value
});
*/

const minPrice = document.querySelector('.progressbar-min')
const maxPrice = document.querySelector('.progressbar-max')
const rangeInput = document.querySelectorAll(".range-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;
maxPrice.textContent = rangeInput[1].value
minPrice.textContent = rangeInput[0].value

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        maxPrice.textContent = rangeInput[1].value
        minPrice.textContent = rangeInput[0].value
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

