
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useSelector } from 'react-redux';

const Todo = () => {
    const addedTaskList = useSelector(state => state.tasksState.toDoList);

    return (
        <div className="place-content-center grid">
            <div className="font-extrabold mx-auto text-center mt-10 mb-5 text-3xl">My To-Do List</div>
            <TodoForm/>
            <TodoList taskList={addedTaskList}/>
        </div>
    )
};

export default Todo;