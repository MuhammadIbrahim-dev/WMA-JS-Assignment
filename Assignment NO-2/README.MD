# WMA ASSGNMENT 
## Assignment # 2
# see aassignment
If-else exercise
1. Write a js program to find maximum between two numbers.
2. Write a js program to find maximum between three numbers.
3. Write a js program to check whether a number is negative, positive or zero.
4. Write a js program to check whether a number is divisible by 5 and 11 or not.
5. Write a js program to check whether a number is even or odd.
6. Write a js program to check whether a year is leap year or not.a js program to check whether a character is alphabet or not.
8. Write a js program to input any alphabet and check whether it is vowel or consonant.
7. Write 
9. Write a js program to input any character and check whether it is alphabet, digit or special character.
10. Write a js program to check whether a character is uppercase or lowercase alphabet.
11. Write a js program to input week number and print week day.
12. Write a js program to input month number and print number of days in that month.
13. Write a js program to count total number of notes in given amount.
```
 function countamount(amounts) {
    let notes = [1000,500,100,50,30,20,10];
     let notecounts = {};
     for (let note of notes)
        if ( amounts > note) {
             let count = Math.floor(amounts / note);
            notecounts[note]=count;
            amounts -= count * note;
        } 
          return(
            notecounts
        )
        }
 let amounts =123;
 let result = countamount(amounts)
 console.log(result);
 countamount()
```
14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
17. Write a js program to find all roots of a quadratic equation.
18. Write a js program to calculate profit or loss.
19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F
20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%
21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
For first 50 units Rs. 0.50/unit
For next 100 units Rs. 0.75/unit
For next 100 units Rs. 1.20/unit
For unit above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill

