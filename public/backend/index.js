const express = require('express');
const cors = require('cors');
const app = express();
const data = [];


app.use(express.json());
app.use(cors());

app.get('/data', (req, res) => {

	return  res.status(200).json(data);
});

app.post('/data', (req, res) => {
	console.log(req.body);
	data.push({...req.body});
	return res.status(201).json({ msg: 'ok' });
});

app.listen(4000, () => console.log('server is up at 4000'));
