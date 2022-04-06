// Vowel remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.



function shortcut(str) {
  let newStr = str.split('')
  let array = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === newStr[i].toLowerCase() && array.includes(newStr[i])) {
      delete newStr[i]
    }
  }
  return newStr.join('')
}
