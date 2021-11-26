var express = require('express'); //express module 사용
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();  //express함수를 app이라는 변수의 이름으로 사용하겠다.
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true;
app.set('views', './views_file'); //views_file에 템플릿 파일을 넣겠다는 설정
app.set('view engine', 'jade'); //어떠한 템플릿 엔진을 사용할 것인지

//해당 url을 통해 form이 있는 페이지로 이동
app.get('/topic/new', function (req, res){
  res.render('new');
});

//get방식으로 topic을 입력했을때 처리 방식
app.get('/topic', function (req, res){
  fs.readdir('data/', function(err, files){ //디렉토리 안에 있는 파일들을 읽겠다
    if(err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.render('view', {topics:files}); //2번째는 템플릿 파일안으로 주입하고자 하는 데이터를 객체형식으로 전달한다.
    } // else ended
  }); //readdir 메소드 ended
});
app.get('/topic/:id', function (req, res){ //id를 통해서 들어오면 일단 디렉토리에 있는 파일들을 먼저 읽고 난 후
  var id = req.params.id; // :id 방식은 params를 사용한다.
  fs.readdir('data/', function(err, files){
    if(err) {
      res.status(500).send('Internal Server Error');
    } else {
      fs.readFile('data/'+id, 'utf8', function(err, data){
          res.render('view', {topics:files, title:id});
      }); //readFile ended
    } // else ended
  }); //readdir 메소드 ended
}); ///topic/:id ended

//form에서 입력한 값을 post로 보내고 그것을 처리하기 위해 작성
app.post('/topic', function (req, res){
  var description = req.body.description;
  var title = req.body.title;
  fs.writeFile('data/'+title, description, function (err){
    if(err){
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Success');
    } //else ended
  }); //fs.writeFile ended
});

app.listen(3000, function(){
  console.log('app_file.js connected!!!');
});
