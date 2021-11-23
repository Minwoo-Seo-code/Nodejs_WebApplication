var fs = require('fs');

//동기적 방식 sync
//동기적인 방식은 순차적으로 진행된다. 그러면 문제는 코드가 길때 파일 읽는걸 마지막에 하면 문제가 된다
console.log(1); //실제 동작순서 : 1
var data =  fs.readFileSync('Hello.js', {encoding:'utf8'});
console.log(data);  //실제 동작순서 : 2
console.log(2); //실제 동작순서 : 3

console.log('----------');

//비동기적 방식 Async
console.log(2); //실제 동작순서 : 1
fs.readFile('Hello.js', {encoding:'utf8'}, function(err, data){
  console.log(3); //실제 동작순서 : 3
  console.log(data);  //실제 동작순서 : 4
});
console.log(4); //실제 동작순서 : 2
