// //! 1
// let num = Number(window.prompt("Enter a number:"));
// console.log(num);
// ========

// //! 2
// num = Number(window.prompt("Enter a number:"));
// if (num % 3 === 0 && num % 4 === 0) {
//     console.log("yes");
// } else {
//     console.log("no");
// }
// ========

// //! 3
// num = Number(window.prompt("Enter the first number:"));
// let num2 = Number(window.prompt("Enter the second number:"));
// if (num > num2) {
//     console.log(num);
// } else {
//     console.log(num2);
// }
// ========

// //! 4
// num = Number(window.prompt("Enter a number:"));
// if (num < 0) {
//     console.log("negative");
// } else {
//     console.log("positive");
// }
// ========

// //! 5
// num = Number(window.prompt("Enter the first number:"));
// num2 = Number(window.prompt("Enter the second number:"));
// let num3 = Number(window.prompt("Enter the third number:"));
// let maxNum = num;
// let minNum = num;

// if (num2 > maxNum) maxNum = num2;
// if (num3 > maxNum) maxNum = num3;

// if (num2 < minNum) minNum = num2;
// if (num3 < minNum) minNum = num3;

// console.log("Max element =", maxNum);
// console.log("Min element =", minNum);
// ========

// //! 6
// num = Number(window.prompt("Enter a number:"));
// if (num % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }
// ========

// //! 7
// let char = window.prompt("Enter a character:").toLowerCase();
// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     console.log("vowel");
// } else {
//     console.log("consonant");
// }
// ========

// //! 8
// num = Number(window.prompt("Enter a number:"));
// let count = 1;
// let result = "";
// while (count <= num) {
//     result += count + " ";
//     count++;
// }
// console.log(result.trim());
// ========

// //! 9
// num = Number(window.prompt("Enter a number:"));
// for (let i = 1; i <= 12; i++) {
//     console.log(num * i);
//     ;
// }
// ========

// //! 10
// num = Number(window.prompt("Enter a number:"));
// for (let i = 2; i <= num; i += 2) {
//     console.log(i);
// }
// ========

// //! 11
// num = Number(window.prompt("Enter the base number:"));
// let exponent = Number(window.prompt("Enter the exponent:"));
// let result = 1;
// for (let i = 0; i < exponent; i++) {
//     result *= num;
// }
// console.log(result);
// ========

// //! 12
// num = Number(window.prompt("Enter marks for subject 1:"));
// num2 = Number(window.prompt("Enter marks for subject 2:"));
// num3 = Number(window.prompt("Enter marks for subject 3:"));
// let num4 = Number(window.prompt("Enter marks for subject 4:"));
// let num5 = Number(window.prompt("Enter marks for subject 5:"));

// let totalMarks = num + num2 + num3 + num4 + num5;
// let averageMarks = totalMarks / 5;
// let percentage = (totalMarks / 500) * 100;

// console.log("Total marks =", totalMarks);
// console.log("Average marks =", averageMarks);
// console.log("Percentage =", percentage);
// ========

// //! 13
// num = Number(window.prompt("Enter month number:"));
// if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) {
//     console.log("Days in Month: 31");
// } else if (num == 4 || num == 6 || num == 9 || num == 11) {
//     console.log("Days in Month: 30");
// } else if (num == 2) {
//     console.log("Days in Month: 28 or 29");
// } else {
//     console.log("Invalid month number");
// }
// ========

// //! 14
// num = Number(window.prompt("Enter Physics marks:"));
// num2 = Number(window.prompt("Enter Chemistry marks:"));
// num3 = Number(window.prompt("Enter Biology marks:"));
// num4 = Number(window.prompt("Enter Mathematics marks:"));
// num5 = Number(window.prompt("Enter Computer marks:"));

// totalMarks = num + num2 + num3 + num4 + num5;
// percentage = (totalMarks / 500) * 100;
// let grade;

// if (percentage >= 90) grade = "A";
// else if (percentage >= 80) grade = "B";
// else if (percentage >= 70) grade = "C";
// else if (percentage >= 60) grade = "D";
// else if (percentage >= 40) grade = "E";
// else grade = "F";

// console.log("Percentage =", percentage + "%");
// console.log("Grade =", grade);
// ========

// //! 15
// num = Number(window.prompt("Enter month number:"));
// switch (num) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         console.log("Days in Month: 31");
//         break;
//     case 4: case 6: case 9: case 11:
//         console.log("Days in Month: 30");
//         break;
//     case 2:
//         console.log("Days in Month: 28 or 29");
//         break;
//     default:
//         console.log("Invalid month number");
// }
// ========

// //! 16
// let alphabet = window.prompt("Enter an alphabet:").toLowerCase();
// switch (alphabet) {
//     case "a": case "e": case "i": case "o": case "u":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }
// ========

// //! 17
// num = Number(window.prompt("Enter the first number:"));
// num2 = Number(window.prompt("Enter the second number:"));
// switch (true) {
//     case (num > num2):
//         console.log("Max:", num);
//         break;
//     case (num2 > num):
//         console.log("Max:", num2);
//         break;
//     default:
//         console.log("Both numbers are equal");
// }
// ========

// //! 18
// num = Number(window.prompt("Enter a number:"));
// switch (num % 2) {
//     case 0:
//         console.log("Even");
//         break;
//     case 1: case -1:
//         console.log("Odd");
//         break;
// }
// ========

// //! 19
// num = Number(window.prompt("Enter a number:"));
// switch (true) {
//     case (num > 0):
//         console.log("Positive");
//         break;
//     case (num < 0):
//         console.log("Negative");
//         break;
//     default:
//         console.log("Zero");
// }
// ========

// //! 20
// num = Number(window.prompt("Enter the first number:"));
// let operator = window.prompt("Enter an operator (+, -, *, /):");
// num2 = Number(window.prompt("Enter the second number:"));
// switch (operator) {
//     case "+":
//         console.log("Result:", num + num2);
//         break;
//     case "-":
//         console.log("Result:", num - num2);
//         break;
//     case "*":
//         console.log("Result:", num * num2);
//         break;
//     case "/":
//         if (num2 == 0) {
//             console.log("Error: Division by zero");
//         } else {
//             console.log("Result:", num / num2);
//         }
//         break;
//     default:
//         console.log("Invalid operator");
// }
