import { add, multiply, divide } from "./export.js";
console.log(add(1, 3));
console.log(multiply(1, 3));
console.log(divide(1, 3));
//! What is the difference between import and require?

//? import statements can only be called from the top of the page, where require statement can be called from everywhere in the file.
//? require statement can be called conditionally and import statements- can not.
//? import statements can be called asynchronous unlike require which in a large scale application can be very impactful.

// ! How can you enable using the import syntax using node js?
// ? The syntax for import statements is: import { foo } from './***';

// ! Give 2 node.js environment variables that are not available
// ! when using the import syntax.
