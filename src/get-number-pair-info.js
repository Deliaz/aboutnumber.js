import {MAX_NUMBER_PAIR, MIN_NUMBER_PAIR} from './const';
import * as numberPairInfo from './math/number-pair-info';
import {isNotInt} from './utils';

export default function getNumberPairInfo(a, b) {
	if (isNaN(a)) {
		throw new Error('The first parameter is NaN');
	}

	if (isNaN(b)) {
		throw new Error('The second parameter is NaN');
	}

	if (isNotInt(a) || isNotInt(b)) {
		throw new Error('Not integer numbers');
	}

	if (a < MIN_NUMBER_PAIR || a > MAX_NUMBER_PAIR || b < MIN_NUMBER_PAIR || b > MAX_NUMBER_PAIR) {
		throw new Error(`Out of range: MIN: ${MIN_NUMBER_PAIR}, MAX: ${MAX_NUMBER_PAIR}`);
	}

	const intA = parseInt(a, 10);
	const intB = parseInt(b, 10);

	return Object.values(numberPairInfo).reduce((mem, fn) => {
		mem = {
			...mem,
			...fn(intA, intB),
		};
		return mem;
	}, {});
}
