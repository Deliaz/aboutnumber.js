/* eslint-env node */
import crypto from 'crypto';
import {convert as romanNumerals} from 'roman-numeral';
import morsify from 'morsify';
import isPalindrome from 'is-palindrome';
import prettyBytes from 'pretty-bytes';
import n2words from 'n2words';
import humanizeDuration from 'humanize-duration';
import rgba from 'rgba-convert';
import {PRECISION} from '../const';

export function number(n) {
	return {
		number: n,
	};
}

/**
 * Cross number sum
 */
export function numeralSum(n) {
	let sum = 0;

	while (n > 0) {
		sum += n % 10;
		n = Math.floor(n / 10);
	}

	return {
		numeralSum: sum,
	};
}

/**
 * Cross number multiplication
 */
export function numeralMultiplication(n) {
	let sum = 1;

	if (n === 0) {
		sum = 0;
	}

	while (n > 0) {
		sum *= n % 10;
		n = Math.floor(n / 10);
	}

	return {
		numeralMultiplication: sum,
	};
}

/**
 * Cross number multiplication without zeroes
 */
export function numeralMultiplicationWoZeroes(n) {
	let sum = 1;

	if (n === 0) {
		sum = 0;
	}

	while (n > 0) {
		if (n % 10 !== 0) {
			sum *= n % 10;
		}
		n = Math.floor(n / 10);
	}

	return {
		numeralMultiplicationWoZeroes: sum,
	};
}

export function allDividers(n) {
	const small = [];
	const large = [];
	const end = Math.floor(Math.sqrt(n));

	for (let i = 1; i <= end; i++) {
		if (n % i === 0) {
			small.push(i);
			if (i * i !== n) {
				large.push(n / i);
			} // Do not include square roots twice
		}
	}
	large.reverse();
	const result = small.concat(large);

	const divSum = result.reduce((mem, n) => {
		mem += n;
		return mem;
	}, 0);
	const divSumExcludeN = divSum - n;

	return {
		dividers: result,
		dividersCount: result.length,
		dividersSum: divSum,
		isPrime: result.length === 2 && n !== 1,
		isDeficient: divSumExcludeN < n,
		isAbundant: divSumExcludeN > n,
		isPerfect: divSumExcludeN === n,
	};
}

export function palindrome(n) {
	return {
		isPalindrome: isPalindrome(n),
	};
}

export function primeFactorization(n) {
	const factors = [];
	let divisor = 2;

	while (n >= 2) {
		if (n % divisor === 0) {
			factors.push(divisor);
			n = n / divisor;
		} else {
			divisor++;
		}
	}

	return {
		primeFactorization: factors,
		isSemiPrime: factors.length === 2,
	};
}

export function numeralBase(n) {
	return {
		binary: n.toString(2),
		ternary: n.toString(3),
		senary: n.toString(6),
		octal: n.toString(8),
		hex: n.toString(16).toUpperCase(),
	};
}

export function fibonacci(n) {
	if (n === 0) {
		return {
			isFibonacci: true,
			fibonacciIndex: 0,
		};
	}

	// Gessel's Test:
	// n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both is a perfect square
	const a = Math.sqrt(5 * n * n + 4);
	const b = Math.sqrt(5 * n * n - 4);
	const isFibonacci = parseInt(a) === a || parseInt(b) === b;

	let fibonacciIndex = -1;
	if (isFibonacci) {
		const fibs = [0, 1];

		for (let j = 1; j <= n; j++) {
			const newFib = fibs[j] + fibs[j - 1];
			fibs.push(newFib);
			if (newFib === 1) {
				fibonacciIndex = [j, j + 1];
			} else if (newFib === n) {
				fibonacciIndex = j + 1;
				break;
			}
		}
	}

	return {
		isFibonacci,
		fibonacciIndex,
	};
}

export function trigonometric(n) {
	return {
		sine: Math.sin(n),
		cosine: Math.cos(n),
		tangent: Math.tan(n),
	};
}

export function logarithm(n) {
	return {
		naturalLogarithm: Math.log(n),
		commonLogarithm: Math.log10(n),
		binaryLogarithm: Math.log2(n),
	};
}

export function squareRoot(n) {
	return {
		squareRoot: Math.sqrt(n),
	};
}

export function cubeRoot(n) {
	let cbrt = Math.pow(n, 1 / 3);
	const computedDiffWithRealAnswer = 1 - (cbrt % (cbrt | 0));

	if (computedDiffWithRealAnswer < PRECISION) {
		cbrt = Math.ceil(cbrt);
	}

	return {
		cubeRoot: cbrt,
	};
}

export function square(n) {
	return {
		square: n * n,
	};
}

export function numeralSystems(n) {
	const MAX_FOR_ROMAN = 4000;
	const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
	const nStr = n.toString();
	let arabicRes = '';

	for (let i = 0; i < nStr.length; i++) {
		arabicRes += ARABIC_DIGITS[nStr[i]];
	}

	return {
		romanNumerals: n <= MAX_FOR_ROMAN ? romanNumerals(n) : '',
		arabicNumerals: arabicRes,
	};
}

export function unixDate(n) {
	const date = new Date(n * 1000);
	let dateStr = '';

	if (date instanceof Date && !isNaN(date)) {
		dateStr = date.toUTCString();
	}

	return {
		unixDate: dateStr,
	};
}

export function hashes(n) {
	const md5 = crypto.createHash('md5').update(n.toString()).digest('hex');

	const sha1 = crypto.createHash('sha1').update(n.toString()).digest('hex');

	return {
		md5,
		sha1,
	};
}

export function base64(n) {
	const buf = new Buffer.from(n.toString());
	return {
		base64: buf.toString('base64'),
	};
}

export function maxDivBase2(n) {
	return {
		maxDividerBase2: n & -n,
	};
}

export function possibleBase(n) {
	const maxNumber = Math.max(...n.toString().match(/\d{1}/g));
	const possibleBase = maxNumber + 1;
	const names = [
		'unary',
		'binary',
		'ternary',
		'quaternary',
		'quinary',
		'senary',
		'septenary',
		'octal',
		'nonary',
		'decimal',
	];
	return {
		possibleNumeralSystem: possibleBase,
		possibleNumeralSystemName: names[possibleBase - 1],
		fromBinaryToDecimal: possibleBase <= 2 ? parseInt(n, 2) : '',
		fromTernaryToDecimal: possibleBase <= 3 ? parseInt(n, 3) : '',
		fromOctalToDecimal: possibleBase <= 8 ? parseInt(n, 8) : '',
	};
}

export function digitCount(n) {
	// TODO "Five-digit" number
	return {
		digitCount: n.toString().length,
	};
}

export function morseCode(n) {
	return {
		morseCode: morsify.encode(n.toString()),
	};
}

export function reversed(n) {
	let reversed = 1 / n;

	if (reversed === Infinity) {
		reversed = 'Infinity';
	}

	return {
		reversedNumber: reversed,
	};
}

export function bytes(n) {
	return {
		fromBytes: prettyBytes(n),
		fromKilobytes: prettyBytes(parseInt(n / 1000)),
	};
}

export function toWords(n, {locale} = {locale: 'en'}) {
	return {
		toWords: n2words(n, {lang: locale}),
	};
}

export function duration(n, {locale} = {locale: 'en'}) {
	const params = {
		maxDecimalPoints: 2,
		language: locale,
	};

	return {
		durationFromMillis: humanizeDuration(n, params),
		durationFromSeconds: humanizeDuration(n * 1000, params),
		durationFromMinutes: humanizeDuration(n * 60000, params),
		durationFromHours: humanizeDuration(n * 3.6e6, params),
		durationFromDays: humanizeDuration(n * 8.64e7, params),
	};
}

export function colors(n) {
	const MAX_INT_COLOR = 4294967295;

	if (n > MAX_INT_COLOR) {
		return {};
	}

	return {
		rgba: rgba(n),
		rgbaCss: rgba.css(n),
		rgbaHex: rgba.hex(n),
	};
}
