import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([50, -10, 0, -4]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);


const charactersCollection = new CharactersCollection('Xatyb');
const sorter = new Sorter(charactersCollection);

sorter.sort();
console.log(charactersCollection.data);
