class Animal {
   protected name: string;
    constructor(name: string) {
        this.name = name;
     }
    move(meters: number) {
        console.log(`${this.name} se movio ${meters}m.`);
    }
}

class Snake extends Animal{
    move(meters: number) {
    console.log('Deslizandose...');
    // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
    // de 5 metros
    }
}

class Pony extends Animal{
    move(meters: number) {
    console.log('Galopando...');
    // debe invocar al metodo `move` del padre con un galope predeterminado
    // de 60 metros
    }
}
// La clase Animal no debe ser instanciable.
// Eliminar o comentar una vez que se logra el error deseado.
const andrew = new Animal("Andrew el Animal");
andrew.move(5);

const sammy = new Snake("Sammy la serpiente");
sammy.move(5);
// console.log(sammy.name); // debe devolver error
    
const pokey = new Pony("Pokey el pony");
pokey.move(34);
// console.log(pokey.name); // Should devolver error 
// Se comenta para que funcione