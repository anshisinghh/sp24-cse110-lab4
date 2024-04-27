1. The console will print 3 because i iterates over the prices array which is of length 3. In each iteration of the loop, i is incremented by 1 starting at 0. The loop terminates when the condition, i < prices.length, is no longer met.
2. The console will print 150 because in the example, the function calculates the discounted prices for [100, 200, 300] with a discount of 0.5. The discounted prices are [50, 100, 150]. Since the console.log statement is outside of the loop it will only print the value of discountedPrice after the very last iteration which was set to 150.
3. The console will print 150 because in the example, the function calculates the discounted prices for [100, 200, 300] with a discount of 0.5 and then calculates the final price. The final prices are [50, 100, 150]. Since the console.log statement is outside of the loop it will only print the value of finalPrice after the very last iteration which was set to 150.
4. The function will return [50, 100, 150] because in the example the function takes in the array of [100, 200, 300] with a discount of 0.5. It then calculates the final prices for each of the values in the array and pushes into a new array called discounted. Thus the function will return the array of final price values.
 
5. It gives a reference error saying i is not defined because the variable i is declared inside the for loop and is not accessible outside of that block due to block scoping in JavaScript.
6. It gives a reference error saying discountedPrice is not defined because the variable discountedPrice is declared inside the for loop and is not accessible outside of that block due to block scoping in JavaScript.
7. The console will print 150 because in the example, the function calculates the discounted prices for [100, 200, 300] with a discount of 0.5 and then calculates the final price. The final prices are [50, 100, 150]. Since the console.log statement is outside of the loop it will only print the value of finalPrice after the very last iteration which was set to 150. There will not be a reference error because the variable finalPrice was defined in the same block scope as the console log statement, thus it can be referenced.
8. The function will return [50, 100, 150] because in the example the function takes in the array of [100, 200, 300] with a discount of 0.5. It then calculates the final prices for each of the values in the array and pushes into a new array called discounted, and the function will return the array of final price values. There will not be a reference error because the array discounted was defined in the same block scope as the console log statement, thus it can be referenced.

9. It gives a reference error saying i is not defined because the variable i is declared inside the for loop and is not accessible outside of that block due to block scoping in JavaScript.
10. The console will print 3 because in line 4 the variable length was assigned to be the length of the prices array and thus it printed that value.
11. The function will return [50, 100, 150] because in the example the function takes in the array of [100, 200, 300] with a discount of 0.5. It then calculates the discounted prices for each of the values in the array and pushes into a new array called discounted, and the function will return the array of those values. The function does not give an error even though discounted was declared as a const and is being updated because the content of a variable declared with const can be modified if the variable holds a reference to a mutable object, like an array or object.

12. Data Types
    1. Accessing the value of the name property in the student object can be done by using student.name
    2. Accessing the value fo the Grad Year property in the student object can be done by using student["Grad Year]
    3. Calling the function for the greeting property in the student object can be done by using student.greeting()
    4. Accessing the name property of the object in the Favorite Teacher property in student can be done by using student["Favorite Teacher"].name
    5. Accessing index zero in the array of the courseLoad property of the student object can be done by using student.courseLoad[0]

Basic Operators & Type Conversion 

13. Arithmetic
    1. '3' + 2 = '32' Using the + operator with a string and number concatenates them into a single string
    2. '3' - 2 = 1 Using the - operator with a string that can be converted to a number converts that string into a number and performs the subtraction operation
    3. 3 + null = 3 Using the + operator with a number and null converts null into 0 so the result is number
    4. '3' + null = '3null' Using the + operator with a string and null concatenates them into a single string
    5. true + 3 = 4 Using the + operator with a boolean and a number converts the boolean to a number, so true because a 1, and the addition operation is performed
    6. false + null = 0 Similar to above, null is converted to a 0 so the result is a 0
    7. '3' + undefined = '3undefined' Using the + operator concatenates the string and the string representation of undefined
    8. '3' - undefined = NaN Using the - operator with a string and undefined tries to convert undefined into a number but since it cannot the result is NaN
14. Comparison
    1. '2' > 1 = true Using the > operator with a string and number converts the string to a number and performs the conparison 
    2. '2' < '12' = false Using the < operator with strings compares the strings lexicographically, since '2' comes after '12' the result is false
    3. 2 == '2' = true Using the == operator, it tries to convert the operands to be of the same type before comparing, thus it converts '2' into a number and then compares
    4. 2 === '2' = false Using the === operator performs strict equality comparison without type conversion since they are of two different types: string and number, it returns false
    5. true == 2 = false Using the == operator with a boolean and a number converts the boolean into a number, true becomes 1, thus it results in false
    6. true === Boolean(2) = True Using the === checks for strict equality wihtout type conversion thus true is not strictly equal to the result of Boolean(2) so it results in false
15. The == and === operators are both used for equality comparisons. However, == is used for abstract equality comparison meaing it performs type coercion before comparison. While === does strict equality comparison, it does not perform type coercion, it compares opeartnads striclty without covnverting them to the same type.

Loops

16. Answer in file part2-question16.js

Functions 

17. The modifyArray function is called with two parameters: an array [1,2,3] and the function doSomething. Inside modifyArray, a new empty array newArr is created. Then, a for loop iterates over each element of the input array [1,2,3]. For each element in the input array, the callback function doSomething is called with the current element as a parameter. In this example, doSomething doubles the number passed to it. The result of the callback function is then pushed into the newArr. After iterating over all elements in the input array, the newArr containing the modified elements is returned. Thus, the result of calling modifyArray([1,2,3], doSomething) will be [2, 4, 6].

setInterval(), setTimeout(), clearTimeout()

18. Answer in file part2-question18.js
19. The output of the above code is:
    1
    4
    3
    2
    
    This is because console.log(1) is executed first, so 1 is printed. Then, setTimeout(function() { console.log(2); }, 1000); schedules the function console.log(2); to be executed after a delay of 1000 milliseconds. Since this is asynchronous, the rest of the code continues to execute without waiting for this timeout. Then, setTimeout(function() { console.log(3); }, 0); schedules the function console.log(3); to be executed after a delay of 0 milliseconds. Even though the delay is 0, it will still be placed in the event queue and executed after the current code has finished executing and the call stack is clear. Then, console.log(4); is executed next, so 4 is printed. Finally, after the current code has finished executing and the call stack is clear, the function console.log(3); is executed, printing 3. After 1 second has passed since the first setTimeout was called, the function console.log(2); is executed, printing 2.