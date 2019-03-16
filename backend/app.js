const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  )
  next();
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'h23jhh32324j32h4',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: '34b5jh43v4hjv5',
      title: 'Second server-side post',
      content: 'This is coming from the server'
    }
  ];
  res.status(200).json({
    message: 'Post fetched successfully!',
    posts: posts
  });
});

module.exports = app;
