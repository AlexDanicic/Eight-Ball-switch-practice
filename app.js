// Not important, but the user can put the name inside
let userName = "Alex";
// ternary operator for welcome the username by name or without

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

const userQuestion = "Can I get that discount for today?";
console.log(`The ${userName} asked: ${userQuestion}`);

// generate a random number between 0-7

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch (randomNumber) {
    case 1:
        eightBall = 'It is certain';
        break;
    case 2:
        eightBall = 'It is decidedly so';
        break;
    case 3:
        eightBall = 'Reply hazy try again';
        break;
    case 4:
        eightBall = 'Cannot predict now';
        break;
    case 5:
        eightBall = 'Do not count on it';
        break;
    case 6:
        eightBall = 'My sources say no';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    case 8:
        eightBall = 'Signs point to yes';
        break;
}

console.log(eightBall);