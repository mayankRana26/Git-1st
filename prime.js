let num=10;
let count=0;
for(let i=0;i<=num;i++){
    if(num%i==0){
        count++
    }
}
let isPrime=count==2 ? "yes,it is prime": "No,it is not prime"

console.log(isPrime)