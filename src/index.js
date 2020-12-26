import getNumberInfo from './get-number-info';
import getNumberPairInfo from './get-number-pair-info';
import {isNotInt} from './utils';
import {MAX_NUMBER, MAX_NUMBER_PAIR, MIN_NUMBER, MIN_NUMBER_PAIR} from './const';

function aboutnumber(number1, number2orParams) {
	if (Number.isNaN(number1)) {
		throw new Error('The parameter is NaN');
	}

	if (Number.isNaN(number2orParams)) {
		throw new Error('The second parameter is NaN');
	}

	if (isNotInt(number1)) {
		throw new Error('Not an integer number');
	}

	if (number1 < MIN_NUMBER || number1 > MAX_NUMBER) {
		throw new Error(`Out of range: MIN: ${MIN_NUMBER}, MAX: ${MAX_NUMBER}`);
	}

	if (typeof number2orParams === 'undefined' || typeof number2orParams === 'object') {
		return getNumberInfo(number1, number2orParams);
	} else {
		if (isNotInt(number1) || isNotInt(number2orParams)) {
			throw new Error('Not integer numbers');
		}

		if (
			number1 < MIN_NUMBER_PAIR ||
			number1 > MAX_NUMBER_PAIR ||
			number2orParams < MIN_NUMBER_PAIR ||
			number2orParams > MAX_NUMBER_PAIR
		) {
			throw new Error(`Out of range: MIN: ${MIN_NUMBER_PAIR}, MAX: ${MAX_NUMBER_PAIR}`);
		}

		return getNumberPairInfo(number1, number2orParams);
	}
}

export default aboutnumber;
