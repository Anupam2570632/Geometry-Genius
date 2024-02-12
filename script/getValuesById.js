function getValuesById(element) {
    const inputItem = document.getElementById(element);
    const inputText = inputItem.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}