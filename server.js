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
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', '/index.html'), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  res.send(renderedLayout);
});

app.get("/iphones", (req, res) => {
  
    const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
    const content = fs.readFileSync(path.join(__dirname, 'pages', '/iphones.html'), 'utf8');
    const renderedLayout = layout.replace('{{content}}', content);
    res.send(renderedLayout);
});

app.get("/ipads", (req, res) => {
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', '/ipads.html'), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  res.send(renderedLayout);
});

app.get("/macs", (req, res) => {
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', '/macs.html'), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  res.send(renderedLayout);
});

app.get("/gadgets", (req, res) => {
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', '/gadgets.html'), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  res.send(renderedLayout);
});

app.get("/gadgets/air-pods", (req, res) => {
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', '/air-pods.html'), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  res.send(renderedLayout);
});

app.get("/gadgets/watch", (req, res) => {
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', '/watch.html'), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  res.send(renderedLayout);
});

app.get("/gadgets/air-tag", (req, res) => {
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', '/air-tag.html'), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  res.send(renderedLayout);
});

app.get("/gadgets/acoustic", (req, res) => {
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', '/acoustic.html'), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  res.send(renderedLayout);
});

app.get("/cart", (req, res) => {
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', '/cart.html'), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  res.send(renderedLayout);
})

app.get('/get-product.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
});

app.use(function(req, res) {
  const layout = fs.readFileSync(path.join(__dirname, 'pages', './layout.html'), 'utf8');
  const content = fs.readFileSync(path.join(__dirname, 'pages', './error.html'), 'utf8');
  const renderedLayout = layout.replace('{{content}}', content);
  res.status(404).send(renderedLayout);
});