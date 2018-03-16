const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const Messages = require('./models/messages');

const app = express();
const port = process.env.port || 4040;

mongoose.connect('mongodb://localhost/api');
const db = mongoose.connection;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(bodyParser.json());

app.get('/api', (req, res) => {
	console.log('API REQ')
	res.send('Use <code>/api</code> to acces API');
});


app.listen(port, () => console.log(`express listening on port ${port}`));



// app.get('/api/messages', (req, res) => {
// 	Messages.getMessages((err, messages) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(messages);
// 	});
// });

// app.get('/api/messages/:id', (req, res) => {
// 	Messages.getMessage(req.params.id, (err, message) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(message);
// 	});
// });

// app.post('/api/messages', (req, res) => {
// 	var message = req.body;
// 	Messages.postMessage(message, (err, message) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(message);
// 	});
// });

// app.delete('/api/messages/:id', (req, res) => {
// 	Messages.deleteMessage({_id: req.params.id}, (err, message) => {
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(message);
// 	});
// });