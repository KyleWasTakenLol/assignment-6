
const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./database/university.db');


const courses = [
  ['CS101',   'Intro Programming',  3, 'Python basics',                                           'Fall 2026'],
  ['BIO120',  'General Biology',    3, 'Introduction to biological principles',                   'Fall 2026'],
  ['MATH150', 'Calculus I',         4, 'Basic calculus',                                          'Fall 2026'],
  ['ENG101',  'Composition I',      3, 'Academic writing and critical thinking',                  'Spring 2027'],
  ['ME210',   'Thermodynamics',     3, 'Principles of thermodynamics and heat transfer',          'Spring 2027'],
  ['CS301',   'Database Systems',   3, 'Design and implementation of database systems',           'Fall 2026'],
  ['PHYS201', 'Physics II',         4, 'Electricity, magnetism, and modern physics',              'Spring 2027'],
  ['CS201',   'Data Structures',    4, 'Study of fundamental data structures and algorithms',     'Spring 2027'],
];

const stmt = db.prepare(
  'INSERT INTO courses (courseCode, title, credits, description, semester) VALUES (?, ?, ?, ?, ?)'
);

courses.forEach(course => {
  stmt.run(course);
});

stmt.finalize(function(err) {
  if (err) {
    console.log('Error seeding database:', err.message);
  } else {
    
    console.log('Courses successfully added to the database.');
  }


  db.close();
});