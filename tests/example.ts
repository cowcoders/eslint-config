import { sum } from './methods';

const obj = { 'foo': 42 };
const asd = (foo: string, age: number): boolean => {
  console.log(foo, age);
  return false;
};

console.log(obj);
console.log(asd('asd', 45));
console.log(sum(3, 4));
