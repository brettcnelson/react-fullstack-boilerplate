const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const defaultCollection = require('./models/default');

mongoose.connect('mongodb://localhost/default');
const db = mongoose.connection;

const app = express();

app.set('port', process.env.port || 4040);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(bodyParser.json());

app.get('/api', (req, res) => {
	res.json({"check":"Express Proxy Server Connected: Use <code>/api</code> to acces proxy server"});
});

app.post('/api/entries', (req, res) => {
	var entry = req.body;
	defaultCollection.create(entry, (err, entry) => {
		if (err) {
			throw err;
		}
		res.json(entry);
	});
});

app.get('/api/entries', (req, res) => {
	defaultCollection.find((err, entries) => {
		if (err) {
			throw err;
		}
		res.json(entries);
	});
});

app.put('/api/entries/:_id', (req, res) => {
	defaultCollection.findByIdAndUpdate(req.params._id, req.body, {new:true}, (err, entry) => {
		if (err) {
			throw err;
		}
		res.json(entry);
	});
});

app.delete('/api/entries/:_id', (req, res) => {
	defaultCollection.findByIdAndRemove(req.params._id, (err, result) => {
		if (err) {
			throw err;
		}
		console.log(result)
		res.json(result);
	});
});


app.listen(app.get('port'), () => console.log(`express listening on port ${app.get('port')}`));
