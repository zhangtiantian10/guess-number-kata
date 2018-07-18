const inputNumber = require('./input');
const generateAnswer = require('./answer');

const compareInputAnswer = (input, answer) => {
    const inputs = input.split(' ');
    const answers = answer.split(' ');

    let positionCount = comparePosition(inputs, answers);
    let includeCount = including(inputs, answers);

    return `${positionCount}A${includeCount - positionCount}B`;
}

const comparePosition = (inputs, answers) => {
    return inputs.filter((input, index) => answers[index] === input).length;
}

const including = (inputs, answers) => {
    return inputs.filter(input => answers.includes(input)).length;
}

console.log(compareInputAnswer(inputNumber(), generateAnswer()));