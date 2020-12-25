/* eslint-env node */
import levenshtein from 'fast-levenshtein';
import {allDividers} from './number-info';

function isPrime(n) {
	let d = 0;
	for (let k = 1; n >= ++k * k; ) {
		d += n % k ? 0 : 1;
	}
	return d < 1;
}

function gcdCalc(a, b) {
	if (!b) {
		return a;
	}
	return gcdCalc(b, a % b);
}

export function sum(a, b) {
	const sum = a + b;
	return {
		sum,
		arithmeticMean: sum / 2,
	};
}

export function difference(a, b) {
	return {
		difference: a - b,
	};
}

export function division(a, b) {
	return {
		division: a / b,
	};
}

export function divRemainder(a, b) {
	return {
		divRemainder: a % b,
	};
}

export function multiplication(a, b) {
	const multi = a * b;
	return {
		multiplication: a * b,
		geometricMean: Math.sqrt(multi),
	};
}

// Greatest common divisor
export function gcd(a, b) {
	return {
		gcd: gcdCalc(a, b),
	};
}

// Least common multiple
export function lcm(a, b) {
	return {
		lcm: (a * b) / gcdCalc(a, b),
	};
}

export function isTwinPrime(a, b) {
	let res = false;
	if (Math.abs(a - b) < 3) {
		res = isPrime(a) && isPrime(b);
	}
	return {
		isTwinPrime: res,
	};
}

export function commonDivisors(a, b) {
	const dividersA = allDividers(a).dividers;
	const dividersB = allDividers(b).dividers;

	const crossDiv = dividersA.filter((n) => dividersB.includes(n));

	return {
		commonDivisors: crossDiv,
		isCoprime: crossDiv.length === 1,
	};
}

export function commonDigits(a, b) {
	const strA = a.toString();
	const strB = b.toString();
	const comDigs = [...strA]
		.filter((dig) => strB.includes(dig))
		.map((dig) => parseInt(dig, 10))
		.sort();
	const uniq = Array.from(new Set([...comDigs]));

	return {
		commonDigits: uniq,
	};
}

export function hypotenuse(a, b) {
	return {
		hypotenuse: Math.sqrt(a * a + b * b),
	};
}

export function levenshteinDistance(a, b) {
	return {
		levenshteinDistance: levenshtein.get(a.toString(), b.toString()),
	};
}
