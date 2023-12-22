import { legacy_createStore as createStore} from 'redux';
import { combineReducers } from 'redux';

const initialStateOfTask = {toDoList: []};
const initialStateOfAuth = {isLoggedIn: false};

const taskReducer = (state = initialStateOfTask, action) => {
    if (action.type === 'addTask') {
        const newTask = { id: Math.random().toString(), title: action.title };
        const updatedToDoList = [...state.toDoList, newTask];
        return {
            toDoList: updatedToDoList,
            isLoggedIn: true,
        };
    }

    if (action.type === 'removeTask') {
        const updatedToDoList = state.toDoList.filter((task) => task.id !== action.id);
        return {
            toDoList: updatedToDoList,
            isLoggedIn: true,
        };
    }

    return state;
};

const authReducer = (state = initialStateOfAuth, action) =>  {
    if (action.type === 'logIn') {
        return {
            isLoggedIn: state.isLoggedIn = true,
        };
    }

    if (action.type === 'logOut') {
        return {
            isLoggedIn: state.isLoggedIn = false,
        };
    }
    
    return state;
};

const reducer = combineReducers({
    tasksState: taskReducer,
    authState: authReducer
});

const store = createStore(reducer);

export default store;