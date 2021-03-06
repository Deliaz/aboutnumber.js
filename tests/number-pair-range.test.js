import aboutnumber from '../src/index';
import {MAX_NUMBER_PAIR, MIN_NUMBER_PAIR} from '../src/const';

test('Error for bigger than max number', () => {
	expect(() => {
		aboutnumber(MAX_NUMBER_PAIR + 1, 1);
	}).toThrow();

	expect(() => {
		aboutnumber(1, MAX_NUMBER_PAIR + 1);
	}).toThrow();
});

test('Error for smaller than min number', () => {
	expect(() => {
		aboutnumber(MIN_NUMBER_PAIR - 1, 1);
	}).toThrow();

	expect(() => {
		aboutnumber(1, MIN_NUMBER_PAIR - 1);
	}).toThrow();
});

test('Error for float number', () => {
	expect(() => {
		aboutnumber(1.01, 1);
	}).toThrow();

	expect(() => {
		aboutnumber(1, 1.01);
	}).toThrow();
});

test('Error for NaN', () => {
	expect(() => {
		aboutnumber(NaN, 1);
	}).toThrow();

	expect(() => {
		aboutnumber(1, NaN);
	}).toThrow();
});

test('No error for correct pair', () => {
	expect(() => {
		aboutnumber(10, 20);
	}).not.toThrow();

	expect(aboutnumber(10, 20).sum).toEqual(30);
});
