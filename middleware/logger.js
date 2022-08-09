const log = (req, res, next) => {
    console.log('Logging todas las peticiones al servidor...');
    next();
}
module.exports = log;