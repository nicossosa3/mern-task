const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect(URI)
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err));


module.exports = mongoose;
