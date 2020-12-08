import {NumbersCollection} from "./NumbersCollection";
import {Sorter} from "./Sorter";
import {CharactersCollections} from "./CharactersCollections";

// const numbersCollection = new NumbersCollection([4, 2, 6, 3, 5, 1]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection);

const charactersCollection = new CharactersCollections('aXyybC');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection);