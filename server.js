const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

const port = 5000;
const host = 'localhost';

app.listen(5000, () => {
  console.log(`Application started and Listening on http://${host}:${port}`);
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.send(getPage('./index.html'));
});

app.get("/iphones", (req, res) => {
    res.send(getPage('/iphones.html'));
});

app.get("/ipads", (req, res) => {
  res.send(getPage('./ipads.html'));
});

app.get("/macs", (req, res) => {
  res.send(getPage('/macs.html'));
});

app.get("/gadgets", (req, res) => {
  res.send(getPage('./gadgets.html'));
});

app.get("/gadgets/air-pods", (req, res) => {
  res.send(getPage('/air-pods.html'));
});

app.get("/gadgets/watch", (req, res) => {
  res.send(getPage('/watch.html'));
});

app.get("/gadgets/air-tag", (req, res) => {
  res.send(getPage('/air-tag.html'));
});

app.get("/gadgets/acoustic", (req, res) => {
  res.send(getPage('/acoustic.html'));
});

app.get("/cart", (req, res) => {
  res.send(getPage('/cart.html'));
})

app.get('/get-product.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
});

app.use(function(req, res) {
  res.status(404).send(getPage('./error.html'));
});



function getPage(link) {
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', link), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  return renderedLayout;
}