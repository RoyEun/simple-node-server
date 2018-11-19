const controller = require('./controller');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');
const Handler = require('./utils');

const router = {
  'GET': {},
  'POST': {},
  'PUT': {},
  'DELETE': {}
};

router.route = function(req, res) {
  let url = req.url;
  let method = req.method;

  console.log(method, url);

  if (method === "GET" && url.slice(0, 14) === '/success/text=') {
    router[method][url] = router.createHandler(controller.getSuccessHTML);
  }

  return router[method][url];
}

router.createHandler = function(method) {
  return new Handler(method);
}

router['GET']['/'] = router.createHandler(controller.getAppHTML);
router['GET']['/public/app/index.css'] = router.createHandler(controller.getAppCSS);
router['GET']['/public/app/index.js'] = router.createHandler(controller.getAppJS);
router['GET']['/public/app/favicon.ico'] = router.createHandler(controller.getAppFavicon);
router['GET']['/public/success/index.html'] = router.createHandler(controller.getSuccessHTML);
router['GET']['/public/success/index.css'] = router.createHandler(controller.getSuccessCSS);
router['GET']['/public/success/index.js'] = router.createHandler(controller.getSuccessJS);
router['GET']['/public/success/favicon.ico'] = router.createHandler(controller.getSuccessFavicon);
router['POST']['/print'] = router.createHandler(controller.postPrint);

module.exports = router;
