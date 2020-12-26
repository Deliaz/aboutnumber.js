import aboutnumber from '../src/index';
import {MAX_NUMBER, MIN_NUMBER} from '../src/const';

test('Error for bigger than max number', () => {
	expect(() => {
		aboutnumber(MAX_NUMBER + 1);
	}).toThrow();
});

test('Error for smaller than min number', () => {
	expect(() => {
		aboutnumber(MIN_NUMBER - 1);
	}).toThrow();
});

test('Error for float number', () => {
	expect(() => {
		aboutnumber(1.01);
	}).toThrow();
});

test('Error for NaN', () => {
	expect(() => {
		aboutnumber(NaN);
	}).toThrow();
});

test('No error for correct integer', () => {
	expect(() => {
		aboutnumber(10);
	}).not.toThrow();

	expect(aboutnumber(10).number).toEqual(10);
});
