function foo(x){
  if (x == null) {
    return 0; 
  } else {
    return x;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: undefined