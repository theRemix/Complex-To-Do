const httpProxy = require('http-proxy')
const PORT = process.env.PORT || 3000
const proxy = httpProxy.createServer({ target: `http://localhost:${PORT}` })

module.exports = {
  mount: {
    public: '/',
    client: '/dist',
  },
  routes: [
    {
      src: '/api/.*',
      dest: (req, res) => {
        proxy.web(req, res)
      },
    },
  ],
  devOptions: {
    output: 'stream', // dont clear terminal
  },
}
