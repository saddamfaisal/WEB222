/********************************************************************************* 
* WEB222 – Assignment 01 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of  
* this assignment has been copied manually or electronically from any other source (including web sites)  
* or distributed to other students. 
* 
*  Name:SADDAM FAISAL      StudentId:118406198      Date:)6/15/2020
* 
********************************************************************************/ 



/***************************** * Task 1 *****************************/ 
//   Description as Comments 
/*  

a) Infinity 
-Infinity is used to represent numeric value positive or negative in JVS.

EXAMPLE:

console.log(1 / 0);          // infinity   -->  divide a number by zero

b) Undefined 


Undefined is aproperty of JVS that means the global value undefined  that means we declare variable but we do not initalize
value.
EXAMPLE:

var student = {}

student.name = "adam";
student.age = "20";

delete student.name;              // delete name 

console.log(student.name);        // undefined  -->  because name was deleted

c) NaN

NAN means that the value not legal numberalthough writen in number form but represent string.
EXAMPLE:

var test = Math.sqrt( -0.3 ); 
console.log(test);                       //  square root of a negative number



*/
/***************************** * Task 2 *****************************/ 
//  Conversion 



-parseInt('1010',2 );    // convert string to integer based on 2.
-parseInt('AF', 16);  // convert string to integer based on 8.
-parseInt(713, 8);   // convert string to integer based on 16
                           
          
        

               

/***************************** * Task 3 *****************************/ 
//  Celsius and Fahrenheit temperatures 

cel = 25;                 // stored value for celcius
function cTf(value)     // convert celcius to fahrenheit 
{
    return value * (9/5) + 32;
}
console.log( cel + "C is " + cTf(cel) + "F.");     // print the result

faht = 24;              // stored value for fahrenheit
function fTc(value)     // convert fahrenheit to celcius
{
    return (value - 32) / (9/5);
}
console.log( faht+ "F is " + fTc(faht) + "C.");   // print the result

console.log();                 // to put space between tasks

/***************************** * Task 4 *****************************/ 
//   Larger or largest number 

function largerNum(a, b)    // using the declaration approach
{
    return Math.max(a, b);
}
// Calling this functions twice
console.log("The larger number of 7 and 11 is " + largerNum (7,11) + ".");
console.log("The larger number of 66 and 88 is " + largerNum (66,88) + ".");


var findGreater = function greaterNum(a, b)    // using the expression approach
{
    return Math.max(a,b); 
}
// Calling this functions twice with descriptive outputs 
console.log("\nThe greater number of 81 and 17 is " + findGreater (81,17) + ".");
console.log("The greater number of 76 and 55 is " + findGreater (76,55) + ".");

console.log();                 // to put space between tasks

/***************************** * Task 5 *****************************/ 
//  Evaluator

function Evaluator()                                      // using the declaration approach
{
    var sum = 0;
    for (var i = 1; i < arguments.length; i++) {
      sum += arguments[i];
    }
    if ((sum / arguments.length) >= 25)
    {
        return true;
    }
    else
    {
        return false;
    }
}
// Calling this functions twice with descriptive outputs 
console.log("Average grater than or equal to 25: " + Evaluator(1,2,3,4,5,3));            
console.log("Average grater than or equal to 25: " + Evaluator(21,22,39,49,55,34));

console.log();                 // to put space between tasks

/***************************** * Task 6 *****************************/ 
//  ShowMultiples 

function ShowMultiples(num, numMultiples)                // using the declaration approach
{
        for( var i = 1; i <= numMultiples; i++)
        {
        console.log(num + " x " + i + " = " + num*i );
        }
}
// Calling this function 3 times with different number parameters
console.log("First Call of ShowMultiples")
ShowMultiples(52,44);
console.log("\nSecond Call of ShowMultiples")
ShowMultiples(51,30);
console.log("\nThird Call of ShowMultiples")
ShowMultiples(90,5);

console.log();                 // to put space between tasks

/***************************** * Task 7 *****************************/ 
//  Closure/Self Invoking

function Increment()
{    
    var counter = 100;    
    function inner()
    {        
        counter += 100;        
        return counter;    
    }    
    return inner;
}
var counterPlus = Increment();
// Calling “counterPlus” three times
(counterPlus());
(counterPlus());
(counterPlus());
console.log("Final value for the third call is " + counterPlus() + ".");


