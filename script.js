  function caesarCipher(message, shift) {
            // Adjust the shift to ensure it's within the bounds of the alphabet (0-25)
            shift = shift % 26;

            // Convert the message into an array of characters
            let result = '';

            // Iterate over each character in the message
            for (let i = 0; i < message.length; i++) {
                const char = message[i];

                // Process lowercase letters
                if (char >= 'a' && char <= 'z') {
                    let newCharCode = char.charCodeAt(0) + shift;
                    if (newCharCode > 'z'.charCodeAt(0)) {
                        newCharCode -= 26;
                    }
                    if (newCharCode < 'a'.charCodeAt(0)) {
                        newCharCode += 26;
                    }
                    result += String.fromCharCode(newCharCode);
                }
                // Process uppercase letters
                else if (char >= 'A' && char <= 'Z') {
                    let newCharCode = char.charCodeAt(0) + shift;
                    if (newCharCode > 'Z'.charCodeAt(0)) {
                        newCharCode -= 26;
                    }
                    if (newCharCode < 'A'.charCodeAt(0)) {
                        newCharCode += 26;
                    }
                    result += String.fromCharCode(newCharCode);
                }
                // Leave non-alphabetical characters unchanged
                else {
                    result += char;
                }
            }
            return result;
        }

        // Test the function
        console.log(caesarCipher("Hello, World!", 3)); // Khoor, Zruog!
        console.log(caesarCipher("The Quick Brown Fox Jumps Over The Lazy Dog", 5)); // Ymj Vznhc Qwtbs Ktc Ozrux Tajw Ymj Qfed Ins
        console.log(caesarCipher("AbCdEfGhIjKlMnOpQrStUvWxYz", -1)); // ZaBcDeFgHiJkLmNoPqRsTuVwXyY

        // Expose the function for external use
        window.caesarCipher = caesarCipher;
