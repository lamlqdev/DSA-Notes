# Recursion

## 1. Introduction

Recursion is a technique where a function calls itself to solve a problem by breaking it down into smaller, similar sub-problems.

### 1.1. Basic Structure of a Recursive Function
**Base case**: The stopping condition to end the recursion and prevent infinite loops 
<p align="center"><i>if (condition) return value;</i></p>

**Recursive case**: The part where the function calls itself
<p align="center"><i>return recursiveFunction(newData);</i></p>

### 1.2. Key Concepts
**Call Stack**: Each function call is stored on the stack until it reaches the base case and starts returning values.

**Returning Values**: Ensure the function returns values from the recursive case all the way back to the initial call.

### 1.3. Rules of Writing Recursive Functions
**Identify the Base Case**: Define the condition where recursion stops.

**Identify the Recursive Case**: Define how the function progresses closer to the base case.

**Ensure Progression**: Update parameters to move closer to the base case in each call.


## 2. Common Issues with Recursion
**Stack Overflow**: Occurs when the base case is missing or unreachable, causing infinite recursive calls.

**Memory Consumption**: Each recursive call adds to the call stack, which uses memory. Ensure recursion is efficient.

## 3. Recursive vs. Iterative

### 3.1. Theorem
Anything that can be implemented recursively can also be implemented iteratively.

Recursion and iteration are interchangeable, but the choice depends on the situation.

### 3.2. Pros & Cons

| Pros                               |      Cons                                      |
|------------------------------------|------------------------------------------------|
| **Readable and DRY (Don’t Repeat Yourself)**: Recursive solutions are often more concise and maintainable, especially for problems like tree traversal                  | **Memory Overhead:** Every recursive call adds to the call stack, increasing memory usage     |
| **Simpler for Certain Problems**: Recursion can simplify code when dealing with unknown depths or inherently recursive structures (e.g., trees, graphs)                   | **Stack Overflow Risk:** Too many recursive calls can lead to stack overflow errors |
| **Elegant for Traversals**: Ideal for scenarios like searching or traversing tree-like data structures.                           |   **Harder to Understand:** For some, recursion can be less intuitive, particularly in complex cases                 |
|  |   **Performance**: Iterative solutions are generally more efficient as they avoid the overhead of repeated function calls

### 3.3. When to Use Recursion

**Tree and Graph Traversal**: Recursion simplifies traversing or searching trees/graphs (e.g., DFS).

**Divide and Conquer**: Use recursion when a problem can be divided into smaller, similar subproblems (e.g., Merge Sort, Quick Sort).

**Identical Subproblems**: When the problem involves solving smaller versions of the same problem (e.g., Fibonacci, Factorial).

**Combining Subproblem Solutions**: If solving smaller problems and combining them solves the overall problem (e.g., tree traversal).


### 3.4. Key Indicators for Recursion

> - Problem can be split into smaller subproblems.
> 
> - Subproblems have the same structure.
> 
> - Solutions to subproblems combine to solve the main problem.




