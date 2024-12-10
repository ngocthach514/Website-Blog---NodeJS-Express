const newsRoutes = require('./news');
const siteRoutes = require('./site');

function route(app) {
    app.use('/news', newsRoutes);

    app.use('/', siteRoutes);

    // app.post('/search', (req, res) => {
    //   console.log(req.body);
    //   res.send('');
    // });
}
module.exports = route;
