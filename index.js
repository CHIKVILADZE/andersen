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

// Array.prototype.myFilter = function (callback, thisArg) {
//   let result = [];
//   let arr = this;

//   for (let i = 0; i < arr.length; i++) {
//     if (i in arr) {
//       if (callback.call(thisArg, arr[i], i, arr)) {
//         result.push(arr[i]);
//       }
//     }
//   }
//   return result;
// };

// const numbers = [1, 4, 11, 15, 33, 38, 42, 78];
// const evenNumbers = numbers.myFilter(function (item) {
//   return item % 2 === 0;
// });
// console.log(evenNumbers);

// Task 2

// const originalAlert = alert;
// const originalConfirm = confirm;
// const originalPrompt = prompt;

// window.alert = originalConfirm;
// window.confirm = originalPrompt;
// window.prompt = originalAlert;

// alert("Confirm!!!");
// confirm("Prompt!!!");
// prompt("Alert!!!");

//        LECTURE 3 (Objects. Loops. Arrays)

// Task 1

const myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]: function () {
    if (typeof this.from !== "number" || typeof this.to !== "number") {
      throw new Error("from and to must be numbers");
    }

    if (this.to < this.from) {
      throw new Error("to must be greater than or equal to from");
    }

    let current = this.from;
    const last = this.to;

    const next = () => {
      if (current <= last) {
        return { done: false, value: current++ };
      } else {
        return { done: true };
      }
    };

    return { next };
  },
};

for (let item of myIterable) {
  console.log(item);
}

//  Task 2

function getPersons(name, age) {
  //  Standard object literal
  const person1 = {
    name,
    age,
  };

  //  Using Object.assign to copy properties
  const person2 = Object.assign({}, { name, age });

  //  Using Object.create with prototype
  const prototype = { name: "", age: 0 };
  const person3 = Object.create(prototype);
  person3.name = name;
  person3.age = age;

  //  Using a constructor function
  function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
  }
  const person4 = new PersonConstructor(name, age);

  //Using class syntax
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const person5 = new PersonClass(name, age);

  return [person1, person2, person3, person4, person5];
}

const persons = getPersons("John Doe", 30);
console.log(persons);
