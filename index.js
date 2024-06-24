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

// const myIterable = {
//   from: 1,
//   to: 43,
//   [Symbol.iterator]: function () {
//     if (typeof this.from !== "number" || typeof this.to !== "number") {
//       throw new Error("from and to must be numbers");
//     }

//     if (this.to < this.from) {
//       throw new Error("to must be greater than or equal to from");
//     }

//     let current = this.from;
//     const last = this.to;

//     const next = () => {
//       if (current <= last) {
//         return { done: false, value: current++ };
//       } else {
//         return { done: true };
//       }
//     };

//     return { next };
//   },
// };

// for (let item of myIterable) {
//   console.log(item);
// }

// //  Task 2

// function getPersons(name, age) {
//   //  Standard object literal
//   const person1 = {
//     name,
//     age,
//   };

//   //  Using Object.assign to copy properties
//   const person2 = Object.assign({}, { name, age });

//   //  Using Object.create with prototype
//   const prototype = { name: "", age: 0 };
//   const person3 = Object.create(prototype);
//   person3.name = name;
//   person3.age = age;

//   //  Using a constructor function
//   function PersonConstructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   const person4 = new PersonConstructor(name, age);

//   //Using class syntax
//   class PersonClass {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
//   const person5 = new PersonClass(name, age);

//   return [person1, person2, person3, person4, person5];
// }

// const persons = getPersons("John Doe", 30);
// console.log(persons);

//        LECTURE 4 (Prototypes. Introduction to classes)

// Task 1

// class Calculator {
//   constructor(x, y) {
//     this.validateNumber(x);
//     this.validateNumber(y);
//     this.x = x;
//     this.y = y;

//     this.logSum = this.logSum.bind(this);
//     this.logMul = this.logMul.bind(this);
//     this.logSub = this.logSub.bind(this);
//     this.logDiv = this.logDiv.bind(this);
//   }

//   validateNumber(num) {
//     if (typeof num !== "number" || !isFinite(num)) {
//       throw new Error("Invalid number");
//     }
//   }

//   setX(x) {
//     this.validateNumber(x);
//     this.x = x;
//   }

//   setY(y) {
//     this.validateNumber(y);
//     this.y = y;
//   }

//   logSum() {
//     return this.x + this.y;
//   }

//   logMul() {
//     return this.x * this.y;
//   }

//   logSub() {
//     return this.x - this.y;
//   }

//   logDiv() {
//     if (this.y === 0) {
//       throw new Error("Division by zero is incorrect");
//     }
//     return this.x / this.y;
//   }
// }
// try {
//   const calculator = new Calculator(10, "a");

//   const logSumRef = calculator.logSum;
//   console.log(logSumRef());

//   const logMulRef = calculator.logMul;
//   console.log(logMulRef());

//   const logSubRef = calculator.logSub;
//   console.log(logSubRef());

//   const logDivRef = calculator.logDiv;
//   console.log(logDivRef());

//   calculator.setX(20);
//   calculator.setY(4);

//   console.log(logSumRef());
//   console.log(logMulRef());
//   console.log(logSubRef());
//   console.log(logDivRef());
// } catch (error) {
//   console.error(error.message);
// }

// Lecture 5 (OOP in JS)

class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== "number" || maxSize <= 0) {
      throw new Error("Max size must be a positive number.");
    }
    this.maxSize = maxSize;
    this.stack = [];
  }

  push(elem) {
    if (this.stack.length >= this.maxSize) {
      throw new Error("Stack is full.");
    }
    this.stack.push(elem);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Pop from empty stack.");
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  toArray() {
    return [...this.stack];
  }

  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== "function") {
      throw new Error("The provided entity is not iterable.");
    }

    const newStack = new Stack(iterable.length);
    for (const elem of iterable) {
      newStack.push(elem);
    }
    return newStack;
  }
}

const stack = new Stack(5);
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.toArray());

const iterableStack = Stack.fromIterable([3, 4, 5]);
console.log(iterableStack.toArray());
