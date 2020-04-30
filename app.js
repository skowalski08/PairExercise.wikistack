const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const { db, User, Page } = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', require('./routes/wiki'));
// app.use('/user', require('./routes/user'))

app.get('/', async (req, res, next) => {
  try {
    res.send(layout(''));
  } catch (error) {
    next();
    console.log(error);
  }
});

db.authenticate().then(() => {
  console.log('connected to the database');
});

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  // await Page.sync()p
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
