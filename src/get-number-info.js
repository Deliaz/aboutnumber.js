import {DEFAULT_LOCALE, LOCALES, MAX_NUMBER, MIN_NUMBER} from './const';
import * as numberInfo from './math/number-info';
import {isNotInt} from './utils';

const FN_MAPPING = Object.values(numberInfo);

export default function getNumberInfo(number, params = {locale: DEFAULT_LOCALE}) {
	if (isNaN(number)) {
		throw new Error('The parameter is NaN');
	}

	if (isNotInt(number)) {
		throw new Error('Not an integer number');
	}

	if (number < MIN_NUMBER || number > MAX_NUMBER) {
		throw new Error(`Out of range: MIN: ${MIN_NUMBER}, MAX: ${MAX_NUMBER}`);
	}

	const intNumber = parseInt(number, 10);
	const locale = LOCALES.includes(params.locale) ? params.locale : DEFAULT_LOCALE;

	return FN_MAPPING.reduce((mem, fn) => {
		mem = {
			...mem,
			...fn(intNumber, {locale}),
		};
		return mem;
	}, {});
}
