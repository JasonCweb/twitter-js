module.exports = function(io) {
  const express = require('express');
  const router = express.Router();
  // could use one line instead: const router = require('express').Router();
  const tweetBank = require('../tweetBank');

  router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets, showForm: true } );
  });

  router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var content = req.body.text;
    tweetBank.add(name, content);
    io.sockets.emit('newTweet', tweetBank.find({name, content})[0]);
    res.redirect('/');
  });

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var tweets = tweetBank.find( {name} );
    res.render( 'index', { tweets, name, showForm: true } );
  });

  router.get('/tweets/:id', function(req, res){
    var id = req.params.id;
    var tweets = tweetBank.find({ id });
    res.render('index', {tweets});
  });

  return router;
};

