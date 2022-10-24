
let inputArray = document.querySelectorAll('.form__input');
let numArray = generateRandom();
// by reference or value? = by ref
// slice map filter by value
// let numArrayClone = numArray.slice();

// inputArray.forEach(
//     (inputItem) => {
//         let index = null;
//         while(!numArray[index]){
//             index = Math.floor(Math.random() * numArray.length);
//         }
//         inputItem.value = numArray[index]
//         numArray.splice(index);
// })

// function arrayTunnle(){

// }


tunnelArray();

function tunnelArray() {
    inputArray.forEach((item, index) => {
        let num = numArray[index];
        fire(item,num);
    })
}

function fire(txtBox,upUntil,startFrom=0) {
    let counts = setInterval(updated);
    let initial = startFrom;
    function updated() {
        txtBox.value = ++initial;
        if (initial === upUntil) {
            clearInterval(counts);
        }
    }
}

function freeze(txtBox,startFrom,upUntil=0) {
    let counts = setInterval(updated);
    let initial = startFrom;
    function updated() {
        debugger;
        txtBox.value = --initial;
        if (initial === upUntil) {
            clearInterval(counts);
        }
    }
}

function generateRandom(howMany = inputArray.length,
    arrayToPopulate = [],
    upperLimit = 100) {
    for (let i = 0; i < howMany; i++) {
        let randomNumber = Math.floor(Math.random() * upperLimit);
        randomNumber < 1? ++randomNumber : randomNumber
        arrayToPopulate.push(randomNumber);
    }
    return arrayToPopulate;
}

let ascbtn = document.getElementById('ascbtn');
let descbtn = document.getElementById('descbtn');
let resetbtn = document.getElementById('resetbtn');

ascbtn.addEventListener('click', (e) => {
    // let before = numArray.slice();
    // let after = numArray.sort((a, b) => a - b);
    numArray.sort((a, b) => a - b)
    // advancedTunnelArray(after,before);
    tunnelArray();
})

descbtn.addEventListener('click', (e) => {
    numArray.sort((a, b) => b - a)
    tunnelArray();
})

resetbtn.addEventListener('click', (e) => {
    numArray = generateRandom();
    tunnelArray();
})

function advancedTunnelArray(after,before){
    inputArray.forEach((item, index) => {
        let numberAfter = after[index];
        let numberBefore = before[index];
        debugger
        if(numberAfter < numberBefore){
            freeze(item,after[index]);
        }else if(numberAfter > numberBefore){
            fire(item,after[index]);
        }else{
            console.log("fucking draw");
        }

        
    })
}
