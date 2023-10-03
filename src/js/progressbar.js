const slider = document.querySelector('.price-progressbar');
const progressBar = document.querySelector('.progress-bar');
const minPrice = document.querySelector('.progressbar-min')

slider.addEventListener('input', () => {
    minPrice.textContent = slider.value
});
