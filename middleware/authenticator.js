const auth = (req, res, next) => {
    console.log('Autenticando...');
    next();
}
module.exports = auth;