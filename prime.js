let num=10;
let count=0;
for(let i=0;i<=num;i++){
    if(num%i==0){
        count++
    }
}
(count==2)? console.log("yes,it is prime"): console.log("No,it is not prime")