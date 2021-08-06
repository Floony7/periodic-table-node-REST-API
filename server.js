const http = require("http")
const elements = require("./elements.json")

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  })
  res.end(JSON.stringify(elements))
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on ${PORT}`))
