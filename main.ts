function capitalized(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function hello(name: string): string {
  return "Hello Mr." + capitalized(name);
}

console.log(hello("tanvir"));
console.log(hello("john"));
console.log(hello("Sarah"));
console.log(hello("kai"));
