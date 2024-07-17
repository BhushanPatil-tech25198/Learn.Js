// Immedietly Invoke function Expression (IIFE)

(function chai() {
    // name iife
console.log(`DB CONNECTED`);
})();
// if you write two iife function so most to last function are closed in semicolon then you write second function

((name) => {
    //simple with paranthesis iife
    console.log(`DB CONNECTED TWO ${name}`);
})('bhushan')

