**2 Golden Rules:**  
**- Variable declarations are scanned and are made undefined.**

**- Function declarations are scanned and are made available.**

 **Hoisting in JavaScript is a process in which all the Variables, Functions and Class definition are declared BEFORE execution of the code** 

**Variables are initialized to UNDEFINED when they are declared and Function definition is stored AS IT IS.**

**They are declared in Memory Allocation Phase in the Memory Component of Execution Context, so we can use them even BEFORE they are declared.**

**UNDEFINED means Variable has been declared but value is not ASSIGNED but NOT DEFINED means Variables is NOT DECLARED.**

**When we assign Variable to a Function definition, we CAN NOT call this Variable as Function BEFORE declaration as it will behave as Variable with UNDEFINED value.**

**Not defined and Undefined are NOT SAME. Not defined means Variable is NOT DECLARED and Undefined means Variable is DECLARED but value is NOT ASSIGNED.** 

**When functions are an ARROW function, they are NOT HOISTED. ARROW functions act like just any other variable**.

**Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.**
