//          LECTURE 1 (Basic Concepts, GIT)

// Task 1

// console.log(`Out${typeof (8 / 2)}`);
// console.log(`${typeof (8 / 2)}less`);
// console.log(`${16 / 8} Pac`);
// console.log(`Non${undefined / 4}nual`);
// console.log(`${typeof []}ivity`);

// // Task 2

// console.log((35).toString(2));
// console.log((23).toString(2));
// console.log((9878).toString(2));

//        LECTURE 2 (Functions, Data Structures)

// Task 1

Array.prototype.myFilter = function (callback, thisArg) {
  let result = [];
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }
  return result;
};

const numbers = [1, 4, 11, 15, 33, 38, 42, 78];
const evenNumbers = numbers.myFilter(function (item) {
  return item % 2 === 0;
});
console.log(evenNumbers);

// Task 2

const originalAlert = alert;
const originalConfirm = confirm;
const originalPrompt = prompt;

window.alert = originalConfirm;
window.confirm = originalPrompt;
window.prompt = originalAlert;

alert("Confirm!!!");
confirm("Prompt!!!");
prompt("Alert!!!");
