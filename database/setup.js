const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./database/university.db');


db.run(`
  CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    courseCode TEXT,
    title TEXT,
    credits INTEGER,
    description TEXT,
    semester TEXT
  )
`, function(err) {
  if (err) {
    console.log('Error creating table:', err.message);
  } else {
    
    console.log('Database and courses table created successfully.');
  }

  db.close();
});