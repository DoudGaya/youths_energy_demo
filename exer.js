// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };

// console.log(factorial(3));

let name = ["sufy", "daddy", "bansee"];

for (let i = 0; i < name.length; i++) {
  console.log("Hello " + name[i]);
}

function sufy() {
  console.log("KAI ARNE");
}

sufy();

let names = name.map(function (val) {
  return "Hello " + val;
});

console.log(names);
