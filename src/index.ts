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
// const body = document.querySelector('body') as HTMLBodyElement;
// body.style.background = 'red';

// class Escritor {
//   private _nome: string;

//   private _ferramenta: Ferramenta | null = null;

//   constructor(nome: string) {
//     this._nome = nome;
//   }

//   get nome(): string {
//     return this._nome;
//   }

//   set ferramenta(ferramenta: Ferramenta | null) {
//     this._ferramenta = ferramenta
//   }

//   get ferramenta(): Ferramenta | null {
//     return this._ferramenta;
//   }

//   escrever(): void {
//     if (this._ferramenta === null) {
//       console.log('Não posso escrver sem ferramenta');
//       return;
//     }
//     this._ferramenta.escrever();
//   }
// }

// abstract class Ferramenta {
//   private _nome: string;

//   constructor(nome: string) {
//     this._nome = nome;
//   }

//   get nome(): string {
//     return this._nome;
//   }

//   abstract escrever(): void;
// }

// class Caneta extends Ferramenta {
//   escrever(): void {
//     console.log(`${this.nome} está escrvendo`);
//   }
// }

// const escritor = new Escritor('João');
// const caneta = new Caneta('Bic');
// escritor.ferramenta = caneta;
// console.log(escritor.escrever());
// class CarrinhoDeCompras {
//   private readonly produtos: Produto[] = [];

//   inserirProdutos(...produtos: Produto[]): void {
//     for (const produto of produtos) {
//       this.produtos.push(produto);
//     }
//   }

//   quantidade(): number {
//     return this.produtos.length;
//   }

//   valorTotal(): number {
//     return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
//   }
// }

// class Produto {
//   constructor(public nome: string, public preco: number) {}
// }

// const produto1 = new Produto('Camiseta', 20.0);
// const produto2 = new Produto('Calça', 20.0);
// const carrinho = new CarrinhoDeCompras();
// carrinho.inserirProdutos(produto1, produto2);
// console.log(carrinho.quantidade());
// console.log(carrinho.valorTotal());

// function add(n: unknown, b: unknown): number | string {
//   return typeof n === 'number' && typeof b === 'number' ? n + b : `${n}${b}`;
// }
// console.log(add(1, 5));
// console.log(add('a', 'b'));

// type Pessoa = { tipo: 'pessoa'; nome: string };
// type Animal = { tipo: 'animal'; cor: string };
// type PessoaOuAnimal = Pessoa | Animal;

// class Aluno implements Pessoa {
//   tipo: 'pessoa' = 'pessoa';
//   constructor(public nome: string) {}
// }

// function mostranome(obj: PessoaOuAnimal): void {
//   // if ('nome' in obj) console.log(obj.nome);
//   // if (obj instanceof Aluno) console.log(obj.nome);
//   switch(obj.tipo) {
//     case 'pessoa':
//       console.log(obj.nome);
//       return;
//     case 'animal':
//       console.log(obj.cor);
//       return;
//   }
// }

// mostranome(new Aluno('João'));
// mostranome({ tipo: 'animal', cor: 'Rosa' });

// type CoresObj = typeof coresObj;
// type CoresKeys = keyof CoresObj;

// const coresObj = {
//   red: 'vermelho',
//   green: 'Verde',
//   blue: 'Azul',
//   purple: 'Roxo',
// }

// function translateColors(color: CoresKeys, colors: CoresObj): string {
//   return colors[color];
// }

// console.log(translateColors('red', coresObj));
// console.log(translateColors('green', coresObj));
// console.log(translateColors('blue', coresObj));
// console.log(translateColors('purple', coresObj));

// type Veiculo = {
//   marca: string;
//   ano: number,
// }

// type Car = {
//   brand: Veiculo['marca'];
//   year: Veiculo['ano'];
//   name: string;
// }

// const carro: Car = {
//   brand: 'Ford',
//   year: 2020,
//   name: 'Corsa'
// }

// console.log(carro);

// class Calculator {
//   constructor(public number: number) {}

//   add(n: number): this {
//     this.number += n;
//     return this;
//   }

//   sub(n: number): this {
//     this.number -= n;
//     return this;
//   }

//   div(n: number): this {
//     this.number /= n;
//     return this;
//   }

//   mul(n: number): this {
//     this.number *= n;
//     return this;
//   }
// }

// class subCalculator extends Calculator {
//   pow(n: number): this {
//     this.number **= n;
//     return this;
//   }
// }

// const calc = new subCalculator(10);
// console.log(calc.add(5).mul(2).div(2).sub(1).pow(2));

// // Builder Pattern
// class RequestBuilder {
//   private method: 'get' | 'post' | null = null;
//   private url: string | null = null;

//   setMethod(method: 'get' | 'post'): this {
//     this.method = method;
//     return this;
//   }

//   setUrl(url: string): this {
//     this.url = url;
//     return this;
//   }

//   send():void {
//     console.log(`Sending ${this.method} from ${this.url}`);
//   }
// }

// const req = new RequestBuilder();
// req.setMethod('post').setUrl('http://api.com').send();

// type Adder = {
//   (x: number): number;
//   (x: number, y: number): number;
//   (...arg: number[]): number;
// };

// const adder: Adder = (x: number, y?: number, ...arqs: number[]) => {
//   if (arqs.length > 0) return arqs.reduce((s, v) => s + v, 0) + x + (y || 0);
//   return x + (y || 0);
// };

// console.log(adder(1, 2, 3, 4, 5));

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const doc: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
};

console.log(doc.data?.toDateString() ?? 'Coalescencia nula');
