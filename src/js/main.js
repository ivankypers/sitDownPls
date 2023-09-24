const element = document.querySelector('select');
const choices = new Choices(element, {
    placeholder: false,
    itemSelectText: '',
    noResultsText: 'Нет результатов',
});
