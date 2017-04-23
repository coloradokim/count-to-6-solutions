function greetAndLowercase(string) {
    if (process.argv[2] === undefined) {
    string = string
  } else string = process.argv[2];
  return `Hello, ${string}!
Your name lowercased is "${string.toLowerCase()}".`
}

console.log(greetAndLowercase('Domenic'));
