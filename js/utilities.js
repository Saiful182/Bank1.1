function getInputValueById(inputFieldId) {
    const inputFiled = document.getElementById(inputFieldId);
    const inputFiledString = inputFiled.value;
    const inputFiledValue = parseFloat(inputFiledString);

    inputFiled.value = '';
    return inputFiledValue;
}
function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const elementFieldValue = parseFloat(elementFieldString);
    return elementFieldValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}