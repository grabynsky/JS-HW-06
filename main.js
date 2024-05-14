// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const arrLength = ['hello world', 'lorem ipsum', 'javascript is cool'];

arrLength.forEach(item => {
    console.log(`Length ${item} - `, item.length);
});
console.log('--------------------');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

arrLength.forEach(item => console.log(item.toUpperCase()));
console.log('--------------------');

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

arrLength.forEach(item => console.log(item.toLowerCase()));
console.log('--------------------');

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(`Length ${str} -`, str.length);
console.log(`Length ${str.trim()} - `, str.trim().length);
console.log('--------------------');

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні';

const stringToArray = (str, symbol) => {
    return str.split(symbol);
}

console.log(stringToArray(str2, ' '));
console.log('--------------------');

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
/////////////////////////////////////////////////////
// console.log(arrNum);
// const arrNumStr = [];
// arrNum.map(num => arrNumStr.push(`${num}`));
// console.log(arrNumStr);
////////////////////////////////////////////////////
console.log(arrNum);
const strNumbers = arrNum.map(num => num.toString());
console.log(strNumbers);
console.log('--------------------');

// - створити функцію sortNums(direction),
// яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];
const sortNums = (arr, direction) => {
    switch (direction) {
        case 'ascending':
            return arr.sort((a, b) => a - b);

        case 'descending':
            return arr.sort((a, b) => b - a);
    }
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log('========================');

const sortArrCoursesAndDurationArray = [...coursesAndDurationArray];

let sortMonthDuration = sortArrCoursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});

console.log(sortMonthDuration);

console.log('--------------------');


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterMonthDuration = coursesAndDurationArray.filter(month => month.monthDuration > 5);
console.log(filterMonthDuration);
console.log('--------------------');

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let newCoursesAndDurationArray = coursesAndDurationArray.map((item, index) => {
    return {
        id: index + 1,
        title: item.title,
        monthDuration: item.monthDuration,
    }
});
console.log(newCoursesAndDurationArray);
console.log('========================');

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

const deck = [];

const suits = ['spades', 'diamonds', 'hearts', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

for (const suit of suits) {
    for (const value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: suit === 'diamonds' || suit === 'hearts' ? 'red' : 'black'
        });
    }
}

console.log(deck);
console.log('--------------------');

// - знайти піковий туз
const peakAce = deck.find(card => card.cardSuit === 'spades' && card.value === 'ace');
console.log("Піковий туз:", peakAce);
console.log('--------------------');

// - всі шістки
const sixes = deck.filter(card => card.value === '6');
console.log("Всі шістки:", sixes);
console.log('--------------------');

// - всі червоні карти
const redCards = deck.filter(card => card.color === 'red');
console.log("Всі червоні карти:", redCards);
console.log('--------------------');

// - всі буби
const diamonds = deck.filter(card => card.cardSuit === 'diamonds');
console.log("Всі буби:", diamonds);
console.log('--------------------');

// - всі трефи від 9 та більше
const highTrefoils = deck.filter(card => card.cardSuit === 'clubs' && !(parseInt(card.value) < 9));
console.log("Всі трефи від 9 та більше:", highTrefoils);
console.log('--------------------');
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const groupedDeck = deck.reduce((grouped, card) => {

    grouped[card.cardSuit].push(card);

    return grouped;

}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log("Карти по мастях:", groupedDeck);
console.log('========================');
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const newCoursesArray = (arr, key) => arr.filter(item => item.modules.includes(key));

console.log(newCoursesArray(coursesArray, 'sass'));
console.log(newCoursesArray(coursesArray, 'docker'));