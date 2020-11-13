import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([50, -10, 0, -4]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);


// const charactersCollection = new CharactersCollection('Xatyb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(300);
linkedList.add(-5);
linkedList.add(-99);
linkedList.add(11);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
