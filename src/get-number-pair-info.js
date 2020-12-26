import * as numberPairInfo from './math/number-pair-info';

export default function getNumberPairInfo(a, b) {
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
