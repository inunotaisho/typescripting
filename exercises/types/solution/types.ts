function Greeter(greeting: number){
    this.greeting = greeting;
}

Greeter.prototype.greet = function(){
    return "Hello, " + this.greeting;
}
let greeter = new Greeter("world");

console.log(greeter.greet());