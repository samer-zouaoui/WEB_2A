let string1 = "abc";
let string2 = "de";

let result = [];

for (let char1 of string1) {
  for (let char2 of string2) {
    result.push(char1 + char2);
  }
}

console.log(result);