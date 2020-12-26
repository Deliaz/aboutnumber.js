# aboutnumber.js
Interesting math facts about numbers

## Usage:

```
npm i aboutnumber
```

```
yarn add aboutnumber
```

For a single number
```js
const result = aboutnumber(101);
```

For a pair of numbers
```js
const result = aboutnumber(200, 350);
```

### Locales support
The single-number mode supports `locale` parameter being passed in options object.
It affects result fields like `duration*` and `toWords`
```js
aboutnumber(103, {locale: 'de'});
```

* `locale` (default 'en'): supported ['ar', 'nl', 'en', 'fr', 'de', 'he', 'it', 'ko', 'lv', 'lt', 'no', 'pl', 'pt', 'ru', 'es', 'tr', 'uk']


### Single number result
Accepted range: from 0 to 999999999999999
```js
{
    number: Number, // Originally passed number
    numeralSum: Number, // Sum of numerals
    numeralMultiplication: Number, // Multiplication of numerals
    numeralMultiplicationWoZeroes: Number, // Multiplication of numerals excluding zeroes
    dividers: Array<Number>, // List of all dividers
    dividersCount: Number, // Dividers count
    dividersSum: Number, // Sum of dividers
    isPrime: Boolean, // True if the number is prime
    isDeficient: Boolean, // True if the number is deficient
    isAbundant: Boolean, // True if the number is abundant
    isPerfect: Boolean, // True if the number is perfect
    primeFactorization: Array<Number>, // Array if prime dividers: factorization
    isSemiPrime: Boolean, // True if the number is semi-prime
    binary: String, // Binary (2-based) representation
    ternary: String, // Ternary (3-based) representation
    senary: String, // Senary (6-based) representation
    octal: String, // Octal (8-based) representation
    hex: String, // HEX (16-based) representation
    isFibonacci: Boolean, // True if number is Fibonacci
    fibonacciIndex: Number, // Index of number in Fibonacci sequence, -1 - if not Fibonacci
    sine: Number, // Sine of the number in radians
    cosine: Number, // Cosine of the number in radians
    tangent: Number, // Tangent of the number in radians,
    naturalLogarithm: Number, // Natural (e-based) logarithm of the number
    commonLogarithm: Number, // Common (10-based) logarithm of the number
    binaryLogarithm: Number, // Binary (2-based) logarithm of the number
    squareRoot: Number, // Square root,
    cubeRoot: Number, // Cube root,
    square: Number, // Number to the power of two
    unixDate: String, // Parsed number as number of seconds starting 00:00:00 1 Jan 1970
    durationFromMillis: String, // Time duration, parsing number as milliseconds
    durationFromSeconds: String, // Time duration, parsing number as seconds
    durationFromMinutes: String, // Time duration, parsing number as minutes
    durationFromHours: String, // Time duration, parsing number as hours
    durationFromDays: String, // Time duration, parsing number as days
    md5: String, // MD5 hash of the number
    sha1: String, // SHA1 hash of the number
    base64: String, // Base64 representation
    maxDividerBase2: Number, // Maximum divider from power of two sequence [2,4,8,16,32,128, ...]
    possibleNumeralSystem: Number, // Maximum possible numeral base
    possibleNumeralSystemName: String, // Name of the possible numeral base
    fromBinaryToDecimal: String, // Decimal representation, if the number looks like binary
    fromTernaryToDecimal: String, // Decimal representation, if the number looks like ternary
    fromOctalToDecimal: String, // Decimal representation, if the number looks like octal
    romanNumerals: String, // Roman representation, if the number <= 3999
    arabicNumerals: String, // Arabic representation
    digitCount: Number, // Number of digits in number
    morseCode: String, // Morse code representation for the number
    reversedNumber: Number, // Reversed number, which equal 1/n, where n - originally passed number
    isPalindrome: Boolean, // True if number is palindromic
    fromBytes: String, // Human-readable file size, assuming the number are bytes
    fromKilobytes: String, // Human-readable file size, assuming the number are kilobytes
    toWords: String, // Words representation of the number, supports locales
    rgba: Array<Number>, // Array with RGBA components: [r, b, b, a]
    rgbaCss: String, // CSS string with rgba color
    rgbaHex: String, // HEX color representation
}
```

### A pair of number result
Accepted range: from 1 to 9999999
```js
{
    commonDigits: Array<Number>, // Common digits
    commonDivisors: Array<Number>, // Common dividors
    isCoprime: Boolean, // True when numbers are coprime integers
    difference: Number, // math difference
    divRemainder: Number, // Remainder
    division: Number, // Division result
    gcd: Number, // Greatest common divisor
    hypotenuse: Number, // Hypotenuse value
    isTwinPrime: Number, // True when numbers are twin prime
    lcm: Number, // Least common multiple
    levenshteinDistance: Number, // Levenshtein distance
    multiplication: Number, // Multiplcation value
    geometricMean: Number, // Geometric mean
    sum: Number, // Math sum
    arithmeticMean: Number, // Arithmetic mean
}
```