function greet(greeting: string) {
    return greeting.toUpperCase();
}
const defaultGreeting = greet('hola');
const portugueseGreeting = greet('Oi como vai!');
console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);