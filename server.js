let http = require('http')

const hostname = '127.0.0.1'

const port = 3000

let server = http.createServer( (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Tyoe', 'text/plain')
  res.end('Hello Word')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)

})