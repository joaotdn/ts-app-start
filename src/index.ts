// type annotations
/* const nome = 'João';
console.log(nome);

const arr: Array<number> = [1, 2, 3];
console.log(arr[0]);

const person: { name: string; age: number; adulto?: boolean } = {
  name: 'João',
  age: 36,
};
console.log(person); */

/* function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}
noReturn('João', 'Teodoro');

const objectAbs: {
  readonly obj: string;
  [key: string]: unknown;
} = {
  obj: 'João Teodoro', // não pode ser alterada
  chaveA: 'teste',
};
objectAbs.obj = 'wrerwer';
objectAbs.chaveA = 'teste';
console.log(objectAbs); */

// Array<T> / T[]
/* function multiplic(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}
function concatStr(...args: string[]): string {
  return args.join(' ');
}
function upper(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}
console.log(multiplic(1, 2, 3));
console.log(concatStr('Teodoro', 'Neto'));
console.log(upper('a', 'b', 'c'));
 */

// Tuple
/* const tupleA: readonly [number, string] = [1, 'Joao']; // imutavel
console.log(tupleA[1]);
const tupleB: [number, ...string[]] = [1]; // mutavel
console.log(tupleB[0]);
const arr1: readonly string[] = ['João', 'Teodoro'];
console.log(arr1[1]);
const arr2: ReadonlyArray<string> = ['João', 'Neto'];
console.log(arr2[1]);
 */
/* function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}
const personA = createPerson('João'); // {firstName: 'João', lastName: undefined}
console.log(personA); */
/* enum Cores {
  VERMELHO = 'Vermelho',
  VERDE = 'Verde',
  AZUL = 'Azul',
  AMARELO = 201,
  ROXO,
}
console.log(Cores[202]); */
/*
let x: unknown;
x = '10';
x = 10;
// diferente no any, o unknown só permite
// operações após uma checagem
if (typeof x === 'number') console.log(x + x);
 */
/* const person = {
  name: 'João' as const,
  age: 36,
};
 */
/* function chooseColor(color: 'Red' | 'Green' | 'Blue'): string {
  return color;
}
console.log(chooseColor('Red')); */
/* type Person = {
  name: string;
  age: number;
  color?: string;
};
type rgb = 'red' | 'green' | 'blue';
type cmyk = 'cian' | 'magent' | 'yellow' | 'black';
type colors = rgb | cmyk;
const person1: Person = {
  name: 'João',
  age: 20,
};
function createPerson(person: Person, color: colors): Person {
  return { ...person, color };
}
console.log(createPerson(person1, 'black')); */
/* type MapStr = (item: string) => string;
function callFn(items: string[], callback: MapStr): string[] {
  const arr: string[] = [];
  for (let i = 0; i < items.length; i++) {
    arr.push(callback(items[i]));
  }
  return arr;
}
console.log(callFn(['a', 'b', 'c'], (item) => item.toUpperCase())); */
/* type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUser = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};
const user = { username: 'joao', password: '123' };
const userBD = { username: 'joao', password: '123s' };
console.log(verifyUser(user, userBD)); */

// type assertion
const body = document.querySelector('body') as HTMLBodyElement;
body.style.background = 'red';
