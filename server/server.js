const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const randomWordRouter = require('./routes/randomWord.router');
const searchWordRouter = require('./routes/searchWord.router.jsx');
const poemRouter = require('./routes/addPoem.router.jsx');
const homePoemRouter = require('./routes/homePoem.router.jsx');
const galleryRouter = require('./routes/gallery.router.jsx');
const userGalleryRouter = require('./routes/userGallery.router.jsx');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/random-word', randomWordRouter);
app.use('/search-word', searchWordRouter);
app.use('/poem', poemRouter);
app.use('/home-poem', homePoemRouter);
app.use('/gallery', galleryRouter);
app.use('/user-gallery', userGalleryRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
