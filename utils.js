module.exports = function(method){
  this.handleRoute = (req, res) => {
    params = null;
    return method.apply(this, [req, res, params]);
  }
}
