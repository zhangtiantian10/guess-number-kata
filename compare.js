const inputNumber = require('./input');

const compareInputAnswer = (input, answer = "1 2 3 4") => {
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

console.log(compareInputAnswer(inputNumber()));