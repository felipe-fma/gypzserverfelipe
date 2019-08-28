const restify = require('restify')
const porta = 8080

const servidor = restify.createServer()

servidor.get('/', (req, res) => {
	res.send('Ae! Servidor criado veio com resposta para o path /.')
	
})

servidor.post('/', (req, res) => {
  res.send('Ae! Servidor criado veio com resposta para o path /.')
})

servidor.del('/', (req, res) => {
  res.send('Ae! Servidor criado veio com resposta para o path /.')
})

servidor.listen(porta, () => {
  console.log(`Servidor de pé em http://localhost:${porta}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})