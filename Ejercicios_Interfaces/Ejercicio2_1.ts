interface CartItem{ 
    id: number, 
    titulo: string, 
    idVariante?: number };

function agregarAlCarro(item: CartItem) {
    console.log('[Ejercicio 2.1]', `Agregando "${item.titulo}" al carro de compras.`);
}

agregarAlCarro({ id: 1, titulo: 'Zapatos de cuero' });