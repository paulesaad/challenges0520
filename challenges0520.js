// write a function randomInRange(a,b)
// that returns a random number between a and b

function randomInRange(a, b) {
    return Math.floor(a + (b - a + 1) * Math.random())
}

var x = randomInRange(5, 100)
console.assert(x >= 5 && x <= 100)
var y = randomInRange(-25, 30)
console.assert(y >= -25 && y <= 30)


// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"


(function(){
    var score = 0

    function increaseScore() {
        score++
    }

    function decreaseScore() {
        score--
    }

    function run(){
        increaseScore()
    }
})()


// Write a function that takes a string as input, and returns a copy of that string reversed.
// 
// remember that:
// - you can get and set characters in a string at specific indices
//   i.e. 'abc'[2] // 'c'
//   i.e. 'abc'[3] = 'd' // 'abcd'
// - there is an Array.reverse() method (but not a String.reverse() method)
// str = str.split('').reverse().join('')

function reverse(str) {
    return str.split('').reduce(function(a, v) {
        return v + a
    }, '')
}

console.assert(reverse('hello') === 'olleh')
console.assert(reverse('hello, world') === 'dlrow ,olleh')


// Write a method primes() which returns 
// an array of the first n primes, where 
// n is provided to the method as a 
// parameter.
// 
// Remember that the % operator 
// (modulo) is your friend.  It returns 
// a zero if one number is divisible 
// by another number.  
// 
// In other words, 4 % 2 == 0.


//convoluted isPrime:
// function isPrime(n){
// 	if(n===0 || n===1 || n===2) return true
// 	if(n%2===0) return false
// 	var range = (Math.floor(n/2)-3) / 2
// 	for(var i=0; i<range; i++){
// 		var factor = 2*i + 3
// 		if(n % factor === 0) return false
// 	}
// 	return true
// }
function gimmeArray(n) {
    return new Array(n).join(',-').split(',')
}

function isPrime(n) {
	if(n===1 || n===2 || n===3) return true
    for (var i = 2; i <= Math.floor(n/2); i++) {
        if (n % i === 0) return false
    }
    return true
}

function getNextPrime(i) {
	i++
    while (!isPrime(i)) {i++}
    return i
}

function primes(n) {
    var c = 0
    if(!n) return []
    return gimmeArray(n).reduce(function(a, v, i) {
       c = getNextPrime(c)
       a.push(c)
       return a
    }, [])
}

// tests
// primes(6) --> [1, 2, 3, 5, 7, 11]
console.assert(primes(0).length === 0)
console.assert(primes(1)[0] === 1)
console.assert(primes(2)[1] === 2)
console.assert(primes(3)[2] === 3)
console.assert(primes(6)[5] === 11)
