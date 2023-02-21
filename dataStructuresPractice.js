
let arrOfObj = [
  {
  color: 'red',
  width: '10cm',
  length: '35cm',
  name: 'Sammy'
},
  {
    color: 'green',
    width: '2cm',
    length: '28cm',
    name:'Ariana'
  },
  {
    color:'grey',
    width:'none',
    length:'none',
    name:'Atlas'
  }
]


function objectWork(arrOfObj){
  for(const obj of arrOfObj){
  if(obj.length == '28cm') return obj
}
  return false
}


console.log(objectWork(arrOfObj))
