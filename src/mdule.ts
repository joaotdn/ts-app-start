// eslint-disable-next-line @typescript-eslint/no-namespace
namespace AppNamespace {
  export const namespaceName = 'Joao';

  export class ClassNamespace {
    constructor(public name: string) {}
  }

  export const classNamespace = new ClassNamespace('Joao');

  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace OtherNamespace {
    export const test = 'TESTE';
  }
}
