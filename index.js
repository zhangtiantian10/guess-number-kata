const compareInputAnswer = require('./compare');
const inputNumber = require('./input');
const generateAnswer = require('./answer');

const guessNumber =() => {
    let i = 0;
    const answer = generateAnswer();
    console.log('请输入四位数，以空格隔开');

    while (i < 6) {
        const input = inputNumber();
        const result = compareInputAnswer(input, answer);
        console.log(result);

        if (result === '4A0B') {
            console.log('Success!');
            return;
        }

        i++;
    }

    console.log('Failure')
}

guessNumber();