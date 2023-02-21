function getFirstPython(list) {
  for (const dev of list){
    if(dev.language == 'Python') return `${dev.firstName}, ${dev.country}`
  }
  return `There will be no Python developers`
}

console.log(getFirstPython(  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }))  // 'Victoria, Puerto Rico'
