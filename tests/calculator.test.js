const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Калькулятор', () => {
  describe('add', () => {
    test('складывает два числа', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });

    test('выбрасывает ошибку для не-чисел', () => {
      expect(() => add('2', 3)).toThrow('Аргумент должен быть числом');
      expect(() => add(2, null)).toThrow('Аргумент должен быть числом');
    });
  });

  describe('subtract', () => {
    test('вычитает два числа', () => {
      expect(subtract(10, 4)).toBe(6);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(-3, -7)).toBe(4);
    });

    test('выбрасывает ошибку для не-чисел', () => {
      expect(() => subtract('10', 4)).toThrow('Аргумент должен быть числом');
    });
  });

  describe('multiply', () => {
    test('умножает два числа', () => {
      expect(multiply(3, 5)).toBe(15);
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(0, 100)).toBe(0);
    });

    test('выбрасывает ошибку для не-чисел', () => {
      expect(() => multiply(3, '5')).toThrow('Аргумент должен быть числом');
    });
  });

  describe('divide', () => {
    test('делит одно число на другое', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(7, 2)).toBe(3.5);
      expect(divide(-10, 2)).toBe(-5);
    });

    test('выбрасывает ошибку при делении на ноль', () => {
      expect(() => divide(5, 0)).toThrow('Деление на ноль');
    });

    test('выбрасывает ошибку для не-чисел', () => {
      expect(() => divide('10', 2)).toThrow('Аргумент должен быть числом');
    });
  });
});
