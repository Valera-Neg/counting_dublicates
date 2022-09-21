function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

console.log(duplicateCount("")) //> 0
console.log(duplicateCount("abcde")) //> 0
console.log(duplicateCount("Indivisibility")) //> 1
console.log(duplicateCount("aabbcde")) //> 2
console.log(duplicateCount("Indivisibilities")) //> 2
console.log(duplicateCount("aA11")) //> 2