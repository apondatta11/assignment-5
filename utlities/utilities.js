function getInputValueByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}
function setInnerTextByIDandValue(id,value) {
    document.getElementById(id).innerText = value;
}