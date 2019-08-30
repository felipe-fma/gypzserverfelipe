const restify = require('restify')
var database = require('./Model/database')
var porta = 8081

var servidor = restify.createServer();

servidor.use(restify.plugins.queryParser({ mapParams: true }));
servidor.use(restify.plugins.bodyParser({ mapParams: true }));
servidor.use(restify.plugins.acceptParser(servidor.acceptable));

servidor.get('/', (req, res) => 
{
  var call = function(row){
    res.send(row);
  }
  database.getAll(s);
})

servidor.post('/', (req, res) => 
{
  const { nome, renda } = req.body;  
  var score = parseInt(Math.random() * 1000);

  var lErr = true;
  var limite = 0;

  if (score <= 299)
    lErr = false;
  
  if (score >= 300 && score <= 599)
    limite = 1000;

  if (score >= 600 && score <= 799)
    limite = renda * 1.5;

  if (score >= 800 && score <= 950)
    limite = renda * 2;

  if (score >= 951 )
    limite = 0;

  if(lErr)
    database.insert(nome, limite, renda, (erro, row) => {
      if(erro == undefined)
        res.send(`Limite concedido de ${limite} para o cliente ${nome}`);
      else 
        res.send(`Deu erro ${erro}`)
    });
  else
    res.send(`Score baixo ${score}`);
})

servidor.del('/', (req, res) => 
{
  const { id } = req.body;  

  database.del(id, (err, row) => {
    if(err == null)
      res.send(`Cliente deletado`);
    else
      res.send(`Erro ${err}`);
  });
})

servidor.listen(process.env.PORT || porta, () => 
{
  database.createTable();
})