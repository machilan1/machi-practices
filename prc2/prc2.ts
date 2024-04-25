const main = () => {
  printResult();
};

//Question 1 - Implement a function that takes an array of numbers and returns an array with each number doubled.
// eg. [1, 2, 3, 4, 5] => [2, 4, 6, 8, 10]
function double(data: number[]) {
  //TODO:  your implementation here
}

//Question 2 - Implement a function that takes an array of numbers and returns an array with each number squared.
// eg. [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]

function square(data: number[]) {
  //TODO:  your implementation here
}

//Question 3 - Implement a function that takes an array of numbers and return an array of same length with all values being zero.
// eg. [1, 2, 3, 4, 5] => [0, 0, 0, 0, 0]

function toZero(data: number[]) {
  //TODO:  your implementation here
}

//Question 4 - Implement a function that takes an array of numbers and returns an array of strings representing the numbers.
// eg. [1, 2, 3, 4, 5] => ['1', '2', '3', '4', '5']

function toString(data: number[]) {
  //TODO:  your implementation here
}

//Question 5 - Implement a function that takes an array of numbers and returns an array of object.
// eg. [1, 2, 3, 4, 5] => [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]

function toObject(data: number[]): { value: number }[] | void {
  //TODO:  your implementation here
}

//Question 6 - Implement a function that takes an array of numbers and returns an array of object.
// eg. [1, 2, 3, 4, 5] => [{value: 1, index: 0}, {value: 2, index: 1}, {value: 3, index: 2}, {value: 4, index: 3}, {value: 5, index: 4}]

function toObjectWithIndex(
  data: number[]
): { value: number; index: number }[] | void {
  //TODO:  your implementation here
}

//Question 7 - Implement a function that takes an array of numbers ( 0 <= n <= 9) and returns an array of strings of the numbers.
// eg. [1, 2, 3, 4, 5] => ['one', 'two', 'three', 'four', 'five']

function toWord(data: number[]): string[] | void {
  //TODO:  your implementation here
}

//Question 8 - Implement a function that takes an array of strings and prefix 'I LOVE ' to each string.
// eg. ['bacon', 'cheese', 'chocolate'] => ['I LOVE bacon', 'I LOVE cheese', 'I LOVE chocolate']

function toLove(data: string[]): string[] | void {
  //TODO:  your implementation here
}

// Question 9 - Implement a function that takes an array of strings and returns an array of object.
// eg. ['bacon', 'cheese', 'chocolate'] => [{name: 'bacon'}, {name: 'cheese'}, {name: 'chocolate'}]

function toObjectWithName(data: string[]): { name: string }[] | void {
  //TODO:  your implementation here
}

// Question 10 - Implement a function that takes an array of <string[]> and returns first element of each <string[]> as an array of string.
// eg. [['bacon', 'cheese'], ['chocolate', 'milk']] => ['bacon', 'chocolate']

function firstElement(data: string[][]): string[] | void {
  //TODO:  your implementation here
}

//Question 11 - Implement a function that takes an array of <string[]> and returns an array of object.
// eg. [['Monday', 'Rainy'], ['Tuesday', 'Sunny']] => [{weekday: 'Monday' , weather : 'Rainy'}, {weekday: 'Tuesday' , weather:'Sunny'}]

function toObjectWithWeather(
  data: string[][]
): { weekday: string; weather: string }[] | void {
  //TODO:  your implementation here
}

// Ignore this function
function printResult() {
  const data = [1, 2, 3, 4, 5];
  console.log(
    "--------------------------------------------------------------------------"
  );
  console.log("Question 1: expected output: [2, 4, 6, 8, 10]");
  console.log("Got ", double(data));
  console.log("Question 2: expected output: [1, 4, 9, 16, 25]");
  console.log("Got ", square(data));
  console.log("Question 3: expected output: [0, 0, 0, 0, 0]");
  console.log("Got ", toZero(data));
  console.log("Question 4: expected output: ['1', '2', '3', '4', '5]");
  console.log("Got ", toString(data));
  console.log(
    "Question 5: expected output: [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]"
  );
  console.log("Got ", toObject(data));
  console.log(
    "Question 6: expected output: [{value: 1, index: 0}, {value: 2, index: 1}, {value: 3, index: 2}, {value: 4, index: 3}, {value: 5, index: 4}]"
  );
  console.log("Got ", toObjectWithIndex(data));
  console.log(
    "Question 7: expected output: ['one', 'two', 'three', 'four', 'five']"
  );
  console.log("Got ", toWord(data));
  const data2 = ["bacon", "cheese", "chocolate"];
  console.log(
    "Question 8: expected output: ['I LOVE bacon', 'I LOVE cheese', 'I LOVE chocolate']"
  );
  console.log("Got ", toLove(data2));
  console.log(
    "Question 9: expected output: [{name: 'bacon'}, {name: 'cheese'}, {name: 'chocolate'}]"
  );
  console.log("Got ", toObjectWithName(data2));
  const data3 = [
    ["bacon", "cheese"],
    ["chocolate", "milk"],
  ];
  console.log("Question 10: expected output: ['bacon', 'chocolate']");
  console.log("Got ", firstElement(data3));
  console.log(
    "Question 11: expected output: [{weekday: 'Monday' , weather : 'Rainy'}, {weekday: 'Tuesday' , weather:'Sunny'}]"
  );
  console.log("Got ", toObjectWithWeather(data3));

  console.log(
    "--------------------------------------------------------------------------"
  );
}

main();
