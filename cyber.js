// Caesar Cipher
function caesarEncrypt(text, shift) {
    return text
      .split('')
      .map(char => {
        if (char.match(/[a-zA-Z]/)) {
          const code = char.charCodeAt(0);
          const base = code < 91 ? 65 : 97;
          return String.fromCharCode((code - base + shift) % 26 + base);
        }
        return char;
      })
      .join('');
  }
  
  function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, (26 - shift) % 26);
  }
  
  // Vigenere Cipher
  function vigenereEncrypt(plainText, key) {
    let result = '';
    for (let i = 0; i < plainText.length; i++) {
      const char = plainText[i];
      if (char.match(/[a-zA-Z]/)) {
        const keyChar = key[i % key.length];
        const shift = keyChar.charCodeAt(0) - (keyChar >= 'a' ? 97 : 65);
        result += caesarEncrypt(char, shift);
      } else {
        result += char;
      }
    }
    return result;
  }
  
  function vigenereDecrypt(cipherText, key) {
    let result = '';
    for (let i = 0; i < cipherText.length; i++) {
      const char = cipherText[i];
      if (char.match(/[a-zA-Z]/)) {
        const keyChar = key[i % key.length];
        const shift = keyChar.charCodeAt(0) - (keyChar >= 'a' ? 97 : 65);
        result += caesarDecrypt(char, shift);
      } else {
        result += char;
      }
    }
    return result;
  }
  
  // Rail Fence Cipher
  function railFenceEncrypt(text, rails) {
    const result = Array.from({ length: rails }, () => '');
    let rail = 0;
    let direction = 1;
  
    for (const char of text) {
      result[rail] += char;
      rail += direction;
  
      if (rail === rails - 1 || rail === 0) {
        direction *= -1;
      }
    }
  
    return result.join('');
  }
  
  function railFenceDecrypt(cipherText, rails) {
    const result = Array.from({ length: cipherText.length }, () => '');
    let rail = 0;
    let direction = 1;
  
    for (let i = 0; i < cipherText.length; i++) {
      result[i] = rail;
      rail += direction;
  
      if (rail === rails - 1 || rail === 0) {
        direction *= -1;
      }
    }
  
    const sortedResult = result.map((_, index) => ({ index, value: result[index] }))
      .sort((a, b) => a.value - b.value)
      .map(obj => obj.index);
  
    let decryptedText = '';
    for (let i = 0; i < cipherText.length; i++) {
      decryptedText += cipherText[sortedResult[i]];
    }
  
    return decryptedText;
  }
  
  // Autokey Cipher
  function autokeyEncrypt(plainText, key) {
    let result = '';
    let keyIndex = 0;
  
    for (const char of plainText) {
      if (char.match(/[a-zA-Z]/)) {
        const keyChar = key[keyIndex % key.length];
        const shift = keyChar.charCodeAt(0) - (keyChar >= 'a' ? 97 : 65);
        result += caesarEncrypt(char, shift);
        keyIndex++;
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  function autokeyDecrypt(cipherText, key) {
    let result = '';
    let keyIndex = 0;
  
    for (const char of cipherText) {
      if (char.match(/[a-zA-Z]/)) {
        const keyChar = key[keyIndex % key.length];
        const shift = keyChar.charCodeAt(0) - (keyChar >= 'a' ? 97 : 65);
        result += caesarDecrypt(char, shift);
        keyIndex++;
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  // Example Usage
  const plainText = 'HelloWorld';
  const caesarShift = 3;
  const vigenereKey = 'KEY';
  const railFenceRails = 3;
  const autokeyKey = 'AUTOKEY';
  
  const caesarCipherText = caesarEncrypt(plainText, caesarShift);
  const caesarDecryptedText = caesarDecrypt(caesarCipherText, caesarShift);
  
  const vigenereCipherText = vigenereEncrypt(plainText, vigenereKey);
  const vigenereDecryptedText = vigenereDecrypt(vigenereCipherText, vigenereKey);
  
  const railFenceCipherText = railFenceEncrypt(plainText, railFenceRails);
  const railFenceDecryptedText = railFenceDecrypt(railFenceCipherText, railFenceRails);
  
  const autokeyCipherText = autokeyEncrypt(plainText, autokeyKey);
  const autokeyDecryptedText = autokeyDecrypt(autokeyCipherText, autokeyKey);
  
  console.log('Caesar Cipher:');
  console.log('PlainText:', plainText);
  console.log('CipherText:', caesarCipherText);
  console.log('DecryptedText:', caesarDecryptedText);
  
  console.log('\nVigenere Cipher:');
  console.log('PlainText:', plainText);
  console.log('CipherText:', vigenereCipherText);
  console.log('DecryptedText:', vigenereDecryptedText);
  
  console.log('\nRail Fence Cipher:');
  console.log('PlainText:', plainText);
  console.log('CipherText:', railFenceCipherText);
  console.log('DecryptedText:', railFenceDecryptedText);
  
  console.log('\nAutokey Cipher:');
  console.log('PlainText:', plainText);
  console.log('CipherText:', autokeyCipherText);
  console.log('DecryptedText:', autokeyDecryptedText);
  