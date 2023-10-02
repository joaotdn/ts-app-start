declare namespace _ {
  // tslint:disable-next-line no-empty-interface (This will be augmented)
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface global {
    MYGLOBAL: 'GLOBALLLLL';
  }
}
