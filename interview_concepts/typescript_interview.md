# TypeScript Interview Preparation

This document provides a comprehensive guide to TypeScript concepts, patterns, and common interview questions to help you excel in technical interviews.

## Table of Contents
1. [TypeScript Fundamentals](#1-typescript-fundamentals)
2. [Advanced Type System](#2-advanced-type-system)
3. [Object-Oriented Programming](#3-object-oriented-programming)
4. [Generics](#4-generics)
5. [Decorators and Metadata](#5-decorators-and-metadata)
6. [Modules and Namespaces](#6-modules-and-namespaces)
7. [Tooling and Configuration](#7-tooling-and-configuration)
8. [Performance Optimization](#8-performance-optimization)
9. [Testing in TypeScript](#9-testing-in-typescript)
10. [TypeScript with Frameworks](#10-typescript-with-frameworks)
11. [Common Interview Questions](#11-common-interview-questions)
12. [Practical Scenarios](#12-practical-scenarios)

## 1. TypeScript Fundamentals

### 1.1 Type System Overview

TypeScript's type system is designed to be optional and provides:
- **Static Type Checking**: Catches errors during development
- **Type Inference**: Automatically infers types when not explicitly defined
- **Structural Typing**: Based on the shape of values rather than their declarations
- **Gradual Typing**: Mix of typed and untyped code

### 1.2 Basic Types

**Primitive Types:**
```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];
enum Color {Red, Green, Blue};
let notSure: any = 4;
let u: undefined = undefined;
let n: null = null;
```

**Special Types:**
- `any`: Opt-out of type checking
- `unknown`: Type-safe counterpart of any
- `never`: Represents values that never occur
- `void`: Absence of any type
- `object`: Non-primitive type

### 1.3 Type Assertions

Two syntaxes for type assertions:
```typescript
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
```

### 1.4 Type Guards

Narrow types in conditional blocks:
```typescript
// typeof type guards
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    return padding + value;
}

// instanceof type guards
class Bird { fly() {} }
class Fish { swim() {} }
function getPet(): Bird | Fish { /* ... */ }

let pet = getPet();
if (pet instanceof Bird) {
    pet.fly();
} else {
    pet.swim();
}
```

**Understanding TypeScript Types:**

* TypeScript adds static typing to JavaScript, providing better tooling and error detection.
* Types can be explicit or inferred by the TypeScript compiler.
* TypeScript includes primitive types, object types, and special types.

**Key Concepts:**

* **Primitive Types:** `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
* **Object Types:** `array`, `tuple`, `enum`, `any`, `void`, `never`, `object`
* **Type Assertions:** Using `as` or angle-bracket syntax
* **Type Inference:** TypeScript's ability to automatically determine types
* **Union and Intersection Types:** Combining types using `|` and `&`

**Interview Questions:**

* "What are the benefits of using TypeScript over JavaScript?"
  - Answer: Static typing catches errors early, better IDE support, enhanced code maintainability, improved team collaboration, and clearer code documentation through types. It also makes large-scale refactors and API changes much safer because the compiler will point out all the broken call sites.

* "Explain the difference between `interface` and `type`"
  - Answer: Interfaces are extendable and can merge declarations, while types are more flexible with unions/intersections and can't be changed after creation. In practice, interfaces are great for describing object shapes and public contracts, while type aliases shine when you build complex unions, mapped types, or conditional types.

* "How does type inference work in TypeScript?"
  - Answer: TypeScript automatically determines types based on variable initialization, return values, and context, reducing need for explicit annotations.

* "What is the `any` type and when should it be used?"
  - Answer: Any disables type checking, useful for gradual migration or unknown types. Use sparingly as it defeats TypeScript's purpose.

* "How do you handle nullable types in TypeScript?"
  - Answer: Use union types with null/undefined, strict null checks, and optional chaining/nullish coalescing to safely handle nullable values.

* "Explain union types and intersection types"
  - Answer: Union (|) allows multiple type options, intersection (&) combines multiple types into one requiring all properties.

## 2. Advanced Type System

### 2.1 Interfaces vs Type Aliases

**Interfaces:**
- Can be extended and implemented
- Support declaration merging
- Better for object-oriented programming

```typescript
interface User {
    name: string;
    age?: number;  // Optional property
    readonly id: number;  // Readonly property
    [propName: string]: any;  // Index signature
    (source: string, subString: string): boolean;  // Function type
    new (name: string): User;  // Constructor type
}

// Extending interfaces
interface Employee extends User {
    employeeId: string;
}
```

**Type Aliases:**
- Can represent primitive, union, tuple, and other types
- Use `&` for intersection types
- Better for complex type transformations

```typescript
type StringOrNumber = string | number;
type Text = string | { text: string };
type NameLookup = Dictionary<string, Person>;
type Callback<T> = (data: T) => void;
type Pair<T> = [T, T];
type Coordinates = Pair<number>;
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
```

### 2.2 Advanced Types

**Mapped Types:**
```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

**Conditional Types:**
```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type Flatten<T> = T extends any[] ? T[number] : T;
type Unpacked<T> =
    T extends (infer U)[] ? U :
    T extends (...args: any[]) => infer U ? U :
    T extends Promise<infer U> ? U :
    T;

// Example: Extract return type of a function
type MyFunc = (a: number) => string;
type Result = MyFunc extends (...args: any[]) => infer R ? R : never; // string

// Distributive Conditional Types
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>; // string[] | number[]
```

**Template Literal Types:**
```typescript
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
```

### 2.3 Utility Types

Common built-in utility types:
- `Partial<T>`: Makes all properties in T optional
- `Required<T>`: Makes all properties in T required
- `Readonly<T>`: Makes all properties in T readonly
- `Record<K,T>`: Constructs a type with a set of properties K of type T
- `Pick<T,K>`: Picks a set of properties K from T
- `Omit<T,K>`: Constructs a type by picking all properties from T and then removing K
- `Exclude<T,U>`: Excludes from T those types that are assignable to U
- `Extract<T,U>`: Extracts from T those types that are assignable to U
- `NonNullable<T>`: Excludes null and undefined from T
- `Parameters<T>`: Obtain the parameters of a function type in a tuple
- `ReturnType<T>`: Obtain the return type of a function type
- `InstanceType<T>`: Obtain the instance type of a constructor function type

**Internal Implementations (How they work):**
```typescript
// ReturnType uses 'infer' to capture the return value
type MyReturnType<T extends (...args: any) => any> = 
    T extends (...args: any) => infer R ? R : any;

// Parameters captures argument types as a tuple
type MyParameters<T extends (...args: any) => any> = 
    T extends (...args: infer P) => any ? P : never;

// Pick uses mapped types and indexed access
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

### 2.4 Variance (Covariance & Contravariance)

Understanding how types relate to their subtypes in complex structures:

* **Covariance**: A type `T` is covariant if `Complex<Subtype>` can be assigned to `Complex<Base>`. 
    - *Example*: In TypeScript, `readonly` arrays are covariant. `readonly string[]` can be assigned to `readonly (string | number)[]`.
* **Contravariance**: A type `T` is contravariant if `Complex<Base>` can be assigned to `Complex<Subtype>`.
    - *Example*: Function parameters are contravariant (with `strictFunctionTypes`). A function taking `Base` can be used where a function taking `Subtype` is expected.
* **Invariance**: A type is invariant if it is neither covariant nor contravariant.
    - *Example*: Regular (mutable) arrays in TypeScript are technically invariant in theory, but TypeScript allows some flexibility (bivariance) unless strict modes are used.

**Understanding Interfaces:**

* Interfaces define contracts in your code and provide explicit names for type checking.
* They can be extended, implemented by classes, and merged.
* Types are similar but have some distinct differences in capabilities.

**Key Concepts:**

* **Interface Declaration:** Defining object shapes
* **Optional Properties:** Using `?` for optional fields
* **Readonly Properties:** Using `readonly` modifier
* **Extending Interfaces:** Inheritance between interfaces
* **Interface vs Type Aliases:** Understanding when to use each
* **Index Signatures:** Defining dynamic property names

**Interview Questions:**

* "What is the difference between interfaces and type aliases?"
  - Answer: Interfaces support declaration merging and are better for OOP. Types support unions/intersections and are better for functional programming.

* "How do you implement an interface in a class?"
  - Answer: Use 'implements' keyword followed by interface name. Class must provide all required properties and methods defined in interface.

* "Explain interface extension and merging"
  - Answer: Interfaces extend using 'extends' keyword. Declaration merging allows adding properties to existing interfaces across multiple declarations.

* "When would you use index signatures?"
  - Answer: Use for objects with dynamic property names, allowing flexible key-value pairs while maintaining type safety.

* "How do you make properties optional or readonly?"
  - Answer: Use '?' for optional properties, 'readonly' keyword for immutable properties. Both prevent unwanted modifications and handle undefined values.

## 3. Object-Oriented Programming

### 3.1 Classes

```typescript
class Animal {
    // Properties
    private name: string;
    protected age: number;
    public readonly species: string;
    
    // Static property
    static className = 'Animal';
    
    // Constructor with parameter properties
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.species = 'Unknown';
    }
    
    // Methods
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
    
    // Getters and setters
    get getName(): string {
        return this.name;
    }
    
    set setName(name: string) {
        this.name = name;
    }
    
    // Static method
    static isAnimal(instance: any): instance is Animal {
        return instance instanceof Animal;
    }
}
```

### 3.2 Inheritance

```typescript
class Bird extends Animal {
    private wingSpan: number;
    
    constructor(name: string, age: number, wingSpan: number) {
        super(name, age);
        this.wingSpan = wingSpan;
        this.species = 'Bird'; // Can access protected member
    }
    
    // Method overriding
    move(distanceInMeters = 5) {
        console.log("Flying...");
        super.move(distanceInMeters);
    }
    
    // New method
    fly(height: number): void {
        console.log(`Flying at ${height} meters`);
    }
}
```

### 3.3 Abstract Classes

```typescript
abstract class Department {
    constructor(public name: string) {}
    
    printName(): void {
        console.log('Department name: ' + this.name);
    }
    
    abstract printMeeting(): void; // Must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}
```

### 3.4 Interfaces and Classes

```typescript
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

// Implementing multiple interfaces
interface Alarm {
    alert(): void;
}

class DigitalClock implements ClockInterface, Alarm {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    alert() {
        console.log("Beep beep!");
    }
}
```

**Object-Oriented Programming in TypeScript:**

* TypeScript provides full support for object-oriented programming concepts
* Classes can implement interfaces and extend other classes
* Access modifiers control visibility of class members

**Key Concepts:**

* **Class Declaration:** Constructor, properties, methods
* **Access Modifiers:** `public`, `private`, `protected`
* **Abstract Classes:** Base classes that can't be instantiated
* **Inheritance:** Extending classes and implementing interfaces
* **Static Members:** Properties and methods on the class itself
* **Method Decorators:** Adding metadata and behavior to class members

**Interview Questions:**

* "How do access modifiers work in TypeScript?"
  - Answer: Public allows access anywhere, private restricts to containing class, protected allows access in class and subclasses.

* "What are abstract classes and when should you use them?"
  - Answer: Abstract classes provide base implementation, can't be instantiated directly. Use for sharing common functionality among related classes.

* "Explain the concept of method decorators"
  - Answer: Functions that modify/enhance methods, using @ syntax. Can add logging, validation, or modify behavior at runtime.

* "How does inheritance work in TypeScript?"
  - Answer: Classes extend parent using 'extends' keyword, inherit properties/methods, can override methods, and use super to access parent.

* "What is the difference between private and protected?"
  - Answer: Private members only accessible within declaring class, protected accessible in declaring class and derived classes.

## 4. Generics

### 4.1 Basic Generic Functions

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");  // Type of output will be 'string'
let output2 = identity("myString");  // Type inference

// Generic array type
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

// Generic types
let myIdentity: <T>(arg: T) => T = identity;
let myIdentity2: {<T>(arg: T): T} = identity;

// Generic interfaces
interface GenericIdentityFn<T> {
    (arg: T): T;
}
```

### 4.2 Generic Constraints

```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// Using type parameters in generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
getProperty(x, "m"); // error

// Using class types in generics
function create<T>(c: { new(): T }): T {
    return new c();
}
```

### 4.3 Advanced Generic Patterns

**Mapped Types with Generics:**
```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};

type Nullable<T> = { [P in keyof T]: T[P] | null };
type Proxy<T> = {
    get(): T;
    set(value: T): void;
};
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
};
```

**Conditional Types with Generics:**
```typescript
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<"a">;     // "string"
type T2 = TypeName<true>;    // "boolean"
type T3 = TypeName<() => void>;  // "function"
type T4 = TypeName<string[]>;    // "object"

// Distributive conditional types
type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;
```

**Understanding Generics:**

* Generics enable the creation of reusable components that work with multiple types
* They provide type safety while maintaining flexibility
* Generic constraints limit the types that can be used

**Key Concepts:**

* **Generic Functions:** Creating functions that work with any type
* **Generic Interfaces:** Type-safe interfaces
* **Generic Classes:** Classes with type parameters
* **Generic Constraints:** Limiting generic types using `extends`
* **Generic Type Inference:** TypeScript's ability to infer generic types

**Interview Questions:**

* "What are generics and why are they useful?"
  - Answer: Generics enable type-safe reusable code that works with multiple types while maintaining type information throughout usage.

* "How do you constrain generic types?"
  - Answer: Use 'extends' keyword to limit generic types to those matching specific interface or type requirements.

* "Explain generic type inference"
  - Answer: TypeScript automatically determines generic type arguments based on usage context and provided values.

* "When would you use generic classes?"
  - Answer: For classes that work with different types while maintaining type safety, like collections or data structures.

* "How do you use multiple type parameters?"
  - Answer: Define multiple parameters in angle brackets <T, U>, each representing different types used in the implementation.

## 5. Decorators and Metadata

### 5.1 Class Decorators

```typescript
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class BugReport {
    type = "report";
    title: string;
    
    constructor(t: string) {
        this.title = t;
    }
}
```

### 5.2 Method Decorators

```typescript
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Greeter {
    greeting: string;
    
    constructor(message: string) {
        this.greeting = message;
    }
    
    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
```

### 5.3 Property Decorators

```typescript
function format(formatString: string) {
    return function (target: any, propertyKey: string) {
        let value = target[propertyKey];
        
        const getter = () => {
            return `${formatString} ${value}`;
        };
        
        const setter = (newVal: string) => {
            value = newVal;
        };
        
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}

class Greeter {
    @format('Hello, ')
    greeting: string;
    
    constructor(message: string) {
        this.greeting = message;
    }
}
```

### 5.4 Parameter Decorators

```typescript
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const existingRequiredParameters: number[] = 
        Reflect.getOwnMetadata('required', target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata('required', existingRequiredParameters, target, propertyKey);
}

class Greeter {
    greeting: string;
    
    constructor(message: string) {
        this.greeting = message;
    }
    
    greet(@required name: string) {
        return `Hello ${name}, ${this.greeting}`;
    }
}
```

### 5.5 Metadata Reflection

```typescript
import 'reflect-metadata';

const formatMetadataKey = Symbol('format');

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class Greeter {
    @format('Hello, %s')
    greeting: string;
    
    constructor(message: string) {
        this.greeting = message;
    }
    
    greet() {
        const formatString = getFormat(this, 'greeting');
        return formatString.replace('%s', this.greeting);
    }
}
```

**Understanding Advanced Type Features:**

* TypeScript provides powerful type manipulation features
* Advanced types enable complex type relationships and transformations
* Understanding type guards and type narrowing

**Key Concepts:**

* **Mapped Types:** Creating new types based on existing ones
* **Conditional Types:** Types that depend on type conditions
* **Type Guards:** Runtime checks that guarantee type information
* **Utility Types:** Built-in type transformations
* **Index Types:** Accessing types through indexing
* **Type Narrowing:** Refining types in conditional blocks

**Interview Questions:**

* "What are mapped types and when would you use them?"
  - Answer: Transform existing type by mapping over properties. Useful for creating related types like Readonly or Partial versions.

* "Explain how conditional types work"
  - Answer: Types that select based on type relationship using extends keyword. Like ternary operator for types.

* "How do you implement custom type guards?"
  - Answer: Functions returning type predicates (param is Type) to narrow types in conditional blocks.

* "What are some common utility types?"
  - Answer: Partial, Readonly, Pick, Record, Exclude, Extract help manipulate types. Built into TypeScript for common transformations.

* "How does type narrowing work?"
  - Answer: TypeScript narrows types based on control flow analysis, type guards, and instanceof/typeof checks.

## 6. Modules and Namespaces

### 6.1 ES6 Modules

**Exporting:**
```typescript
// math.ts
export const pi = 3.14;
export function add(a: number, b: number): number {
    return a + b;
}
export class Calculator {
    // ...
}

// Re-exporting
export { Calculator as Calc } from "./Calculator";
```

**Importing:**
```typescript
import { add, pi } from "./math";
import * as math from "./math";
import { Calculator as Calc } from "./math";
import "./my-module"; // Side-effect import

// Dynamic imports
async function load() {
    const math = await import('./math');
    console.log(math.add(2, 3));
}
```

### 6.2 Namespaces

```typescript
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
    
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
    
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// Usage
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
```

### 6.3 Module Resolution

**Module Resolution Strategies:**
1. **Classic**: Used when `module` is `amd`, `system`, `es2015`, etc.
2. **Node**: Mimics Node.js module resolution (used when `module` is `commonjs`)

**Module Resolution Modes:**
- `--moduleResolution node` (default for `--module commonjs`)
- `--moduleResolution node16` or `nodenext` (for Node.js ESM)
- `--moduleResolution bundler` (for bundlers like webpack, rollup, etc.)

### 6.4 Path Mapping

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@app/*": ["src/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
```

### 6.5 Module Augmentation

```typescript
// observable.ts
export class Observable<T> {
    // ... implementation
}

// map.ts
import { Observable } from "./observable";
declare module "./observable" {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>;
    }
}

Observable.prototype.map = function (f) {
    // ... implementation
};
```

**Understanding Module Systems:**

* TypeScript supports ES6 modules and legacy namespace syntax
* Modules help organize code and manage dependencies
* Namespaces provide a way to group related code

**Key Concepts:**

* **ES6 Modules:** Import and export syntax
* **Module Resolution:** How TypeScript finds modules
* **Declaration Merging:** Combining declarations
* **Namespace Usage:** Legacy code organization
* **Ambient Modules:** Type definitions for external libraries

**Interview Questions:**

* "What's the difference between modules and namespaces?"
  - Answer: Modules are file-based and support modern ES6 imports. Namespaces are TypeScript's legacy way of organizing code.

* "How does module resolution work in TypeScript?"
  - Answer: TypeScript looks for .ts, .d.ts files using classic or node resolution strategies based on configuration.

* "Explain declaration merging"
  - Answer: Multiple declarations with same name combine properties. Works with interfaces, namespaces, and certain other declarations.

* "When would you use ambient modules?"
  - Answer: For typing external JavaScript libraries without TypeScript definitions, declaring module shape without implementation.

* "How do you handle circular dependencies?"
  - Answer: Use interface types instead of values, restructure code to break cycles, or use import type.

## 7. Decorators

**Understanding Decorators:**

* Decorators provide a way to add annotations and metadata to code
* They can modify classes, methods, properties, and parameters
* Decorators are commonly used in frameworks like Angular

**Key Concepts:**

* **Class Decorators:** Modifying class definitions
* **Method Decorators:** Adding behavior to methods
* **Property Decorators:** Modifying property definitions
* **Parameter Decorators:** Annotating method parameters
* **Decorator Factories:** Creating customizable decorators

**Interview Questions:**

* "What are decorators and how do they work?"
  - Answer: Special declarations that modify classes/members using @ syntax. Run at definition time, can add metadata or behavior.

* "How do you create a custom decorator?"
  - Answer: Function that returns decorator function, takes appropriate target parameters based on decorator type (class, method, etc).

* "What are the different types of decorators?"
  - Answer: Class, method, property, parameter, and accessor decorators. Each type receives different arguments for modification.

* "When would you use decorator factories?"
  - Answer: When decorators need configuration options. Factories return decorator function with customized behavior based on parameters.

* "How do decorators affect inheritance?"
  - Answer: Decorators can modify inherited members, add metadata visible to subclasses, and influence class hierarchy behavior.

## 8. Type Inference and Type Compatibility

**Understanding Type Systems:**

* TypeScript's type system is structural, not nominal
* Type inference helps reduce explicit type annotations
* Understanding type compatibility rules

**Key Concepts:**

* **Structural Typing:** Type compatibility based on structure
* **Type Inference:** Automatic type detection
* **Type Widening:** How literal types are widened
* **Type Compatibility:** Rules for type assignability
* **Type Assertions:** Overriding type inference

**Interview Questions:**

* "How does structural typing work in TypeScript?"
  - Answer: Types are compatible if they have same structure, regardless of name. Duck typing based on shape not explicit inheritance.

* "Explain type widening and when it occurs"
  - Answer: TypeScript widens literal types to base types during inference. const prevents widening, maintaining precise types.

* "What are the rules for type compatibility?"
  - Answer: Source must have all required properties of target. Extra properties allowed. Functions checked based on parameters and return.

* "When should you use type assertions?"
  - Answer: When you know type information better than compiler. Use carefully, as it bypasses normal type checking.

* "How does TypeScript infer return types?"
  - Answer: Analyzes all return statements and control flow paths to determine most specific type covering all possibilities.

## 9. Configuration and Tooling

**Understanding TypeScript Setup:**

* TypeScript projects require configuration and build setup
* Various tools and settings affect compilation behavior
* Integration with development tools and environments

**Key Concepts:**

* **tsconfig.json:** Project configuration options
* **Compiler Options:** Important compilation settings
* **Build Tools:** Integration with webpack, etc.
* **Type Definition Files:** Using @types packages
* **Project References:** Managing multi-project setups

**Interview Questions:**

* "What are important tsconfig.json settings?"
  - Answer: Strict mode, module system, target ES version, source maps, and include/exclude patterns are crucial configuration options.

* "How do you handle type definitions for libraries?"
  - Answer: Install @types packages, write custom declarations, or use declare keyword for ambient declarations.

* "Explain strict mode configuration options"
  - Answer: Enables strict null checks, strict function types, strict property initialization, and other type-safety features.

* "How do you set up a TypeScript project?"
  - Answer: Initialize with tsc --init, configure tsconfig.json, install dependencies, set up build tools and IDE support.

* "What are project references used for?"
  - Answer: Organize large codebases into smaller projects, enabling incremental builds and better dependency management.
  
**Monorepo Setup with Project References:**
Project references allow you to split a large TypeScript project into smaller, independent pieces. This improves build times and enforces modularity.
- `composite: true`: Must be set in the referenced project's `tsconfig.json`.
- `references: [{ path: "../core" }]`: Set in the consuming project.
- This allows `tsc --build` to automatically rebuild only the necessary parts of the dependency graph.

## 10. Error Handling and Debugging

**Understanding Error Management:**

* TypeScript provides type-safe error handling
* Debugging tools and techniques specific to TypeScript
* Error types and exception handling

**Key Concepts:**

* **Error Types:** Built-in and custom error types
* **Exception Handling:** try-catch blocks
* **Type Assertions:** Safe type casting
* **Debugging:** Source maps and tools
* **Error Boundaries:** Handling runtime errors

**Interview Questions:**

* "How do you handle errors in TypeScript?"
  - Answer: Use typed Error classes, try-catch with type guards, and custom error types for better error handling.

* "What are the benefits of source maps?"
  - Answer: Enable debugging TypeScript code directly, mapping compiled JavaScript back to original TypeScript source locations.

* "How do you debug TypeScript applications?"
  - Answer: Use source maps, debugger statement, IDE debugging tools, and TypeScript-aware browser/Node.js debuggers.

* "Explain custom error types"
  - Answer: Create classes extending Error with specific properties and methods for different error scenarios.

* "What are best practices for error handling?"
  - Answer: Use typed errors, handle nulls explicitly, leverage union types, and maintain type safety in error handling. 