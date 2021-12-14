const hasMoreVowels = word => {
    const vowelCount = word.match(/[aeiou]/gi).length;
    const constCount = word.length - vowelCount;
    return vowelCount > constCount;
}

console.log(hasMoreVowels("Aal"));


