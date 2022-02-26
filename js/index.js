/*calcSum = () => {
    let firstNumber = document.getElementById('first_num').value;
    let secondNumber = document.getElementById('second_num').value;
    let sum = (+firstNumber + +secondNumber);
    document.getElementById('first_num').value = '';
    document.getElementById('second_num').value = '';
    document.getElementById('result').value = sum;
}

calcDiff = () => {
    let firstNumber = document.getElementById('first_num').value;
    let secondNumber = document.getElementById('second_num').value;
    document.getElementById('first_num').value = '';
    document.getElementById('second_num').value = '';
    let diff = (+firstNumber - +secondNumber);
    document.getElementById('result').value = diff;
}

calcMultipl = () => {
    let firstNumber = document.getElementById('first_num').value;
    let secondNumber = document.getElementById('second_num').value;
    document.getElementById('first_num').value = '';
    document.getElementById('second_num').value = '';
    let multiple = (+firstNumber * +secondNumber);
    document.getElementById('result').value = multiple;
}
calcPortion = () => {
    let firstNumber = document.getElementById('first_num').value;
    let secondNumber = document.getElementById('second_num').value;
    document.getElementById('first_num').value = '';
    document.getElementById('second_num').value = '';
    let portion = (+firstNumber / +secondNumber);
    if (+secondNumber === 0) {
        document.getElementById('result').value = "На ноль делить нельзя!";
    } else {
        document.getElementById('result').value = portion;
    }

}*/

class Calculator {
    static calcSum(firstNumber, secondNumber) {
        document.getElementById('first_num').value = '';
        document.getElementById('second_num').value = '';
        let sum = (+firstNumber + +secondNumber);
        document.getElementById('result').value = sum;
        return sum;
    }
    static calcDiff(firstNumber, secondNumber) {
        document.getElementById('first_num').value = '';
        document.getElementById('second_num').value = '';
        let diff = (+firstNumber - +secondNumber);
        document.getElementById('result').value = diff;
        return diff;
    }
    static calcMultipl(firstNumber, secondNumber) {
        document.getElementById('first_num').value = '';
        document.getElementById('second_num').value = '';
        let multiple = (+firstNumber * +secondNumber);
        document.getElementById('result').value = multiple;
    }
    static calcPortion(firstNumber, secondNumber) {
        document.getElementById('first_num').value = '';
        document.getElementById('second_num').value = '';
        let portion = (+firstNumber / +secondNumber);
        if (+secondNumber === 0) {
            document.getElementById('result').value = "На ноль делить нельзя!";
        } else {
            document.getElementById('result').value = portion;
        }
    }
}
//let firstNumber = document.getElementById('first_num').value;
//let secondNumber = document.getElementById('second_num').value;
sum.addEventListener('click', () => { Calculator.calcSum(document.getElementById('first_num').value, document.getElementById('second_num').value) });
diff.addEventListener('click', () => { Calculator.calcDiff(document.getElementById('first_num').value, document.getElementById('second_num').value) });
multiple.addEventListener('click', () => { Calculator.calcMultipl(document.getElementById('first_num').value, document.getElementById('second_num').value) });
portion.addEventListener('click', () => { Calculator.calcPortion(document.getElementById('first_num').value, document.getElementById('second_num').value) });