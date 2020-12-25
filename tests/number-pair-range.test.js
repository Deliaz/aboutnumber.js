import {getNumberInfo, getNumberPairInfo} from '../src/index';
import {MAX_NUMBER_PAIR, MIN_NUMBER_PAIR} from '../src/const';

test('Error for bigger than max number', () => {
	expect(() => {
		getNumberPairInfo(MAX_NUMBER_PAIR + 1, 1);
	}).toThrow();

	expect(() => {
		getNumberPairInfo(1, MAX_NUMBER_PAIR + 1);
	}).toThrow();
});

test('Error for smaller than min number', () => {
	expect(() => {
		getNumberPairInfo(MIN_NUMBER_PAIR - 1, 1);
	}).toThrow();

	expect(() => {
		getNumberPairInfo(1, MIN_NUMBER_PAIR - 1);
	}).toThrow();
});

test('Error for float number', () => {
	expect(() => {
		getNumberPairInfo(1.01, 1);
	}).toThrow();

	expect(() => {
		getNumberPairInfo(1, 1.01);
	}).toThrow();
});

test('Error for NaN', () => {
	expect(() => {
		getNumberPairInfo(NaN, 1);
	}).toThrow();

	expect(() => {
		getNumberPairInfo(1, NaN);
	}).toThrow();
});

test('No error for correct pair', () => {
	expect(() => {
		getNumberPairInfo(10, 20);
	}).not.toThrow();

	expect(getNumberPairInfo(10, 20).sum).toEqual(30);
});
