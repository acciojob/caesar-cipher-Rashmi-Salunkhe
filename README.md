# CaesarCipher

## Instructions

Create a JavaScript function called caesarCipher that takes two parameters: a string message and an integer shift. The function should perform a Caesar cipher on the given message by shifting the characters by the given shift amount. It should return the encoded message as a string.
The Caesar cipher is a simple encryption technique where each character in the plaintext is replaced by a character some fixed number of positions down the alphabet. The alphabet wraps around, so after 'z' comes 'a' and after 'Z' comes 'A'.
For example, with a shift of 3, 'A' would be replaced by 'D', 'B' would become 'E', and so on.
The function should be case-insensitive and only process alphabetical characters. Non-alphabetical characters should be left unchanged.

## Examples:

```
console.log(caesarCipher("Hello, World!", 3));
// Output: "Khoor, Zruog!"

console.log(caesarCipher("The Quick Brown Fox Jumps Over The Lazy Dog", 5));
// Output: "Ymj Vznhc Qwtbs Ktc Ozrux Tajw Ymj Qfed Ins"

console.log(caesarCipher("AbCdEfGhIjKlMnOpQrStUvWxYz", -1));
// Output: "ZaBcDeFgHiJkLmNoPqRsTuVwXyY"
```
