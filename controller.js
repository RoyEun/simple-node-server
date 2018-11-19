const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

module.exports = {
  getAppHTML(req, res) {
    fs.readFile(path.join(__dirname, './public/app/index.html'), ((err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }));
  },

  getAppCSS(req, res) {
    fs.readFile(path.join(__dirname, './public/app/index.css'), ((err, data) => {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    }));
  },

  getAppJS(req, res) {
    fs.readFile(path.join(__dirname, './public/app/index.js'), ((err, data) => {
      res.writeHead(200, {'Content-Type': 'application/js'});
      res.write(data);
      res.end();
    }));
  },

  getAppFavicon(req, res) {
    fs.readFile(path.join(__dirname, './public/app/favicon.ico'), ((err, data) => {
      res.writeHead(200, {'Content-Type': 'image/x-icon'});
      res.write(data);
      res.end();
    }));
  },

  getSuccessHTML(req, res) {
    fs.readFile(path.join(__dirname, './public/success/index.html'), ((err, data) => {
      res.writeHead(300, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }));
  },

  getSuccessCSS(req, res) {
    fs.readFile(path.join(__dirname, './public/success/index.css'), ((err, data) => {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    }));
  },

  getSuccessJS(req, res) {
    fs.readFile(path.join(__dirname, './public/success/index.js'), ((err, data) => {
      res.writeHead(200, {'Content-Type': 'application/js'});
      res.write(data);
      res.end();
    }));
  },

  getSuccessFavicon(req, res) {
    fs.readFile(path.join(__dirname, './public/success/favicon.ico'), ((err, data) => {
      res.writeHead(200, {'Content-Type': 'image/x-icon'});
      res.write(data);
      res.end();
    }));
  },

  postPrint(req, res) {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      let queryString = `/success/text=${(parse(body)).text}`;
      res.writeHead(301, {'Content-Type': 'text/html', 'Location': queryString});
      res.end();
    });
  }
}
