# 🐛 Messages Not Logging to Console Due to Undefined Variables

Work with a partner to resolve the following issue(s):

* As a developer, I want to log messages to the console using variables declared in both global and local scope.

## Expected Behavior

When the console is opened, a series of messages should log to the console.

## Actual Behavior

When the console is opened, an error message indicates that at least one variable is undefined, and messages do not log.

## 💡 Hints

Think about how the variable is being used. Is it being made available to all functions, or is it only being used by one function?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is lexical scope?

## Scope

Global Scope : Scope outside of the functions declared.
Local Scope : Variables declared within a function correspond to the local scope. *Each function has its own scope and bound to its respective function.
Function Scope : Private variable for the function. 
Block Scope : A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}.
Lexical Scope : Lexical scope means the children scope have the access to the variables defined in the parent scope. The children functions are lexically bound to the execution context of their parents.

Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function.

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
