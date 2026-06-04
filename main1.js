// 1
let name = prompt("Ismingiz:");
let age = prompt("Yoshingiz:");
console.log("Ism:", name, "Yosh:", age);
// 2
let a = +prompt("Uzunlik:");
let b = +prompt("Eni:");
console.log("Yuza:", a * b);
// 3
let r = +prompt("Radius:");
console.log("Aylana uzunligi:", 2 * Math.PI * r);
// 4
let n = +prompt("Son kiriting:");
if (n % 2 === 0) {
  console.log("Juft");
} else {
  console.log("Toq");
}
// 5
let x = +prompt("Son kiriting:");
if (x > 0) {
  console.log("Musbat");
} else if (x < 0) {
  console.log("Manfiy");
} else {
  console.log("Nol");
}
// 6
let num1 = +prompt("1-son:");
let num2 = +prompt("2-son:");
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log("Almashtirildi:", num1, num2);
// 7
let a1 = +prompt("1-son:");
let b1 = +prompt("2-son:");
let c1 = +prompt("3-son:");
let max = a1;
if (b1 > max) max = b1;
if (c1 > max) max = c1;
console.log("Eng katta:", max);
// 8
let k = +prompt("Son:");
if (k % 3 === 0 && k % 5 === 0) {
  console.log("3 ga ham 5 ga ham bo'linadi");
} else {
  console.log("Bo'linmaydi");
}
// 9
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
// 10
let N = +prompt("N:");
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
}
console.log("Yig'indi:", sum);
// 11
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}
// 12
let N2 = +prompt("N:");
let kop = 1;
for (let i = 1; i <= N2; i++) {
  kop *= i;
}
console.log("Ko'paytma:", kop);
// 13
let N3 = +prompt("N:");
let count = 0;
for (let i = 1; i <= N3; i++) {
  if (i % 2 === 0) count++;
}
console.log("Juftlar soni:", count);
// 14
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) console.log(i);
}
// 15
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));
// 16
function square(n) {
  return n ** 2;
}
console.log(square(4));
// 17
function cube(n) {
  return n ** 3;
}
console.log(cube(3));
// 18
let arr = [1,4,8,9,10,32,22,45];
let sumArr = 0;
for (let i = 0; i < arr.length; i++) {
  sumArr += arr[i];
}
console.log("Yig'indi:", sumArr);
// 19
let maxArr = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxArr) {
    maxArr = arr[i];
  }
}
console.log("Max:", maxArr);
// 20
let evenArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArr.push(arr[i]);
  }
}
console.log("Juft massiv:", evenArr);