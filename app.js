const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  res.render('todo', list)
});

let list = {
  title: 'Todo',
  items: ['Learn Node basics', 'Learn Express basics', 'Learn Mustache', 'Learn HTML forms with Express', 'Learn about authentication', 'Learn how to create databases', 'Learn SQL', 'Learn how to connect PostgreSQL', 'Learn how to use Sequelize']
};

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
