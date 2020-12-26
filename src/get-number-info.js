import {DEFAULT_LOCALE, LOCALES} from './const';
import * as numberInfo from './math/number-info';

const FN_MAPPING = Object.values(numberInfo);

export default function getNumberInfo(number, params = {locale: DEFAULT_LOCALE}) {
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
