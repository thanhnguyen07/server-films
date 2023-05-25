const usersRouter = require('./users');
const filmsRouter = require('./films');
const cmtsRouter = require('./cmts');
const adminRouter = require('./admin');

function route(app) {
    app.use('/users', usersRouter);

    app.use('/films', filmsRouter);

    app.use('/admin', adminRouter);

    app.use('/cmts', cmtsRouter);
}
module.exports = route;
