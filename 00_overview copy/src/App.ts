/*
 What is TypeScript?
  TypeScript is a superset of JavaScript developed by Microsoft.
  It adds *static typing*, *interfaces*, and *object-oriented features* to JavaScript,
  making code more predictable, scalable, and maintainable.
  
  TypeScript code is compiled (transpiled) into plain JavaScript
  so it can run anywhere JavaScript runs — in the browser, Node.js, etc.
*/

// Example: JavaScript vs TypeScript

// --- JavaScript ---
function add(a, b) {
  return a + b; // No type checking
}

// --- TypeScript ---
function addNumbers(a: number, b: number): number {
  return a + b; // Type checking ensures both are numbers
}

let result = addNumbers(5, 10);
console.log(result); // Output: 15

/*
  Key Benefits of TypeScript:
  - Type safety: Detects errors at compile time, not runtime.
  - Code completion & IntelliSense support.
  - Object-oriented features like classes, interfaces, generics.
  - Easier refactoring and maintenance for large projects.
  
  TypeScript → JavaScript Compilation:
  Run:
    tsc filename.ts
  Output:
    filename.js
*/
