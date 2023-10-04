describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10); // mais usados para objetos
    expect(number).not.toBeNull();

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    // valores aproximados
    expect(number).toBeCloseTo(10.0001);
    expect(number).toBeCloseTo(9.9991);

    // checar se existe propriedades
    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Joao', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(anotherPerson).not.toHaveProperty('lastname');
    expect(anotherPerson.name).toBe('Joao');
  });
});
