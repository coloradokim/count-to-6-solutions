let input = process.argv.slice(2);
let result = input.map(item => item[0]).reduce((accumulator, letter) => accumulator + letter, '')
console.log(`[${input}] becomes \"${result}\"`);
