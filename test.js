// makeImportant("Hi", 5);             // => "Hi!!!!!"
// makeImportant("Hi");                // => "Hi!!"
// makeImportant("Hello?", undefined); // => "Hello?!!!!!!"

let test = (word, num = word.length) => {
  console.log(word);
  console.log(num);
};
console.log(test('hi', undefined));
