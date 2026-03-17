var express=require('express');//importação do express;
var app=express();//execução do express e armazenamento da variável app
app.set('view engine','ejs');//configuração do motor de telas ejs no express
app.set('views', './app/views');//alteração do diretório da pasta views
app.use(express.static("public"));
app.get('/', function(req,res){
	res.render('index');
});
app.get('/noticias', function(req,res){
	var mysql=require('mysql');//importação do mysql;
	var connection=mysql.createConnection(
	{
		host:'localhost',
		user:'ifms',
		password:'ifms',
		database:'portal_noticias'

	});//Criação da conexão com o banco de dados;
	connection.query("select * from noticias", function(error, result){
		if (error){
			console.log(error)
		}
		res.render('noticias.ejs',{noticias:result});
	})
});
app.listen('3000', function(){
	console.log('rodando');
});
