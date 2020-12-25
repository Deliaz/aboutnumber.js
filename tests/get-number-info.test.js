import * as methods from '../src/math/number-info';

test('number', () => {
	expect(methods.number(145).number).toEqual(145);
	expect(methods.number(0).number).toEqual(0);
});
test('numeralSum', () => {
	expect(methods.numeralSum(1111).numeralSum).toEqual(4);
	expect(methods.numeralSum(10000001).numeralSum).toEqual(2);
	expect(methods.numeralSum(1).numeralSum).toEqual(1);
	expect(methods.numeralSum(987654321).numeralSum).toEqual(45);
	expect(methods.numeralSum(0).numeralSum).toEqual(0);
});
test('numeralMultiplication', () => {
	expect(methods.numeralMultiplication(1111).numeralMultiplication).toEqual(1);
	expect(methods.numeralMultiplication(10000001).numeralMultiplication).toEqual(0);
	expect(methods.numeralMultiplication(1).numeralMultiplication).toEqual(1);
	expect(methods.numeralMultiplication(1234).numeralMultiplication).toEqual(24);
	expect(methods.numeralMultiplication(0).numeralMultiplication).toEqual(0);
});
test('numeralMultiplicationWoZeroes', () => {
	expect(methods.numeralMultiplicationWoZeroes(1111).numeralMultiplicationWoZeroes).toEqual(1);
	expect(methods.numeralMultiplicationWoZeroes(10000001).numeralMultiplicationWoZeroes).toEqual(
		1
	);
	expect(methods.numeralMultiplicationWoZeroes(1).numeralMultiplicationWoZeroes).toEqual(1);
	expect(methods.numeralMultiplicationWoZeroes(1234).numeralMultiplicationWoZeroes).toEqual(24);
	expect(methods.numeralMultiplicationWoZeroes(4506).numeralMultiplicationWoZeroes).toEqual(120);
	expect(methods.numeralMultiplicationWoZeroes(0).numeralMultiplicationWoZeroes).toEqual(0);
});
test('dividers', () => {
	expect(methods.allDividers(1).dividers).toEqual([1]);
	expect(methods.allDividers(2).dividers).toEqual([1, 2]);
	expect(methods.allDividers(175).dividers).toEqual([1, 5, 7, 25, 35, 175]);
	expect(methods.allDividers(0).dividers).toEqual([]);
});
test('dividersCount', () => {
	expect(methods.allDividers(1).dividersCount).toEqual(1);
	expect(methods.allDividers(3).dividersCount).toEqual(2);
	expect(methods.allDividers(25).dividersCount).toEqual(3);
	expect(methods.allDividers(10).dividersCount).toEqual(4);
	expect(methods.allDividers(175).dividersCount).toEqual(6);
	expect(methods.allDividers(0).dividersCount).toEqual(0);
});
test('dividersSum', () => {
	expect(methods.allDividers(1).dividersSum).toEqual(1);
	expect(methods.allDividers(768).dividersSum).toEqual(2044);
	expect(methods.allDividers(11110002).dividersSum).toEqual(22220016);
	expect(methods.allDividers(30).dividersSum).toEqual(72);
	expect(methods.allDividers(0).dividersSum).toEqual(0);
});
test('isPrime', () => {
	expect(methods.allDividers(1).isPrime).toEqual(false);
	expect(methods.allDividers(2).isPrime).toEqual(true);
	expect(methods.allDividers(10).isPrime).toEqual(false);
	expect(methods.allDividers(100001).isPrime).toEqual(false);
	expect(methods.allDividers(53).isPrime).toEqual(true);
	expect(methods.allDividers(101).isPrime).toEqual(true);
	expect(methods.allDividers(199).isPrime).toEqual(true);
	expect(methods.allDividers(0).isPrime).toEqual(false);
});
test('primeFactorization', () => {
	expect(methods.primeFactorization(1).primeFactorization).toEqual([]);
	expect(methods.primeFactorization(30).primeFactorization).toEqual([2, 3, 5]);
	expect(methods.primeFactorization(103).primeFactorization).toEqual([103]);
	expect(methods.primeFactorization(126).primeFactorization).toEqual([2, 3, 3, 7]);
	expect(methods.primeFactorization(11100).primeFactorization).toEqual([2, 2, 3, 5, 5, 37]);
	expect(methods.primeFactorization(0).primeFactorization).toEqual([]);
});
test('isSemiPrime', () => {
	expect(methods.primeFactorization(1).isSemiPrime).toEqual(false);
	expect(methods.primeFactorization(2).isSemiPrime).toEqual(false);
	expect(methods.primeFactorization(3).isSemiPrime).toEqual(false);
	expect(methods.primeFactorization(4).isSemiPrime).toEqual(true);
	expect(methods.primeFactorization(15).isSemiPrime).toEqual(true);
	expect(methods.primeFactorization(2021).isSemiPrime).toEqual(true);
	expect(methods.primeFactorization(2209).isSemiPrime).toEqual(true);
	expect(methods.primeFactorization(0).isSemiPrime).toEqual(false);
});
test('binary', () => {
	expect(methods.numeralBase(1).binary).toEqual('1');
	expect(methods.numeralBase(6).binary).toEqual('110');
	expect(methods.numeralBase(9).binary).toEqual('1001');
	expect(methods.numeralBase(10).binary).toEqual('1010');
	expect(methods.numeralBase(126).binary).toEqual('1111110');
	expect(methods.numeralBase(255).binary).toEqual('11111111');
	expect(methods.numeralBase(256).binary).toEqual('100000000');
	expect(methods.numeralBase(2049).binary).toEqual('100000000001');
	expect(methods.numeralBase(0).binary).toEqual('0');
});
test('ternary', () => {
	expect(methods.numeralBase(1).ternary).toEqual('1');
	expect(methods.numeralBase(2).ternary).toEqual('2');
	expect(methods.numeralBase(3).ternary).toEqual('10');
	expect(methods.numeralBase(8).ternary).toEqual('22');
	expect(methods.numeralBase(35).ternary).toEqual('1022');
	expect(methods.numeralBase(300).ternary).toEqual('102010');
	expect(methods.numeralBase(1234).ternary).toEqual('1200201');
	expect(methods.numeralBase(11111).ternary).toEqual('120020112');
	expect(methods.numeralBase(0).ternary).toEqual('0');
});
test('senary', () => {
	expect(methods.numeralBase(1).senary).toEqual('1');
	expect(methods.numeralBase(6).senary).toEqual('10');
	expect(methods.numeralBase(17).senary).toEqual('25');
	expect(methods.numeralBase(26).senary).toEqual('42');
	expect(methods.numeralBase(2001).senary).toEqual('13133');
	expect(methods.numeralBase(111111).senary).toEqual('2214223');
	expect(methods.numeralBase(78903).senary).toEqual('1405143');
	expect(methods.numeralBase(0).senary).toEqual('0');
});
test('octal', () => {
	expect(methods.numeralBase(1).octal).toEqual('1');
	expect(methods.numeralBase(8).octal).toEqual('10');
	expect(methods.numeralBase(15).octal).toEqual('17');
	expect(methods.numeralBase(16).octal).toEqual('20');
	expect(methods.numeralBase(983).octal).toEqual('1727');
	expect(methods.numeralBase(101010).octal).toEqual('305222');
	expect(methods.numeralBase(110101).octal).toEqual('327025');
	expect(methods.numeralBase(0).octal).toEqual('0');
});
test('hex', () => {
	expect(methods.numeralBase(1).hex).toEqual('1');
	expect(methods.numeralBase(10).hex).toEqual('A');
	expect(methods.numeralBase(16).hex).toEqual('10');
	expect(methods.numeralBase(125).hex).toEqual('7D');
	expect(methods.numeralBase(57790009).hex).toEqual('371CE39');
	expect(methods.numeralBase(10000000000).hex).toEqual('2540BE400');
	expect(methods.numeralBase(890090986546).hex).toEqual('CF3D8E9C32');
	expect(methods.numeralBase(0).hex).toEqual('0');
});
test('isFibonacci', () => {
	expect(methods.fibonacci(1).isFibonacci).toEqual(true);
	expect(methods.fibonacci(9).isFibonacci).toEqual(false);
	expect(methods.fibonacci(987).isFibonacci).toEqual(true);
	expect(methods.fibonacci(10946).isFibonacci).toEqual(true);
	expect(methods.fibonacci(121393).isFibonacci).toEqual(true);
	expect(methods.fibonacci(9227465).isFibonacci).toEqual(true);
	expect(methods.fibonacci(0).isFibonacci).toEqual(true);
});
test('fibonacciIndex', () => {
	expect(methods.fibonacci(1).fibonacciIndex).toEqual([1, 2]);
	expect(methods.fibonacci(2).fibonacciIndex).toEqual(3);
	expect(methods.fibonacci(55).fibonacciIndex).toEqual(10);
	expect(methods.fibonacci(514229).fibonacciIndex).toEqual(29);
	expect(methods.fibonacci(139583862445).fibonacciIndex).toEqual(55);
	expect(methods.fibonacci(102334155).fibonacciIndex).toEqual(40);
	expect(methods.fibonacci(0).fibonacciIndex).toEqual(0);
	// TODO Fix the API, return [1,2] for number = 1
});
test('sine', () => {
	expect(methods.trigonometric(1).sine).toEqual(0.8414709848078965);
	expect(methods.trigonometric(3065).sine).toEqual(-0.9300062701217011);
	expect(methods.trigonometric(555).sine).toEqual(0.873282610859792);
	expect(methods.trigonometric(87634).sine).toEqual(0.6646848246612114);
	expect(methods.trigonometric(0).sine).toEqual(0);
});
test('cosine', () => {
	expect(methods.trigonometric(1).cosine).toEqual(0.5403023058681398);
	expect(methods.trigonometric(60).cosine).toEqual(-0.9524129804151563);
	expect(methods.trigonometric(400).cosine).toEqual(-0.525296338642536);
	expect(methods.trigonometric(25678).cosine).toEqual(0.19126019594691535);
	expect(methods.trigonometric(0).cosine).toEqual(1);
});
test('tangent', () => {
	expect(methods.trigonometric(1).tangent).toEqual(1.5574077246549023);
	expect(methods.trigonometric(2).tangent).toEqual(-2.185039863261519);
	expect(methods.trigonometric(300).tangent).toEqual(45.244742070819356);
	expect(methods.trigonometric(4557).tangent).toEqual(-8.303357271321747);
	expect(methods.trigonometric(100000111).tangent).toEqual(-0.15588497323086667);
	expect(methods.trigonometric(0).tangent).toEqual(0);
});
// TODO Add sine, cosine, tangent in degrees
test('naturalLogarithm', () => {
	expect(methods.logarithm(1).naturalLogarithm).toEqual(0);
	expect(methods.logarithm(30).naturalLogarithm).toEqual(3.4011973816621555);
	expect(methods.logarithm(7809).naturalLogarithm).toEqual(8.963032193662675);
	expect(methods.logarithm(111890).naturalLogarithm).toEqual(11.625271524801766);
	expect(methods.logarithm(100).naturalLogarithm).toEqual(4.605170185988092);
	expect(methods.logarithm(0).naturalLogarithm).toEqual(-Infinity);
});
test('commonLogarithm', () => {
	expect(methods.logarithm(1).commonLogarithm).toEqual(0);
	expect(methods.logarithm(10).commonLogarithm).toEqual(1);
	expect(methods.logarithm(455).commonLogarithm).toEqual(2.6580113966571126);
	expect(methods.logarithm(90000).commonLogarithm).toEqual(4.954242509439325);
	expect(methods.logarithm(0).commonLogarithm).toEqual(-Infinity);
});
test('binaryLogarithm', () => {
	expect(methods.logarithm(1).binaryLogarithm).toEqual(0);
	expect(methods.logarithm(2).binaryLogarithm).toEqual(1);
	expect(methods.logarithm(56).binaryLogarithm).toEqual(5.807354922057604);
	expect(methods.logarithm(1110000).binaryLogarithm).toEqual(20.082128245899554);
	expect(methods.logarithm(0).binaryLogarithm).toEqual(-Infinity);
});
test('squareRoot', () => {
	expect(methods.squareRoot(1).squareRoot).toEqual(1);
	expect(methods.squareRoot(6).squareRoot).toEqual(2.449489742783178);
	expect(methods.squareRoot(400).squareRoot).toEqual(20);
	expect(methods.squareRoot(100001).squareRoot).toEqual(316.2293471517152);
	expect(methods.squareRoot(987065).squareRoot).toEqual(993.5114493552653);
	expect(methods.squareRoot(0).squareRoot).toEqual(0);
});
test('cubeRoot', () => {
	expect(methods.cubeRoot(1).cubeRoot).toEqual(1);
	expect(methods.cubeRoot(8).cubeRoot).toEqual(2);
	expect(methods.cubeRoot(100).cubeRoot).toEqual(4.641588833612778);
	expect(methods.cubeRoot(897).cubeRoot).toEqual(9.644154244482767);
	expect(methods.cubeRoot(512).cubeRoot).toEqual(8);
	// test case for precision
	expect(methods.cubeRoot(1000).cubeRoot).toEqual(10);
	expect(methods.cubeRoot(0).cubeRoot).toEqual(0);
});
test('square', () => {
	expect(methods.square(1).square).toEqual(1);
	expect(methods.square(67).square).toEqual(4489);
	expect(methods.square(100000).square).toEqual(10000000000);
	expect(methods.square(7865).square).toEqual(61858225);
	expect(methods.square(0).square).toEqual(0);
});
test('unixDate', () => {
	expect(methods.unixDate(1).unixDate).toEqual('Thu, 01 Jan 1970 00:00:01 GMT');
	expect(methods.unixDate(45).unixDate).toEqual('Thu, 01 Jan 1970 00:00:45 GMT');
	expect(methods.unixDate(1000000).unixDate).toEqual('Mon, 12 Jan 1970 13:46:40 GMT');
	expect(methods.unixDate(90000000).unixDate).toEqual('Tue, 07 Nov 1972 16:00:00 GMT');
	expect(methods.unixDate(0).unixDate).toEqual('Thu, 01 Jan 1970 00:00:00 GMT');
});
test('md5', () => {
	expect(methods.hashes(1).md5).toEqual('c4ca4238a0b923820dcc509a6f75849b');
	expect(methods.hashes(790).md5).toEqual('2dace78f80bc92e6d7493423d729448e');
	expect(methods.hashes(25).md5).toEqual('8e296a067a37563370ded05f5a3bf3ec');
	expect(methods.hashes(11110001).md5).toEqual('dd1c4b1552b7471f3f7cf02653ca5aa5');
	expect(methods.hashes(0).md5).toEqual('cfcd208495d565ef66e7dff9f98764da');
});
test('sha1', () => {
	expect(methods.hashes(1).sha1).toEqual('356a192b7913b04c54574d18c28d46e6395428ab');
	expect(methods.hashes(200).sha1).toEqual('9f9af029585ba014e07cd3910ca976cf56160616');
	expect(methods.hashes(7589).sha1).toEqual('1c9072b971af32996ada230a8ac4ba8ed0c70b68');
	expect(methods.hashes(100000000).sha1).toEqual('b1a65867cc115a8ee517d11f5caf766e8bcfa0c9');
	expect(methods.hashes(0).sha1).toEqual('b6589fc6ab0dc82cf12099d1c2d40ab994e8410c');
});
test('base64', () => {
	expect(methods.base64(1).base64).toEqual('MQ==');
	expect(methods.base64(345).base64).toEqual('MzQ1');
	expect(methods.base64(1234).base64).toEqual('MTIzNA==');
	expect(methods.base64(903864).base64).toEqual('OTAzODY0');
	expect(methods.base64(0).base64).toEqual('MA==');
});
test('maxDividerBase2', () => {
	expect(methods.maxDivBase2(1).maxDividerBase2).toEqual(1);
	expect(methods.maxDivBase2(64).maxDividerBase2).toEqual(64);
	expect(methods.maxDivBase2(5645).maxDividerBase2).toEqual(1);
	expect(methods.maxDivBase2(10000000).maxDividerBase2).toEqual(128);
	expect(methods.maxDivBase2(0).maxDividerBase2).toEqual(0);
});
test('possibleNumeralSystem', () => {
	expect(methods.possibleBase(1).possibleNumeralSystem).toEqual(2);
	expect(methods.possibleBase(785).possibleNumeralSystem).toEqual(9);
	expect(methods.possibleBase(32000).possibleNumeralSystem).toEqual(4);
	expect(methods.possibleBase(9714562).possibleNumeralSystem).toEqual(10);
	expect(methods.possibleBase(0).possibleNumeralSystem).toEqual(1);
});
test('possibleNumeralSystemName', () => {
	expect(methods.possibleBase(1).possibleNumeralSystemName).toEqual('binary');
	expect(methods.possibleBase(200).possibleNumeralSystemName).toEqual('ternary');
	expect(methods.possibleBase(230290).possibleNumeralSystemName).toEqual('decimal');
	expect(methods.possibleBase(32034021).possibleNumeralSystemName).toEqual('quinary');
	expect(methods.possibleBase(0).possibleNumeralSystemName).toEqual('unary');
});
test('fromBinaryToDecimal', () => {
	expect(methods.possibleBase(1).fromBinaryToDecimal).toEqual(1);
	expect(methods.possibleBase(101010).fromBinaryToDecimal).toEqual(42);
	expect(methods.possibleBase(746).fromBinaryToDecimal).toEqual('');
	expect(methods.possibleBase(1121).fromBinaryToDecimal).toEqual('');
	expect(methods.possibleBase(0).fromBinaryToDecimal).toEqual(0);
});
test('fromTernaryToDecimal', () => {
	expect(methods.possibleBase(1).fromTernaryToDecimal).toEqual(1);
	expect(methods.possibleBase(20).fromTernaryToDecimal).toEqual(6);
	expect(methods.possibleBase(100).fromTernaryToDecimal).toEqual(9);
	expect(methods.possibleBase(2121).fromTernaryToDecimal).toEqual(70);
	expect(methods.possibleBase(30927).fromTernaryToDecimal).toEqual('');
	expect(methods.possibleBase(0).fromTernaryToDecimal).toEqual(0);
});
test('fromOctalToDecimal', () => {
	expect(methods.possibleBase(1).fromOctalToDecimal).toEqual(1);
	expect(methods.possibleBase(106).fromOctalToDecimal).toEqual(70);
	expect(methods.possibleBase(77668).fromOctalToDecimal).toEqual('');
	expect(methods.possibleBase(10236).fromOctalToDecimal).toEqual(4254);
	expect(methods.possibleBase(10000000).fromOctalToDecimal).toEqual(2097152);
	expect(methods.possibleBase(0).fromOctalToDecimal).toEqual(0);
});
test('romanNumerals', () => {
	expect(methods.numeralSystems(1).romanNumerals).toEqual('I');
	expect(methods.numeralSystems(200).romanNumerals).toEqual('CC');
	expect(methods.numeralSystems(89657).romanNumerals).toEqual('');
	expect(methods.numeralSystems(4000).romanNumerals).toEqual('MMMM');
	expect(methods.numeralSystems(98).romanNumerals).toEqual('XCVIII');
	expect(methods.numeralSystems(2587).romanNumerals).toEqual('MMDLXXXVII');
	expect(methods.numeralSystems(0).romanNumerals).toEqual('');
});
test('arabicNumerals', () => {
	expect(methods.numeralSystems(1).arabicNumerals).toEqual('١');
	expect(methods.numeralSystems(10).arabicNumerals).toEqual('١٠');
	expect(methods.numeralSystems(367890).arabicNumerals).toEqual('٣٦٧٨٩٠');
	expect(methods.numeralSystems(98000).arabicNumerals).toEqual('٩٨٠٠٠');
	expect(methods.numeralSystems(0).arabicNumerals).toEqual('٠');
});
test('digitCount', () => {
	expect(methods.digitCount(1).digitCount).toEqual(1);
	expect(methods.digitCount(2500).digitCount).toEqual(4);
	expect(methods.digitCount(98700134).digitCount).toEqual(8);
	expect(methods.digitCount(11110).digitCount).toEqual(5);
	expect(methods.digitCount(0).digitCount).toEqual(1);
});
test('morseCode', () => {
	expect(methods.morseCode(1).morseCode).toEqual('.----');
	expect(methods.morseCode(675).morseCode).toEqual('-.... --... .....');
	expect(methods.morseCode(109800).morseCode).toEqual('.---- ----- ----. ---.. ----- -----');
	expect(methods.morseCode(921785).morseCode).toEqual('----. ..--- .---- --... ---.. .....');
	expect(methods.morseCode(0).morseCode).toEqual('-----');
});
test('reversedNumber', () => {
	expect(methods.reversed(1).reversedNumber).toEqual(1);
	expect(methods.reversed(274).reversedNumber).toEqual(0.0036496350364963502);
	expect(methods.reversed(1111111111).reversedNumber).toEqual(9.0000000009e-10);
	expect(methods.reversed(61842).reversedNumber).toEqual(0.000016170240289770706);
	expect(methods.reversed(0).reversedNumber).toEqual('Infinity');
});
test('isPalindrome', () => {
	expect(methods.palindrome(1).isPalindrome).toEqual(true);
	expect(methods.palindrome(1221).isPalindrome).toEqual(true);
	expect(methods.palindrome(378019).isPalindrome).toEqual(false);
	expect(methods.palindrome(122343221).isPalindrome).toEqual(true);
	expect(methods.palindrome(80001).isPalindrome).toEqual(false);
	expect(methods.palindrome(0).isPalindrome).toEqual(true);
});
test('fromBytes', () => {
	expect(methods.bytes(1).fromBytes).toEqual('1 B');
	expect(methods.bytes(500).fromBytes).toEqual('500 B');
	expect(methods.bytes(237123).fromBytes).toEqual('237 kB');
	expect(methods.bytes(8700000000).fromBytes).toEqual('8.7 GB');
	expect(methods.bytes(0).fromBytes).toEqual('0 B');
});
test('fromKilobytes', () => {
	expect(methods.bytes(1).fromKilobytes).toEqual('0 B');
	expect(methods.bytes(1000).fromKilobytes).toEqual('1 B');
	expect(methods.bytes(8961346).fromKilobytes).toEqual('8.96 kB');
	expect(methods.bytes(1111000987).fromKilobytes).toEqual('1.11 MB');
	expect(methods.bytes(0).fromKilobytes).toEqual('0 B');
});
test('toWords', () => {
	expect(methods.toWords(1).toWords).toEqual('one');
	expect(methods.toWords(7689009876).toWords).toEqual(
		'seven billion six hundred and eighty-nine million nine thousand eight hundred and seventy-six'
	);
	expect(methods.toWords(101010101).toWords).toEqual(
		'one hundred and one million ten thousand one hundred and one'
	);
	expect(methods.toWords(555).toWords).toEqual('five hundred and fifty-five');
	expect(methods.toWords(0).toWords).toEqual('zero');
});
test('durationFromMillis', () => {
	expect(methods.duration(1).durationFromMillis).toEqual('0 seconds');
	expect(methods.duration(900).durationFromMillis).toEqual('0.9 seconds');
	expect(methods.duration(239870).durationFromMillis).toEqual('3 minutes, 59.87 seconds');
	expect(methods.duration(100000000).durationFromMillis).toEqual(
		'1 day, 3 hours, 46 minutes, 40 seconds'
	);
	expect(methods.duration(0).durationFromMillis).toEqual('0 seconds');
});
test('durationFromSeconds', () => {
	expect(methods.duration(1).durationFromSeconds).toEqual('1 second');
	expect(methods.duration(91).durationFromSeconds).toEqual('1 minute, 31 seconds');
	expect(methods.duration(322221124).durationFromSeconds).toEqual(
		'10 years, 2 months, 2 weeks, 2 days, 52 minutes, 4 seconds'
	);
	expect(methods.duration(6000000).durationFromSeconds).toEqual(
		'2 months, 1 week, 1 day, 13 hours, 40 minutes'
	);
	expect(methods.duration(0).durationFromSeconds).toEqual('0 seconds');
});
test('durationFromMinutes', () => {
	expect(methods.duration(1).durationFromMinutes).toEqual('1 minute');
	expect(methods.duration(60).durationFromMinutes).toEqual('1 hour');
	expect(methods.duration(36000).durationFromMinutes).toEqual('3 weeks, 4 days');
	expect(methods.duration(727272).durationFromMinutes).toEqual(
		'1 year, 4 months, 2 weeks, 4 days, 1 hour, 12 minutes'
	);
	expect(methods.duration(0).durationFromMinutes).toEqual('0 seconds');
});
test('durationFromHours', () => {
	expect(methods.duration(1).durationFromHours).toEqual('1 hour');
	expect(methods.duration(50).durationFromHours).toEqual('2 days, 2 hours');
	expect(methods.duration(360).durationFromHours).toEqual('2 weeks, 1 day');
	expect(methods.duration(45910).durationFromHours).toEqual(
		'5 years, 2 months, 3 weeks, 4 days, 19 hours'
	);
	expect(methods.duration(0).durationFromHours).toEqual('0 seconds');
});
test('durationFromDays', () => {
	expect(methods.duration(1).durationFromDays).toEqual('1 day');
	expect(methods.duration(21).durationFromDays).toEqual('3 weeks');
	expect(methods.duration(366).durationFromDays).toEqual('1 year, 18 hours');
	expect(methods.duration(85400).durationFromDays).toEqual(
		'233 years, 9 months, 3 weeks, 1 day, 19 hours, 30 minutes'
	);
	expect(methods.duration(0).durationFromDays).toEqual('0 seconds');
});
test('rgba', () => {
	expect(methods.colors(1).rgba).toEqual([0, 0, 1, 0]);
	expect(methods.colors(151515151).rgba).toEqual([7, 240, 15, 9]);
	expect(methods.colors(933).rgba).toEqual([0, 3, 165, 0]);
	expect(methods.colors(2000).rgba).toEqual([0, 7, 208, 0]);
	expect(methods.colors(8122451).rgba).toEqual([123, 240, 83, 0]);
	expect(methods.colors(0).rgba).toEqual([0, 0, 0, 0]);
});
test('rgbaCss', () => {
	expect(methods.colors(1).rgbaCss).toEqual('rgba(0, 0, 1, 0)');
	expect(methods.colors(92222).rgbaCss).toEqual('rgba(1, 104, 62, 0)');
	expect(methods.colors(600015555).rgbaCss).toEqual('rgba(195, 130, 195, .13725490196078433)');
	expect(methods.colors(4294967296).rgbaCss).toEqual();
	expect(methods.colors(0).rgbaCss).toEqual('rgba(0, 0, 0, 0)');
});
test('rgbaHex', () => {
	expect(methods.colors(1).rgbaHex).toEqual('#00000100');
	expect(methods.colors(700).rgbaHex).toEqual('#0002bc00');
	expect(methods.colors(80808080).rgbaHex).toEqual('#d1089004');
	expect(methods.colors(9126).rgbaHex).toEqual('#0023a600');
	expect(methods.colors(0).rgbaHex).toEqual('#0000');
});
