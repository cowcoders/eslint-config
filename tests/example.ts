import { sum } from './methods';

const obj = { 'foo': 42 };
const asd = (foo: string, age: number): boolean => {
  console.log(foo, age);
  return false;
};

console.log(obj);
console.log(asd('asd', 45));
console.log(sum(3, 4));
sum(3, 8);

export enum actions {
  move = 'move',
  remove = 'remove'
}

const a = 2 + 2;
console.log(a);

function test() {
  return async (resolve) => {
    return await resolve();
  };
}

async function testA() {
  const result = await boo();
  console.log(result);
  return result;
}

async function boo() {
  return Math.random();
}

console.log(test);
console.log(testA);

if (2) {
  console.log('2');
}

if (3) {
  console.log('2');
}

const test1 = Math.random();

function calc() {
  switch (test1) {
    case 1243:
      return 1;
    default:
      return 10;
  }
}

calc();

const state = [1, 2];

const [foo, value] = state;
console.log(foo, value);


const check = async () => {
  return 1;
};

check()
.then(() => {
  console.log(1);
})
.catch(console.error);
