const express = require('express');
const bodyParser = require('body-parser');
const studentController = require('./studentController');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/students', studentController.getAllStudents);
app.get('/students/:id', studentController.getStudentById);
app.post('/students', studentController.addStudent);
app.put('/students/:id', studentController.updateStudent);
app.delete('/students/:id', studentController.deleteStudent);

app.listen(port, () => console.log(`Server running on port ${port}`));
