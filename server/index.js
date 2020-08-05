const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true, 
	useUnifiedTopology: true, 
	useCreateIndex: true, 
	useFindAndModify: false,
}).then(() => console.log('MongoDb connected'))
	.catch(err => console.log(err));
	
	app.listen(port, () => {
		console.log(`Server Listening on ${port}`)
	});