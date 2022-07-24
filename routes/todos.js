const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)
router.post('/createTodoTwo', todosController.createTodo)
router.post('/createTodoThree', todosController.createTodo)
router.post('/createTodoFour', todosController.createTodo)
router.post('/createTodoFive', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router