const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection<A ,B>(item:A, collection:B[]): B[] {
    collection.push(item);
    return collection;
}

// Anadir algunas cosas a las colecciones
pushToCollection<boolean,string>(false, stringCollection);
pushToCollection<string,string>('hi', stringCollection);
pushToCollection<[],string>([], stringCollection);

pushToCollection<string,number>('1', numberCollection);
pushToCollection<string,number>('2', numberCollection);
pushToCollection<string,number>('3', numberCollection);

const incrementedByTwo = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);