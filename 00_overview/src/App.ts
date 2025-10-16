/** 
Introduction to TypeScript
- TypeScript is a superset of JavaScript developed by Microsoft
- Adds static typing, interfaces, generics
- Compiles to plain JavaScript
- Benefits:
   * Early error detection
   * Better IDE support
   * Scalable for large applications
*/

/** 
Installation & Setup
- Install compiler: npm install -g typescript
- Compile: tsc file.ts → file.js
- Initialize: tsc --init
- tsconfig.json (compiler options)
   * "target": "ES6"
   * "module": "commonjs" / "ESNext"
   * "strict": true
*/

/** 
 Basic Types
- string, number, boolean, null, undefined
- any (disable type-checking)
- unknown (safer than any)
- void (no return)
- never (no value ever returned)
Example:
*/
let username = "Nour";   // string
let age = 25;            // number
let isOnline = true;     // boolean
let value;               // any by default (avoid)

/** 
 Advanced Types
- Arrays, Tuples, Union, Intersection
- Enums: group constants
- Type Aliases vs Interfaces
Example:
*/
let numbers = [1, 2, 3];              // number[]
let person = ["Nour", 25];            // tuple [string, number]
const Direction = { Up:0, Down:1, Left:2, Right:3 }; // enum example in JS
// Union simulation:
let id; 
id = "123"; 
id = 123;

/** 
 Functions & Classes
- Function types: define params + return type
- Optional & default params
- Arrow functions
- Classes: properties, constructor, methods
- Access modifiers (public/private/protected in TS, simulated in JS)
- Inheritance, Abstract classes
Example:
*/
function add(a, b) { return a + b; }

class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age; // private-like convention
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
let p1 = new Person("Nour", 25);
p1.greet();

/** 
 Generics
- Reusable components with variable types
- Generic Functions, Classes, Constraints
(In JS, generics are simulated with dynamic typing)
Example:
*/
function identity(arg) { return arg; }
console.log(identity(10));
console.log(identity("Hello"));

class Box {
  constructor(content) {
    this.content = content;
  }
}
let numBox = new Box(123);
let strBox = new Box("Hi");

/** 
Modules & Namespaces
- ES Modules: export/import
- Default export vs named export
- Namespaces (older approach)
- Ambient Declarations (.d.ts for external libs)
Example:
*/
// math.js
export function addNumbers(a, b) { return a + b; }
// main.js
// import { addNumbers } from "./math.js";
// console.log(addNumbers(2,3));

/** 
 Tooling & Ecosystem
- ts-node: run TS directly
- ESLint + Prettier for style
- Testing: Jest, Mocha
- Frameworks: Angular, React+TS, Node.js+TS
- Bundlers: Webpack, Vite, Rollup
*/

/** 
 Best Practices & Summary
- Always enable "strict" in tsconfig.json
- Prefer type inference when possible
- Avoid any → use unknown
- Use readonly & const
- DRY types with generics/aliases
Summary:
   * TypeScript = JavaScript + Types + Scalability
   * Improves maintainability & reliability
*/
