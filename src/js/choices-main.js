const headerUpperChoices = document.querySelector('select');
const choicesUpper = new Choices(headerUpperChoices, {
    placeholder: false,
    itemSelectText: '',
    noResultsText: 'Нет результатов',
});

const headerBottomChoices = document.querySelector('#categoryChoice');
const choicesBottom = new Choices(headerBottomChoices, {
    placeholder: false,
    itemSelectText: '',
    noResultsText: 'Нет результатов',
    searchEnabled: false,
});
