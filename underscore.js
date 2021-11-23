var _ = require('underscore');  //underscore의 변수명은 보통 언더바를 사용한다.

var arr = [3,6,9,1,12];

console.log(arr[0]); // 3
console.log(_.first(arr)); // 3
console.log(_.last(arr)); // 12
console.log(_.initial(arr)); // [3, 6, 9, 1]
