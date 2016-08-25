//importações e configurações
var app = require("./config/express")();

//Importação das rotas
var routeProdutos = require('./app/routes/routeProdutos.js')(app);

//Configuraçõa do servidor
var porta = 3000;

//rotas
app.get("/", function(req, res){
    res.end("<html><body>Home do site</body></html>");
});

//servidor
app.listen(porta, function(){
    console.log("Servidor executando...");
    console.log("Porta: " + porta);
    console.log("IP: localhost");
});
