let globalScope = "This is global scope";

function scopeTest() {
  let functionScope = "This is function scope";
  console.log(globalScope);
  console.log(functionScope);
}
scopeTest()
console.log(globalScope)
console.log(functionScope)
