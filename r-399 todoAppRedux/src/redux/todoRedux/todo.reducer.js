import {LOAD_TODO, DELETE_TODO} from './todo.actionTypes'

export const TODO_KEY = 'todoStore'

let initialState =[]

export const todoReducer = (state = initialState, action) =>{
    let {type, payload} = action
    let newTodos
     switch(type){
        case LOAD_TODO:
            newTodos = [...state]
            newTodos.push(action.payload)
            return newTodos

            case DELETE_TODO:
                newTodos = [...state]
                newTodos = newTodos.filter(item => item.id !== action.payload)
                return newTodos

                default: return state
    }


}