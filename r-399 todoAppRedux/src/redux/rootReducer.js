import {todoReducer, TODO_KEY} from './todoRedux/todo.reducer'
import {combineReducers} from 'redux'


let rootReducer = combineReducers({
    [TODO_KEY]:todoReducer
})

export {rootReducer}