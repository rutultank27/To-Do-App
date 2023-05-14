
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from 'react';

const Todo = () => {
    const [addedTaskList, setAddedTaskList] = useState([]);

    const updateTaskListHandler = addedTask => {
        setAddedTaskList(prevTasks => [
          ...prevTasks,
          { id: Math.random().toString(), ...addedTask }
        ]);
    };

    return (
        <div className="place-content-center grid">
            <div className="font-bold mx-auto text-center my-5 text-3xl font-sans">My To-Do List</div>
            <TodoForm onAddTask={updateTaskListHandler}/>
            <TodoList taskList={addedTaskList}/>
        </div>
    )
};

export default Todo;