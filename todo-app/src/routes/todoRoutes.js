import express from 'express';
import { showTodos, addTodo, editTodo, removeTodo } from '../controllers/todoController.js';

const router = express.Router();

// Routes
router.get('/', showTodos);
router.post('/add', addTodo);
router.post('/edit/:id', editTodo);
router.get('/delete/:id', removeTodo);

export default router;
