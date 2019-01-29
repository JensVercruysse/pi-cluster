console.log('hello world')
document.addEventListener('DOMContentLoaded', () => {
    M.updateTextFields();
    const button = document.getElementById('enter')
    button.addEventListener('click', checkDoku)
})
const checkDoku = function () {
    let dokuarr = [[], [], [], [], [], [], [], [], []]
    for (let i = 0; i < 9; i++) {
        if (checkelm(i)) {
            fillarray(dokuarr, i)
        }
    }
}



const fillarray = function (arr, row) {   // vult de array in met de gegeven gegvens
    let I = 'I' + row
    const input = document.getElementById(I).value
    for (let i = 0; i < 9; i++) {
        arr[row][i] = input.charAt(i);
    }
    console.log(arr)
}
const checknum = function (input, O) {    // check of dat er geen charachters in zitten
    for (let i = 0; i < input.length; i++) {
        if (!checknum1(input, i)) {
            let rwite = document.getElementById(O)
            text = rwite.querySelector('p')
            text.textContent = 'only numbers'
            text.style.backgroundColor = "red"
            return false
        }
    }
    return true
}
const checknum1 = function (input, j) {    // check als het gegeven charachter een nummer is
    for (let i = 0; i < 10; i++) {
        if (input.charAt(j) == i) {
            return true
        }
    }
    return false
}
const checkelm = function (i) { // checkt of het gegeven waarde in een array mag gestoken worden
    let I = 'I' + i
    let O = 'O' + i
    const input = document.getElementById(I).value
    if (input.length != 9) {     // checkt of het charachter count 9 is verandert de lay out als nodig is
        let rwite = document.getElementById(O)
        text = rwite.querySelector('p')
        text.textContent = 'needs 9 numbers'
        text.style.backgroundColor = "red"
        return false
    }
    else {
        let rwite = document.getElementById(O)
        rwite = rwite.querySelector('p')
        rwite.textContent = ''
        rwite.style.backgroundColor = "transparent"
        return checknum(input, O)
    }
}

