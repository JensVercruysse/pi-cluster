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
    if (checkallarr()) {
        if(checkarr(dokuarr)){
            const place = document.getElementById('out')
            const message = document.createElement('p')
            message.textContent='sudoku is correct'
            message.style.backgroundColor="green"
            message.style.fontSize="200%"
            message.style.color="white"
            place.appendChild(message)
        }
    }
}

let ifdokufalse = function (arr, array) {
    clearList()
    console.log(array[1]+'  '+ array[2])
    for (let i = 0; i < 9; i++) {
        const row = document.createElement('tr')
        const idrow = document.querySelector('#playersList table')

        for (let j = 0; j < 9; j++) {
            const int = document.createElement('td')
            int.textContent = arr[i][j]
            if (array[3] === 0) {
                if (array[1] === i) {
                    int.style.backgroundColor = "red"
                    int.style.color="white"
                }
            }
            else if (array[3] === 1) {
                if (array[2] === j) {
                    int.style.backgroundColor = "red"
                    int.style.color="white"
                }
            }
            else if (array[3] === 2) {
               if (lessthen(array[2],j)){
                   if(lessthen(array[1],i)){
                    int.style.backgroundColor = "red"
                    int.style.color="white"
                    
                   }
               }

            }
            row.appendChild(int)



        }
        idrow.appendChild(row)
    }
}

const checkarr = function (arr) {
    for (let i = 0; i < 9; i++) {
        let array = checkhori(arr, i)
        if (array[0] === 0) {
            ifdokufalse(arr, array)
            return false
        }
    }
    for (let i = 0; i < 9; i++) {
        let array = checkvert(arr, i)
        if (array[0] === 0) {
            ifdokufalse(arr, array)
            return false
        }
    }
    for (let i = 0; i < 9; i++) {
        let array = checkcros(arr, i)
        if (array[0] === 0) {
            ifdokufalse(arr, array)
            return false
        }
    }
    return true
}

const lessthen = function (to,comp) {
    switch (to) {
        case 0:
        if(comp<3){
            return true
        }
        return false
        case 1:
        if((comp<6)&&(comp>2)){
            return true
        }
        return false
        case 2:
        if((comp<9)&&(comp>5)){
            return true
        }
        return false
        default:
            break;
    }
}
const checkhori = function (arr, r) {
    let temp = []
    temp[0] = arr[r][0]

    for (let i = 1; i < 9; i++) {
        for (let j = 0; j < temp.length; j++) {
            if (arr[r][i] === temp[j]) {

                return [0, r, i, 0]
            }
        }
        temp[temp.length] = arr[r][i]
    }
    return true
}
const checkvert = function (arr, r) {
    let temp = []
    temp[0] = arr[0][r]

    for (let i = 1; i < 9; i++) {
        for (let j = 0; j < temp.length; j++) {
            if (arr[i][r] === temp[j]) {


                return [0, i, r, 1]
            }
        }
        temp[temp.length] = arr[i][r]
    }
    return true
}
const checkcros = function (arr, r) {
    let temp = []
    let a = Math.floor(0 / 3) + Math.floor(3 * Math.floor(r / 3))
    let b = Math.floor(0 % 3) + Math.floor(3 * (r % 3))
    temp[0] = arr[a][b]
    for (let i = 1; i < 9; i++) {
        for (let j = 0; j < temp.length; j++) {
            a = Math.floor(i / 3) + Math.floor(3 * Math.floor(r / 3))
            b = Math.floor(i % 3) + Math.floor(3 * (r % 3))
            if (temp[j] === arr[parseInt(a)][parseInt(b)]) {
                return [0,Math.floor(r/3),(r%3), 2]
            }
        }
        a = Math.floor(i / 3) + Math.floor(3 * Math.floor(r / 3))
        b = Math.floor(i % 3) + Math.floor(3 * (r % 3))
        temp[temp.length] = arr[parseInt(a)][parseInt(b)]
    }
    return true
}





const fillarray = function (arr, row) {   // vult de array in met de gegeven gegvens
    let I = 'I' + row
    const input = document.getElementById(I).value
    for (let i = 0; i < 9; i++) {
        arr[row][i] = input.charAt(i);
    }
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
const checkallarr = function () { // check of alle inputs correct zijn
    for (let i = 0; i < 9; i++) {
        if (!checkelm(i)) {
            return false
        }
    }
    return true
}
const clearList = function () {
    const rows = document.querySelectorAll('#playersList table tr')
    rows.forEach((row, index) => {
        row.remove()

    })
}



