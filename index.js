const express = require('express');
const app = express();
const mysql = require('mysql');
const handlebars = require('express-handlebars')

const urlencodedParser = app.use(express.urlencoded({extended: false}));
//app.use(express.json());

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306
})

//sql.query("use nodejs");

app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/css', express.static('css'));
//app.use('/js', express.static('js'));

//app.get('/:id?', (req, res, next) => {
    //res.send("OK");
    //res.render('index');
    //console.log(req.params.id);
//}//);

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/inserir', function(req, res){
    res.render('inserir');
});

sql.query("use nodejs");
app.post('/controllerForm', function(req, res) {
    sql.query('insert into user values (?, ?, ?', [req.body.id, req.body.name, req.body.age]);
    res.render('controllerForm');
});

app.listen(3001, () => {
    console.log("Deu certo!")
});