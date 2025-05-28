# TypeScript Interview Preparation

This document outlines key concepts and common interview questions related to TypeScript, designed to help you prepare for technical interviews.

## 1. Basic Types

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
  - Answer: Static typing catches errors early, better IDE support, enhanced code maintainability, improved team collaboration, and clearer code documentation through types.

* "Explain the difference between `interface` and `type`"
  - Answer: Interfaces are extendable and can merge declarations, while types are more flexible with unions/intersections and can't be changed after creation.

* "How does type inference work in TypeScript?"
  - Answer: TypeScript automatically determines types based on variable initialization, return values, and context, reducing need for explicit annotations.

* "What is the `any` type and when should it be used?"
  - Answer: Any disables type checking, useful for gradual migration or unknown types. Use sparingly as it defeats TypeScript's purpose.

* "How do you handle nullable types in TypeScript?"
  - Answer: Use union types with null/undefined, strict null checks, and optional chaining/nullish coalescing to safely handle nullable values.

* "Explain union types and intersection types"
  - Answer: Union (|) allows multiple type options, intersection (&) combines multiple types into one requiring all properties.

## 2. Interfaces and Types

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

## 3. Classes and OOP

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

## 5. Advanced Types

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