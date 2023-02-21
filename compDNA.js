/* Description:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).   */

function DNAStrand(dna){
  dna = dna.split('')
 for(let i = 0; i<dna.length; i++){
   if(dna[i] == 'T') dna[i] = 'A'
  else if(dna[i] == 'A') dna[i] = 'T'
  else if(dna[i] == 'C') dna[i] = 'G'
  else if(dna[i] == 'G') dna[i] = 'C'
 }
return dna.join('')
}

console.log(DNAStrand("ATTGC"))  // 'TAACG'
console.log(DNAStrand("GTAT"))  // 'CATA'
