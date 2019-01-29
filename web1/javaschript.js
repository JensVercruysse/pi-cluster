console.log('hello world')
document.addEventListener('DOMContentLoaded', () => {
    M.updateTextFields();
    const button = document.getElementById('enter')
    button.addEventListener('click', checkDoku)
})
const checkDoku = function () {
    for (let i = 0; i < 9; i++) {
        if (checkelm(i)) {
            console.log('testfunctieinif')
        }
    }
}
const checknum = function (input) {
    for (let j = 0; j < input.length; j++) {
        for (let i = 0; i < 10; i++){
            if (input.charAt(j) == i) {
                console.log('true')
                return true
            }
        }
    }
    console.log('false')
    return false
}
const checkelm = function (i) {
    let I = 'I' + i
    let O = 'O' + i
    const input = document.getElementById(I).value
    if (input.length != 9) {
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
        return checknum(input)
    }
}