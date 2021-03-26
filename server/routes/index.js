module.exports = app => {

    // Base URLS
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/profile', require('./profile.routes.js'))
    app.use('/api/comment', require('./comment.routes'))
    app.use('/api/card', require('./card.routes'))


}