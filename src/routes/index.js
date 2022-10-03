const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home');
    //   });
      
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   });
    app.use('/', siteRouter);

    app.use('/news', newsRouter);
      
      // app.get('/search', (req, res) => {
      //   console.log(req.query)
      //   res.render('search');
      // });
}

module.exports = route;
