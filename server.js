 var
  express    = require('express'),
  bodyParser = require('body-parser'),
  logger     = require('morgan'),
  cors       = require('cors'),
  port       = 3000,
  app        = express()


app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res){
  res.sendFile('home.html', {root: './public/html'})
})


app.listen(port, function(){
  console.log('Server running on port: 3000')
})
