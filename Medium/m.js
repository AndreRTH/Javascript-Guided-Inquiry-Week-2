// Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

let userInput = parseInt(prompt('Please input a number'));
let month;


switch (userInput) {
    case 1:
        month = 'January';
        console.log(`${month}`);
        break;
    case 2: 
        month = 'Febuary';
        console.log(`${month}`);
        break;
    case 3: 
        month = 'March';
        console.log(`${month}`);
        break;
    case 4: 
        month = 'April';
        console.log(`${month}`);
        break;
    case 5: 
        month = 'May';
        console.log(`${month}`);
        break;
    case 6:
        month = 'June';
        console.log(`${month}`);
        break;
    case 7: 
        month = 'July'
        console.log(`${month}`);;
        break;
    case 8:
        month = 'August';
        console.log(`${month}`);
        break;
    case 9: 
        month = 'September';
        console.log(`${month}`);
        break;
    case 10: 
        month = 'October';
        console.log(`${month}`);
        break;
    case 11: 
        month = 'November';
        console.log(`${month}`);
        break;
    case 12: 
        month = 'December';
        console.log(`${month}`);
        break; 
    default: 
        console.log('Please input a valid input');
        break;
}

