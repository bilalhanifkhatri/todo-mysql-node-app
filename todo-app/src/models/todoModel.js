import mysql from 'mysql2';

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo_app'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});

export const getAllTodos = (callback) => {
  const query = 'SELECT * FROM todos';
  connection.query(query, (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

export const createTodo = (todo, callback) => {
  const query = 'INSERT INTO todos (title, description) VALUES (?, ?)';
  connection.query(query, [todo.title, todo.description], (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

export const updateTodo = (id, todo, callback) => {
  const query = 'UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?';
  connection.query(query, [todo.title, todo.description, todo.completed, id], (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

export const deleteTodo = (id, callback) => {
  const query = 'DELETE FROM todos WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) throw err;
    callback(results);
  });
};
