import {LOAD_TODO, DELETE_TODO} from './todo.actionTypes'

export const loadTodo = (todos) =>{
    return{
        type:LOAD_TODO,
        payload:todos
    }
}

export const deleteTodo = (id) =>{
    return{
        type:DELETE_TODO,
        payload:id
    }
}