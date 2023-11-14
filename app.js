// Create a block of code that you can use several times. 
// function click(){
//     var click="Thank you to visit us"
//     document.write(click)
// }
// click()
// Write a function that displays current date & time in your browser.
// function tellTime() {
//  var now = new Date();

//  document.write("Current date and time is:" + now);
//  }

//  tellTime()

// Write a function that takes first & last name and then it greets the user using his full name.
// function greeting1() {
//     var  a=prompt("enter your first name");
//     var  b=prompt("enter your last name");
//     var greeting1="Hello!"

//     document.write( greeting1+" "+a+" "+b); 
// }
// greeting1()
// Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function add(a, b) {
//     var a = +prompt("enter value one");
//     var b = +prompt("enter value two");
//     return (a + b)
// }

// alert(add())
// 	 Calculator: 
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
// Return and show the desired result in your browser

// function performOperation(num1, num2, operator) {
//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       if (num2 === 0) {
//         return "Division by zero is not allowed";
//       }
//       return num1 / num2;
//     default:
//       return "Invalid operator";
//   }
// }
// let  num1 = 15;
// let num2 = 25;
// let operator = '*';
// let result = performOperation(num1, num2, operator);

// document.write("Result:"+ num1 + operator + num2 + "=" + result);

// 6.	 Write a function that squares its argument.
// function squares(n){
//    var num=+prompt("enter the value");
//    var n=num*num;
//    return(n)

// }
// document.write(squares());
// 7.	 Write a function that computes factorial of a number.
// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
//   }
//   const result = factorial(4);
// console.log(result); // 

// 8.	Write a function that take start and end number as inputs & display counting in your browser.
// function counting(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.write(i + "<br>")
//     }
// }
// var start = +prompt("enter the starting value of counting")
// var end = +prompt("enter the ending value of counting")
// document.write(counting(start, end))


// 9.	Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(res){
   
//     res=base+perpendicular
//     return( res)
    
// }
// function calculateSquare(res2){
//     res2= (base*base)+(perpendicular*perpendicular)
//     return(res2)
// }
// var base=+prompt("Enter base value");
// var perpendicular=+prompt("Enter perpendicular value");
// alert(calculateHypotenuse())
// alert(calculateSquare())

// 10.	Write a function that writes variable length arguments list in your browser.
// 11.	Write a function that accepts any number of arguments & find largest of the number.

// function arguments() {
//     var num1=+prompt("Enter value no:1");
//     var num2=+prompt("Enter value no:2");
//     var num3=+prompt("Enter value no:3");

//     var newNum=[num1,num2,num3];
//     var largest =newNum.sort()
//     var largest1=largest[largest.length-1]
//     document.write(largest1)
    
// }
// arguments()
// 12.	Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// a.	Arguments as values
// b.	Arguments as variables
// function variables( width,height){
//     return(  width*height)
    
// }
// var width=+prompt("enter width of rectangle");
// var height=+prompt("enter height of rectangle");
// var area= values(height,width)
// document.write( area)


// function values( width,height){
//     return(  width*height)
    
// }

// var area1= values(3,3)
// document.write( area1)

// 13.	Write a function that receives an array & returns the sorted array.
// function arr(){
//     var arr = [];
//     for(var i = 0; i < 6; i++)
//     arr.push(+prompt("Enter six numbers"));
// arr.sort()
//     document.write(arr)
// }
// arr()
// function arr(){
//     var arr = [];
//     for(var i = 0; i < 6; i++)
//     arr.push(prompt("Enter names of fruits"));
// arr.sort()
//     document.write(arr)
// }
// arr()




// 14.	Write a function that takes numbers array, sums its elements & returns the sum.
// function sumArrayElements(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// const myArray = [];
// for(var i = 0; i < 6; i++)
// myArray.push(+prompt("enter the values"))
// const result = sumArrayElements(myArray);
// document.write(result); 






// 15.	Execute & monitor the output of following JS program:
// var param = function inner() { 
//        return typeof inner; 
// }
// alert(param()); 

    
// 16.	Write a function that computes power of a number. E.g. cube of 2 is 8.

// function power(base, exponent) {
//     return Math.pow(base, exponent);
// }
// const base = 2;
// const exponent = 3;
// const result = power(base, exponent);
// console.log(result); 

