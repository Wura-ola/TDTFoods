// function truncateSlice(argument) {
//   if (typeof argument === "string") {
//     return `${argument.slice(-10)}...`;
//   } else {
//     console.log("Hello world");
//   }
// }
// console.log(truncateSlice("seunaeeeerre uhuhugbvj"));

// function isPalindrome(argument) {
//   let arg = argument.toLowerCase();
//   if (typeof arg === "string") {
//     if (arg === arg.split("").reverse().join("")) return true;
//     else {
//       return false;
//     }
//   }
//   return arg;
// }
// console.log(isPalindrome("level"));

// function capitalize(str) {
//   if (typeof str === "string") {
//     return str[0].toUpperCase() + str.slice(1);
//   } else {
//     return str;
//   }
// }

const colors = ["red", "green", " yellow", " blue", " orange"];
let i = 2;
let len = colors.length;
let text = "";

for (; i < len; i++) {
  text += colors[i];
}
console.log(text);
