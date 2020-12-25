import {getNumberInfo} from '../src/index';
import {MAX_NUMBER, MIN_NUMBER} from '../src/const';

test('Error for bigger than max number', () => {
	expect(() => {
		getNumberInfo(MAX_NUMBER + 1);
	}).toThrow();
});

test('Error for smaller than min number', () => {
	expect(() => {
		getNumberInfo(MIN_NUMBER - 1);
	}).toThrow();
});

test('Error for float number', () => {
	expect(() => {
		getNumberInfo(1.01);
	}).toThrow();
});

test('Error for NaN', () => {
	expect(() => {
		getNumberInfo(NaN);
	}).toThrow();
});

test('No error for correct integer', () => {
	expect(() => {
		getNumberInfo(10);
	}).not.toThrow();

	expect(getNumberInfo(10).number).toEqual(10);
});
