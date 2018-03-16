const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const Messages = require('./models/messages');

// mongoose.connect('mongodb://localhost/api');
// const db = mongoose.connection;

const app = express();

app.set('port', process.env.port || 4040);

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }

// app.use(bodyParser.json());

app.get('/api', (req, res) => {
	console.log('API REQ')
	res.json({"check":"pass"});
	// 'Use <code>/api</code> to acces API'
});


app.listen(app.get('port'), () => console.log(`express listening on port ${app.get('port')}`));
