calcSum = () => {
    let firstNumber = document.getElementById('first_num').value;
    let secondNumber = document.getElementById('second_num').value;
    let sum = (+firstNumber + +secondNumber);
    document.getElementById('result').value = sum;
}

calcDiff = () => {
    let firstNumber = document.getElementById('first_num').value;
    let secondNumber = document.getElementById('second_num').value;
    let diff = (+firstNumber - +secondNumber);
    document.getElementById('result').value = diff;
}

calcMultipl = () => {
    let firstNumber = document.getElementById('first_num').value;
    let secondNumber = document.getElementById('second_num').value;
    let multiple = (+firstNumber * +secondNumber);
    document.getElementById('result').value = multiple;
}
calcPortion = () => {
    let firstNumber = document.getElementById('first_num').value;
    let secondNumber = document.getElementById('second_num').value;
    let portion = (+firstNumber / +secondNumber);
    if (+secondNumber === 0) {
        document.getElementById('result').value = "На ноль делить нельзя!";
    } else {
        document.getElementById('result').value = portion;
    }

}