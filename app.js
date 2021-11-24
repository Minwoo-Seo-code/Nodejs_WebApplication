//entry Application : 프로젝트 규모가 큰 경우, 여러 파일로 하나의 어플리케이션을 만들어지는데,
//이중 가장 최초의 진입 파일을 entry, main 파일이라고 한다.

//express 모듈 사용하기
var express = require('express');
var app = express();
app.use(express.static('public'));//정적인 파일이 위치할 디렉토리를 지정하는 기능
var port = 3000;

app.get('/', function(req, res){ //사용자가 웹 서버를 접속할 때는 get방식과 post방식이 있고 보통 get방식으로 들어온다.
  //사용자가 '/' 홈으로 접속시, 콜백함수를 통해 처리하겠다.
  res.send('Hello homepage');
});
app.get('/login', function(req, res){ // ''경로, 콜백함수를 통한 처리
  //사용자가 '/' 홈으로 접속시, 콜백함수를 통해 처리하겠다.
  res.send(`
    <form action="" method="post">
      <input type="text" placeholder="id를 입력하세요." name="id">
      <input type="password" placeholder="password를 입력하세요." name="password">
      <input type="submit" placeholder="제출">
    </form>`);
});
app.get('/logout', function(req, res){ // 이것을 라우터(Router)라고 하고, request가 왔을때 연결을 해주는 것이다.
  //사용자가 '/' 홈으로 접속시, 콜백함수를 통해 처리하겠다.
  res.send('logout Plz');
});
app.listen(port, function(){
  console.log('Connected to 3000 port');
});
