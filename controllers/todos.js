const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        try{
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        console.log(req.body.todoItem)
        try{
            for(let i = 0; i < (req.body.todoItem.length); i++ ){
            await Todo.create({todo: req.body.todoItem[i], completed: false})}
            console.log('Todo has been added!')
            res.redirect('/todos')
               
        }catch(err){
            console.log(err)
        }
    },
    // createTodoTwo: async (req, res)=>{
    //     try{
    //         await Todo.create({todo: req.body.todoItem, completed: false})
    //         console.log(req.body.todoItem)
    //         console.log('Todo has been added!')
    //         res.redirect('/todos')
            
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // createTodoThree: async (req, res)=>{
    //     try{
    //         await Todo.create({todo: req.body.todoItem, completed: false})
    //         console.log('Todo has been added!')
    //         res.redirect('/todos')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },createTodoFour: async (req, res)=>{
    //     try{
    //         await Todo.create({todo: req.body.todoItem, completed: false})
    //         console.log('Todo has been added!')
    //         res.redirect('/todos')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },createTodoFive: async (req, res)=>{
    //     try{
    //         await Todo.create({todo: req.body.todoItem, completed: false})
    //         console.log('Todo has been added!')
    //         res.redirect('/todos')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    