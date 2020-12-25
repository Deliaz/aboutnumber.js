export function isNotInt(n) {
	return typeof n !== 'number' || !Number.isInteger(n);
}
