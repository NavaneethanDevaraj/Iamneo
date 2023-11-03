const fs = require('fs');

let rawdata = fs.readFileSync('./data/students.json');
let students = JSON.parse(rawdata);

const getAllStudents = (req, res) => {
  res.json(students);
};

const getStudentById = (req, res) => {
  const student = students.find((s) => s.student_id === parseInt(req.params.id));
  if (!student) return res.status(404).send('The student with the given ID was not found.');
  res.json(student);
};

const addStudent = (req, res) => {
  const student = {
    student_id: req.body.student_id,
    name: req.body.name,
    department: req.body.department,
    date_of_birth: req.body.date_of_birth,
  };
  students.push(student);
  fs.writeFileSync('./data/students.json', JSON.stringify(students, null, 2));
  res.send(student);
};

const updateStudent = (req, res) => {
  const student = students.find((s) => s.student_id === parseInt(req.params.id));
  if (!student) return res.status(404).send('The student with the given ID was not found.');

  student.name = req.body.name;
  student.department = req.body.department;
  student.date_of_birth = req.body.date_of_birth;

  fs.writeFileSync('./data/students.json', JSON.stringify(students, null, 2));
  res.send(student);
};

const deleteStudent = (req, res) => {
  const student = students.find((s) => s.student_id === parseInt(req.params.id));
  if (!student) return res.status(404).send('The student with the given ID was not found.');

  const index = students.indexOf(student);
  students.splice(index, 1);

  fs.writeFileSync('./data/students.json', JSON.stringify(students, null, 2));
  res.send(student);
};

module.exports = { getAllStudents, getStudentById, addStudent, updateStudent, deleteStudent };
