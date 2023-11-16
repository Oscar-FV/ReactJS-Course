interface Iaction{
    type: string,
    payload: Itodo
}

interface Itodo{
    id:number, 
    todo: string,
    done: boolean
}

const initialState:Itodo[] = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];



const todoReducer = (state = initialState, action: Iaction) => {
    if( action ){
        if( action.type === '[TODO] add todo'){
            return [ ...state, action.payload]
            
        }
    }

    return state;
}

const newTodo: Itodo = {
    id: 2, 
    todo: 'Recolectar la piedra del poder',
    done: false
};

const addTodoAction: Iaction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

let todos = todoReducer()
todos = todoReducer (todos, addTodoAction);

console.log(todos)

