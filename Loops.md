# Comparison and logical operators



## Looking at a flowchart (for all but the most basic scripts), the code can take more than one path, which means the browser runs different code in different situations. In this chapter, you will learn how to create and control the flow of data in your scripts to handle different situations.
## Sometimes there are some places in the code where decision are made that determines which line of the code should be run next

 

### Comparison Operators :

* ### (==)
* ### (===)

* ### (!=)
* ### !==
* ### > , <
* ### >= , <=
* ### &&
* ### ||
* ### !

## Loops :

### Loops check a condition , if it returns true , a code block will run , then the condition will be checked again , and if it still returns true the code block will run again, still repeats until the condition returns false.


* ### For :

* #### Loop Counters :
#### For loops uses a counter as a condition, this instructs the code to run specified numbers of time, the condition is made up of three statements :

* #### Initializing
* #### Condition
* ### Update
 
* ### While :

* ### Example :

### var i = l ; var msg = ' ' ; II Set counter to 1 II Message II Store 5 times tabl e in a variable while (i < 10) { msg += i + ' x 5 = ' + (i * 5) + '
### '; i++; document .getEl ementByid( ' answer') . innerHTML = msg;

### Here is an example of a while loop. It writes out the 5 times table. Each time the loop is run, another calculation is written into the variable called msg.

### This loop will continue to run for as long as the condition in the parentheses is true. That condition is a counter indicating that, as long as the variable i remains less than 10, the statements in the subsequent code block should run.

### Inside the code block there are two statements:

### The first statement uses the+= operator, which is used to add new content to the msg variable. Each time the loop runs, a new calculation and line break is added to the end of the message being stored in it. So+" works as a shorthand for writing: msg = msg + 'new msg' (See bottom of the next page for a breakdown of this statement.)

### The second statement increments the counter variable by one. (This is done inside the loop rather than with the condition.)

### When the loop has finished, the interpreter goes to the next line of code, which writes the msg variable to the page.

### 1*5=5

### 2*5=10

### 3*5=15

### .

### .(until) 9*5=45

### In this example, the condition specifies that the code should run nine times. A more typical use of     a while loop would be when you do not know how many times you want the code to run. It should continue to run as long as a condition is met.