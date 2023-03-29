function fibonacci(n){
  if(n <= 1){
      return n;
  }
  else{
      return fibonacci(n-1) + fibonacci(n-2);
  }
}

let n = parseInt(prompt("Enter the value of n: "));
let sum = 0;
console.log("Fibonacci Series:");
for(let i = 0; i < n; i++){
  let fib_num = fibonacci(i);
  console.log(fib_num);
  sum += fib_num;
}
console.log(`Sum of first ${n} numbers: ${sum}`);
