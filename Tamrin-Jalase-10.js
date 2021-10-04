
// ######Max#####

function findMax(a,b){
    if (a>b){
        console.log(a)
    }
    else{
       console.log(b)
    }
}
findMax(-30 ,20)

// ######Min#####

function findMin(a,b){
    if (a<b){
        console.log(a)
    }
    else{
        console.log(b)
    }
}
findMin(-1 ,20)

// #####StringType

function stringType(a){
    if (typeof a ==="string"){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
stringType(1)
stringType("Abedi")

// #####FizzBuzz

function fizzBuzz(a){
    if (a%15===0){
        console.log("FizzBuzz")
    }
   else if (a%5===0){
        console.log("Buzz")
    }
    else if (a%3===0){
        console.log("Fizz")
    }
    else{
        console.log(a)
    }
}
fizzBuzz(30)
fizzBuzz(20)
fizzBuzz(18)
fizzBuzz(17)

// #####FindPowOfTwo

function findPowOfTwo(n) {
    let m=0;
    while (2**m<n){
        m=m+1;
    }
    console.log(2**(m));
}
findPowOfTwo(95)
findPowOfTwo(1010)

// #####FindPerfectNumber

function findPerfectNumber(n) {
    let m = 1;
    let s = 0;
    while (m < n) {
        if (n % m === 0){
            s = s + m;
        }
        m = m + 1
    }
   if (s===n){
       console.log("Yes")
   }
   else console.log("No")

}
findPerfectNumber(27)
findPerfectNumber(6)

// #####FindPrimeNumber

function findPrimeNumber(x) {
    let j = 0;
    let i = 2;
    if(x===1) j=1;
    if(x===0) j=1;
    while (i<x) {
        if(x%i===0){
        j=1;
        }
       i++
    }
    if(j===0) {
        return ("Yes");
    }
     else return ("No")
}
function findPrimeNumberInRange(a,b){
    let i=a+1;
    let arr=[];
    while (i<b) {
        if (findPrimeNumber(i) === "Yes") {
            arr.push(i);
        }
        i++
    }
    return arr
}
console.log(findPrimeNumberInRange(4,10))
console.log(findPrimeNumberInRange(11,20))

// #####FindPrimeNumber

function findHardNumber(x){
    let i=x;
    let k=x.toString().length;
    while(k>0){
        i=String(i).slice(0,k);
        if(findPrimeNumber(i)==="Yes") {
            i=i/10-(i%10)/10;
            k--;
        }
        else return("No")
    }
   return ("Yes")
}
function findHardNumberRange(x){
    let i=2*(10**(x-1));
    let j=10**x;
    let arr =[];
    while (i<j){
        if(findHardNumber(i)==="Yes"){
            arr.push(i)
        }
        i++
    }
    return arr
}
console.log(findHardNumberRange(3))
console.log(findHardNumberRange(2))






