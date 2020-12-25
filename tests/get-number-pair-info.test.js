import * as methods from '../src/math/number-pair-info';

test('sum', () => {
	expect(methods.sum(10, 20).sum).toEqual(30);
	expect(methods.sum(0, 0).sum).toEqual(0);
});

test('arithmeticMean', () => {
	expect(methods.sum(100, 200).arithmeticMean).toEqual(150);
});

test('difference', () => {
	expect(methods.difference(10, 20).difference).toEqual(-10);
	expect(methods.difference(100, 1).difference).toEqual(99);
});

test('division', () => {
	expect(methods.division(300, 3).division).toEqual(100);
});

test('divRemainder', () => {
	expect(methods.divRemainder(105, 102).divRemainder).toEqual(3);
});

test('multiplication', () => {
	expect(methods.multiplication(10, 20).multiplication).toEqual(200);
});

test('geometricMean', () => {
	expect(methods.multiplication(10, 40).geometricMean).toEqual(20);
});

test('gcd', () => {
	expect(methods.gcd(100, 200).gcd).toEqual(100);
	expect(methods.gcd(105, 200).gcd).toEqual(5);
	expect(methods.gcd(60, 200).gcd).toEqual(20);
});

test('lcm', () => {
	expect(methods.lcm(200, 300).lcm).toEqual(600);
	expect(methods.lcm(135, 230).lcm).toEqual(6210);
});

test('isTwinPrime', () => {
	expect(methods.isTwinPrime(17, 19).isTwinPrime).toEqual(true);
	expect(methods.isTwinPrime(12, 15).isTwinPrime).toEqual(false);
});

test('commonDivisors', () => {
	expect(methods.commonDivisors(250, 300).commonDivisors).toEqual([1, 2, 5, 10, 25, 50]);
	expect(methods.commonDivisors(101, 103).commonDivisors).toEqual([1]);
});

test('commonDigits', () => {
	expect(methods.commonDigits(1223345, 54321123).commonDigits).toEqual([1, 2, 3, 4, 5]);
	expect(methods.commonDigits(12233445, 67890).commonDigits).toEqual([]);
});

test('hypotenuse', () => {
	expect(methods.hypotenuse(100, 200).hypotenuse).toEqual(223.60679774997897);
});

test('levenshteinDistance', () => {
	expect(methods.levenshteinDistance(23345, 23367).levenshteinDistance).toEqual(2);
	expect(methods.levenshteinDistance(23345, 23345).levenshteinDistance).toEqual(0);
});
