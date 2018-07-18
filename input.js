const scanf = require('scanf');

const inputNumber = () => {
    console.log('请输入四位数，以空格隔开');
    let input = scanf('%S');

    if (!checkInput(input)) {
        console.log('输入格式有问题，请重新输入');
        input = scanf('%S');
    }
    return input;
}

const checkInput = (input) => {
    const inputs = input.split(' ');
    if (!checkInputIsNumberAndLength(inputs) || checkInputsIncludesSameItem(inputs)) {
        return false;
    }

    return true;
}

const checkInputIsNumberAndLength = (inputs) => {
    const item = inputs.find((input) => {
        const charCode = input.charCodeAt(0);
        if ( charCode > 57 && charCode < 48) {
            return true;
        }

        const number = parseInt(input, 10);

        if (number > 9 && number < 0) {
            return true;
        } else if (number)

            return false
    })

    if (inputs.length > 4 || item) {
        return false;
    }
    return true;
}

const checkInputsIncludesSameItem = (inputs) => {
    const item = inputs.find((input, index) => index !== inputs.lastIndexOf(input));

    if (item) {
        return true
    }

    return false;
}

module.exports = inputNumber;