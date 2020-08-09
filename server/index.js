const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');


const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, 
	useUnifiedTopology: true, 
	useCreateIndex: true, 
	useFindAndModify: false,
}).then(() => console.log('MongoDb connected'))
	.catch(err => console.log(err));
	
	app.listen(port, () => {
		console.log(`Server Listening on ${port}`)
	});

	// bodyParser
	app.use(bodyParser.urlencoded({ extended: true }));  
	app.use(bodyParser.json());
// cookieParser
	app.use(cookieParser());


	app.use('/api/users', require('./routes/users'));
	app.use('/api/favorite', require('./routes/favorite'));