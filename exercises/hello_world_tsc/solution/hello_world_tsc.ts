function Greeter(greeting: string){
    this.greeting = greeting;
}

Greeter.prototype.greet = function(){
    return "HELLO, " + this.greeting;
}
let greeter = new Greeter("WORLD");

console.log(greeter.greet());