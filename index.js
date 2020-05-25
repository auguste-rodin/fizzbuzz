// FizzBuzz.
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
         console.log('FizzBuzz')
    } else if(i % 3 === 0) {
         console.log('Fizz');
     } else if(i % 5 === 0) {
         console.log('Buzz');
     } else {
         console.log(i);
     }
  }
}

// begin with setting the counter and making it increment to a hundred (let i = 1; i <= 100; i++).
// if you console.log(i); at this point it will print 1 to 100. 
// then you use the % modulus or remainder function to check the multiples of 3 and  5 first. if that is the case to console.log('FizzBuzz'); You have to check both multiples first before 3 and 5 seperately or it won't print 'FizzBuzz'

// Call function
const output = fizzBuzz();

console.log(output);