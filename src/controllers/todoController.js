import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../models/todoModel.js';

export const showTodos = (req, res) => {
  getAllTodos((todos) => {
    res.render('index', { todos });
  });
};

export const addTodo = (req, res) => {
  const { title, description } = req.body;
  createTodo({ title, description }, () => {
    res.redirect('/');
  });
};

export const editTodo = (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  updateTodo(id, { title, description, completed: completed === 'on' }, () => {
    res.redirect('/');
  });
};

export const removeTodo = (req, res) => {
  const { id } = req.params;
  deleteTodo(id, () => {
    res.redirect('/');
  });
};
