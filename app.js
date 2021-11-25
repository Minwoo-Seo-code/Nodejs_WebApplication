//entry Application : 프로젝트 규모가 큰 경우, 여러 파일로 하나의 어플리케이션을 만들어지는데,
//이중 가장 최초의 진입 파일을 entry, main 파일이라고 한다.

//express 모듈 사용하기
var express = require('express');
var app = express();
var port = 3000;

app.locals.pretty = true; //코드를 이쁘게 하는 방법
app.set('view engine', 'jade'); //view engine은 template engine이다.
app.set('views', './views'); //관습적으로 jadeExpress는 template engine들의 template파일을 views에 넣는다.
app.use(express.static('public')); //정적인 파일이 위치할 디렉토리를 지정하는 기능.
                                   //나는 public 폴더에 정적인 파일을 넣겠다.

app.get('/topic/:id', function (req, res){
  var topics = [
    'JavaScript is ...',
    'Nodejs is ...',
    'Expressjs is ...'
  ];
  var output = `
    <a href="/topic/:id=0">JavaScript</a><br>
    <a href="/topic/:id=1">Nodejs</a><br>
    <a href="/topic/:id=2">Expressjs</a><br><br>
    ${topics[req.params.id]}
  `;  //params로 바꾸면 입력값을 쿼리스트링으로 받는다.
  res.send(output); //id라는 이름의 쿼리로 request, 즉 req.query.id을 res.send의 값으로 응답하겠다.
//res.send(req.query. name); 이면 쿼리스트링은 name 이어야 한다.
// res.send(req.query.id + ',' + req.query.name);  //2개 이상의 값을 받아와야할 때 사용하는 방법
});

app.get('/topic/:id/:mode', function (req, res){  //Sementic URL의 사용방법
  res.send(req.params.id + ',' + req.params.mode);
});
app.get('/template', function(req, res){ //template을 치고 들어오는 사용자에게 어떻게 보여줄거냐
  res.render('temp', {_title:'this is Title', time:Date()}); //'temp'라는 템플릿 파일을 렌더링해서 전송한다.
                      //render의 두번째 인자로 객체를 전달하는데 변수와 변수값을 객체로 전달한다.
});
app.get('/', function(req, res){ //사용자가 웹 서버를 접속할 때는 get방식과 post방식이 있고 보통 get방식으로 들어온다.
  //사용자가 '/' 홈으로 접속시, 콜백함수를 통해 처리하겠다.
  res.send('Hello homepage, <img src="/qrcode.png">');
});
app.get('/dynamic', function(req, res){
  var lis = '';
  for (var i = 0; i <= 5; i++) {
    lis += '<li>coding</li>'
  }
  var time = Date();
  var output = `
    <!DOCTYPE html>
    <html lang="kr" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        Hello World! this is dynamic page
        <ul>
        ${lis}
        </ul>
        ${time}
      </body>
    </html>
    `;
  res.send(output);
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
