const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
// middleware
app.use(express.json())
//routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App')
});

app.use('/api/v1/tasks', tasks)

//app.get('/api/v1/tasks');   - get all tasks
//app.post('/api/v1/tasks');  -create a new task
//app.get('/api/v1/tasks/:id'); - get single task
//app.patch('/api/v1/tasks/:id'); - update task
//app.delete('api/v1/tasks/:id'); - delete task

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(process.env.PORT, () => {
			console.log('Server has been started in port ' + process.env.PORT + '...')
		});
	} catch (e) {
		console.log(e)
	}
}

start();
