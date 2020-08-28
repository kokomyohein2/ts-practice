import {NumbersCollection} from "./NumbersCollection";
import {Sorter} from "./Sorter";

const numbersCollection = new NumbersCollection([4, 2, 6, 3, 5, 1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection);