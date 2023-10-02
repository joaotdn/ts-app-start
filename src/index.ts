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

// import { AppNamespace } from './mdule';

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

// type Documento = {
//   titulo: string;
//   texto: string;
//   data?: Date;
// };

// const doc: Documento = {
//   titulo: 'O titulo',
//   texto: 'O texto',
// };

// console.log(doc.data?.toDateString() ?? 'Coalescencia nula');
// type FilterCall<U> = (value: U, index?: number, array?: U[]) => boolean;

// function myFilter<T>(array: T[], callbackfn: FilterCall<T>): T[] {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callbackfn(array[i])) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filtered = myFilter(array, (value) => value < 5);
// console.log(filtered);
// interface PessoaProtocolo<T = string, U = number> {
//   nome: T;
//   sobrenome: T;
//   idade: U;
// }

// const aluno: PessoaProtocolo<string, number> = {
//   nome: 'Joao',
//   sobrenome: 'Teodoro',
//   idade: 37,
// };

// const aluno2: PessoaProtocolo = {
//   nome: 'Luis',
//   sobrenome: 'Henrique',
//   idade: 32,
// };

// console.log(aluno, aluno2);

// restrição em generics
// type ObterChave = <O, K extends keyof O>(obj: O, key: K) => O[K];

// const getKey: ObterChave = (obj, key) => obj[key];

// const animal = {
//   cor: 'rosa',
//   vacina: ['V1', 'V2'],
// };

// const vac = getKey(animal, 'vacina');
// const cor = getKey(animal, 'cor');

// console.log(vac, cor);

// Generics com classes
// class Pessoa<T, U> {
//   constructor(public nome: T, public idade: U) {}
// }

// // Estrutura de dados PILHA
// class Pilha<T> {
//   private contador = 0;
//   private elementos: { [k: number]: T } = {};

//   push(elemento: T): void {
//     this.elementos[this.contador] = elemento;
//     this.contador++;
//   }

//   pop(): T | void {
//     if (this.isEmpty()) return undefined;

//     this.contador--;
//     const elemento = this.elementos[this.contador];
//     delete this.elementos[this.contador];
//     return elemento;
//   }

//   isEmpty(): boolean {
//     return this.contador === 0;
//   }

//   length(): number {
//     return this.contador;
//   }

//   show(): void {
//     for (const k in this.elementos) {
//       console.log(this.elementos[k]);
//     }
//   }
// }

// const p = new Pilha<number>();
// p.push(1);
// p.push(2);
// p.push(3);
// p.push(4);
// const e = p.pop();
// console.log(p, e);
// function union<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
//   return { ...obj1, ...obj2 };
// }

// const obj1 = { k1: 'v1' };
// const obj2 = { k2: 'v2' };
// const u = union(obj1, obj2);
// console.log(u);

// PREDICATE
// function isNumber(value: unknown): value is number {
//   return typeof value === 'number';
// }

// function sum<T>(...args: T[]): number {
//   const result = args.reduce((s, v) => {
//     if (isNumber(s) && isNumber(v)) {
//       return s + v;
//     }
//     return s;
//   }, 0);
//   return result;
// }

// console.log(sum(1, 2, 3));
// console.log(sum(...[1, 2, 3, 'a', 'b', 4]));
// console.log(sum('a', 'b'));

// RECORD
// const obj1: Record<string, string | number> = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   udade: 30,
// };
// console.log(obj1);

// // REQUIRED = torna as propiedades opcionais em obrigatorias
// type PessoaProtocolo = {
//   nome?: string;
//   idade?: number;
// };

// type PessoaRequired = Required<PessoaProtocolo>;

// const pessoa1: PessoaRequired = {
//   nome: 'Joao',
//   idade: 37,
// };
// console.log(pessoa1);

// // Partial
// type PessoaPartial = Partial<PessoaRequired>; // transforma campos obrigatorios em requeridos
// // Readonly
// type pessoaReadOnly = Readonly<PessoaRequired>; // propriedades imutaveis apenas leitura
// // Pick
// type PessoaPick = Pick<PessoaRequired, 'nome'>; // pega apenas os campos marcados

// const pessoaPick: PessoaPick = {
//   nome: 'Joao',
// };
// console.log(pessoaPick);

// type ABC = 'A' | 'B' | 'C';
// type CDE = 'C' | 'D' | 'E';
// type TipoExclude = Exclude<ABC, CDE>;
// type TipoExtract = Extract<ABC, CDE>;

// type AccountMongo = {
//   _id: string;
//   nome: string;
//   idade: number;
// };

// type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
//   id: string;
// };

// const accountMongo: AccountMongo = {
//   _id: 'apsdpaiosydpiasud',
//   nome: 'Joao',
//   idade: 37,
// };

// function mapAccount(accountMongo: AccountMongo): AccountApi {
//   const { _id, ...data } = accountMongo;
//   return { ...data, id: _id };
// }

// const api = mapAccount(accountMongo);
// console.log(api);

// type VotationOpts = {
//   qtdVts: number;
//   opt: string;
// };

// class Votation {
//   private _opts: VotationOpts[] = [];
//   constructor(public anwser: string) {}

//   addOpt(opt: VotationOpts): void {
//     this._opts.push(opt);
//   }

//   vote(index: number): void {
//     if (!this._opts[index]) return;
//     this._opts[index].qtdVts++;
//   }

//   get opts(): VotationOpts[] {
//     return this._opts;
//   }
// }

// class app {
//   private votes: Votation[] = [];
//   addVotation(votation: Votation): void {
//     this.votes.push(votation);
//   }

//   showVotations(): void {
//     for (const votation of this.votes) {
//       console.log(votation.anwser);
//       for (const opts of votation.opts) {
//         console.log(opts.opt, opts.qtdVts);
//       }
//       console.log('###');
//       console.log('');
//     }
//   }
// }

// const v1 = new Votation('Qual sua linguagem de programação favorita?');
// v1.addOpt({ opt: 'Pyton', qtdVts: 0 });
// v1.addOpt({ opt: 'JS', qtdVts: 0 });
// v1.addOpt({ opt: 'PHP', qtdVts: 0 });

// v1.vote(0);
// v1.vote(0);
// v1.vote(0);
// v1.vote(1);
// v1.vote(1);
// v1.vote(2);
// v1.vote(2);
// v1.vote(0);

// const votesApp = new app();
// votesApp.addVotation(v1);
// votesApp.showVotations();

// const v2 = new Votation('Qual sua cor favorita?');
// v2.addOpt({ opt: 'Vermelha', qtdVts: 0 });
// v2.addOpt({ opt: 'Azul', qtdVts: 0 });
// v2.addOpt({ opt: 'Verde', qtdVts: 0 });

// v2.vote(0);
// v2.vote(1);
// v2.vote(1);
// v2.vote(1);
// v2.vote(0);
// v2.vote(0);
// v2.vote(2);
// v2.vote(2);

// const colorApp = new app();
// colorApp.addVotation(v2);
// colorApp.showVotations();

// DECORATORS
// função que finge ser o objeto da classe, mas fazem alguma coisa antes de entregar o objeto

// @decorator
// class Animal {
//   constructor(public nome: string, public cor: string) {}
// }

// function decorator<T extends new (...args: any[]) => any>(target: T): T {
//   return class extends target {
//     constructor(...args: any[]) {
//       super(...args);
//       this.nome = this.invert(args[0]);
//       this.cor = this.invert(args[1]);
//     }

//     invert(value: string): string {
//       return value.split('').reverse().join('');
//     }
//   };
// }

// const animal = new Animal('cachorro', 'roxo');
// console.log(animal);

// interface Constructor {
//   new (...args: any[]): any;
// }

// function lowercaseDecorator(param1: string, param2: string) {
//   return function (target: Constructor) {
//     return class extends target {
//       firstname: string;
//       lastname: string;

//       constructor(...args: any[]) {
//         super(...args);
//         this.firstname = `${param1}: ${this.lowercase(args[0])}`;
//         this.lastname = `${param2}: ${this.lowercase(args[1])}`;
//       }

//       lowercase(value: string): string {
//         return value.toLowerCase();
//       }
//     };
//   };
// }

// function uppercaseDecorator(param1: string, param2: string) {
//   return function (target: Constructor) {
//     return class extends target {
//       firstname: string;
//       lastname: string;

//       constructor(...args: any[]) {
//         super(...args);
//         this.firstname = `${param1}: ${this.uppercase(args[0])}`;
//         this.lastname = `${param2}: ${this.uppercase(args[1])}`;
//       }

//       uppercase(value: string): string {
//         return value.toUpperCase();
//       }
//     };
//   };
// }

// @lowercaseDecorator('Nome', 'Sobrenome')
// @uppercaseDecorator('Nome', 'Sobrenome')
// class People {
//   constructor(public firstname: string, public lastname: string) {}
// }

// const p = new People('João', 'Teodoro');
// console.log(p.firstname, p.lastname);

// function decorator(
//   classPrototype: any,
//   nomeMetodo: string,
//   descriptor: PropertyDescriptor,
// ): PropertyDescriptor {
//   console.log(classPrototype);
//   console.log(nomeMetodo);
//   console.log(descriptor);
//   return {
//     value: function (...args: string[]) {
//       return args[0];
//     },
//   };
// }

// class Pessoa {
//   nome: string;
//   sobrenome: string;
//   idade: number;

//   constructor(nome: string, sobrenome: string, idade: number) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//   }

//   @decorator
//   fullname(msg: string): string {
//     return `${msg}: ${this.nome} ${this.sobrenome}`;
//   }
// }

// const p = new Pessoa('João', 'Teodoro', 37);
// p.fullname('Nome: ');

// function decorator(
//   classPrototype: any,
//   nameMethod: string | symbol,
//   index: number,
// ): any {
//   console.log(classPrototype);
//   console.log(nameMethod);
//   console.log(index);
//   return 'anything';
// }

// function attrDecorator(classPrototype: any, name: string | symbol): any {
//   let propertyValue: any;
//   return {
//     get: () => propertyValue,
//     set: (value: any) => {
//       if (typeof value === 'string') {
//         propertyValue = value.split('').reverse().join('');
//         return;
//       }
//       propertyValue = value;
//     },
//   };
// }

// class People {
//   @attrDecorator
//   firstname: string;
//   @attrDecorator
//   lastname: string;
//   @attrDecorator
//   age: number;

//   constructor(firstname: string, lastname: string, age: number) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//   }

//   getFullname(header: string): string {
//     return `${header}: ${this.firstname} ${this.lastname} - ${this.age} anos`;
//   }
// }

// const people = new People('Joao', 'Teodoro', 37);
// console.log(people.getFullname('Nome: '));

// // Tipo do construtor da classe
// type Constructor = new (...args: any[]) => any;

// // Classes
// function decoradorDeClasse(construtor: Constructor): any {
//   // Chamado na criação da classe
//   console.log('CLASSE');
//   console.log(construtor);
//   console.log('###');

//   // Retorno pode ser omitido
//   return class extends construtor {
//     // faça o que desejar
//   };
// }

// // Método de instância (normal)
// function decoradorDeMetodo(
//   prototipoDaClasse: any,
//   nomeDoMetodo: string,
//   descritorDePropriedade: PropertyDescriptor,
// ): any {
//   // Chamado na criação do método (não precisa chamar o método)
//   console.log('MÉTODO NORMAL');
//   console.log(prototipoDaClasse);
//   console.log(nomeDoMetodo);
//   console.log(descritorDePropriedade);
//   console.log('###');

//   // Retorno pode ser omitido
//   return {
//     // value altera o retorno original:
//     // value: (...args: any[]) => console.log(args),
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   };
// }

// // Método estático
// function decoradorDeMetodoEstatico(
//   classConstructor: Constructor,
//   nomeDoMetodo: string,
//   descritorDePropriedade: PropertyDescriptor,
// ): any {
//   // Chamado na criação do método (não precisa chamar o método)
//   console.log('MÉTODO ESTÁTICO');
//   console.log(classConstructor);
//   console.log(nomeDoMetodo);
//   console.log(descritorDePropriedade);
//   console.log('###');

//   // Retorno pode ser omitido
//   return {
//     // Use get/set OU value
//     enumerable: true,
//     configurable: true,
//   };
// }

// // Parâmetro de método
// function decoradorDeParametroDeMetodo(
//   prototipoDaClasse: any,
//   nomeDoMetodo: string,
//   indiceDaPropriedade: number,
// ): any {
//   // Chamado na criação do método
//   console.log('PARÂMETRO DE MÉTODO');
//   console.log(prototipoDaClasse);
//   console.log(nomeDoMetodo);
//   console.log(indiceDaPropriedade);
//   console.log('###');

//   // Retorno é ignorado
// }

// // Parâmetro de método estático
// function decoradorDeParametroDeMetodoEstatico(
//   classConstructor: Constructor,
//   nomeDoMetodo: string,
//   indiceDaPropriedade: number,
// ): any {
//   // Chamado na criação do parâmetro (não precisa chamar o método)
//   console.log('PARÂMETRO DE MÉTODO ESTÁTICO');
//   console.log(classConstructor);
//   console.log(nomeDoMetodo);
//   console.log(indiceDaPropriedade);
//   console.log('###');

//   // Retorno é ignorado
// }

// // Propriedade
// function decoradorDePropriedade(
//   prototipoDaClasse: any,
//   nomePropriedade: string,
// ): any {
//   // Chamado na criação da propriedade
//   console.log('DECORADOR DE PROPRIEDADE');
//   console.log(prototipoDaClasse);
//   console.log(nomePropriedade);
//   console.log('###');

//   // Retorno pode ser omitido
//   // Use get e set para manipular o valor da propriedade
//   let valorPropriedade: any;
//   return {
//     enumerable: true,
//     configurable: true,
//     get: () => valorPropriedade,
//     set: (valor: any) => {
//       if (typeof valor === 'string') {
//         valorPropriedade = valor.split('').reverse().join('');
//         return;
//       }
//       valorPropriedade = valor;
//     },
//   };
// }

// // Propriedade estática
// function decoradorDePropriedadeEstatica(
//   classConstructor: any,
//   nomePropriedade: string,
// ): any {
//   // Chamado na criação da propriedade estática
//   console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
//   console.log(classConstructor);
//   console.log(nomePropriedade);
//   console.log('###');

//   // Retorno pode ser omitido
//   return {
//     // Use get/set OU value
//     enumerable: true,
//     configurable: true,
//   };
// }

// // Getter/Setter
// function decoradorDeGetterESetterNormal(
//   prototipoDaClasse: any,
//   nomePropriedade: string,
//   descritorDePropriedade: PropertyDescriptor,
// ): any {
//   // Chamado na criação do método
//   // (só pode ser aplicado no getter ou no setter - não em ambos)
//   console.log('GETTER/SETTER normal');
//   console.log(prototipoDaClasse);
//   console.log(nomePropriedade);
//   console.log(descritorDePropriedade);
//   console.log('###');

//   // Retorno pode ser omitido
//   return {
//     // Use get/set OU value
//     enumerable: true,
//     configurable: true,
//   };
// }

// // Getter/Setter estático
// function decoradorDeGetterESetterEstatico(
//   classConstructor: Constructor,
//   nomePropriedade: string,
//   descritorDePropriedade: PropertyDescriptor,
// ): any {
//   // Chamado na criação do método
//   // (só pode ser aplicado no getter ou no setter - não em ambos)
//   console.log('GETTER/SETTER estático');
//   console.log(classConstructor);
//   console.log(nomePropriedade);
//   console.log(descritorDePropriedade);
//   console.log('###');

//   // Retorno pode ser omitido
//   return {
//     // Use get/set OU value
//     enumerable: true,
//     configurable: true,
//   };
// }

// // A classe e o uso dos decorators

// @decoradorDeClasse
// export class UmaPessoa {
//   @decoradorDePropriedade
//   nome: string;
//   sobrenome: string;
//   idade: number;

//   @decoradorDePropriedadeEstatica
//   static propriedadeEstatica = 'VALOR PROPRIEDADE ESTÁTICA';

//   constructor(nome: string, sobrenome: string, idade: number) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;
//   }

//   @decoradorDeMetodo
//   metodo(@decoradorDeParametroDeMetodo msg: string): string {
//     return `${this.nome} ${this.sobrenome}: ${msg}`;
//   }

//   @decoradorDeMetodoEstatico
//   static metodoEstatico(
//     @decoradorDeParametroDeMetodoEstatico msg: string,
//   ): string {
//     return UmaPessoa.propriedadeEstatica + ' - ' + msg;
//   }

//   get nomeCompleto(): string {
//     return this.nome + ' ' + this.sobrenome;
//   }

//   @decoradorDeGetterESetterNormal
//   set nomeCompleto(valor: string) {
//     const palavras = valor.split(/\s+/g);
//     const primeiroNome = palavras.shift();
//     if (!primeiroNome) return;
//     this.nome = primeiroNome;
//     this.sobrenome = palavras.join(' ');
//   }

//   @decoradorDeGetterESetterEstatico
//   static get staticPropertyGetterSetter(): string {
//     return UmaPessoa.propriedadeEstatica;
//   }

//   static set staticPropertyGetterSetter(value: string) {
//     UmaPessoa.propriedadeEstatica = value;
//   }
// }

// // Uso da classe

// const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
// pessoa.nomeCompleto = 'João Silva Oliveira';
// const metodo = pessoa.metodo('Olá mundo!');
// const metodoEstatico = UmaPessoa.metodoEstatico('Olá mundo!');
// console.log(pessoa);
// console.log(metodo);
// console.log(metodoEstatico);
// console.log(UmaPessoa.propriedadeEstatica);
// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/triple-slash-reference
// /// <reference path="mdule.ts" />
// console.log(AppNamespace.OtherNamespace.test);
// import { sum } from './modulo';
// console.log(sum(1, 3) as number);
// import validator from 'validator';
// import _ from './lodash-extensions';

// console.log(_.clone([1, 2, 3, 4, 5]));
// console.log(_.mul([3, 4, 5]));
