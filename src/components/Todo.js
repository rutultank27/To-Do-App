
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from 'react';

const Todo = () => {
    const [addedTaskList, setAddedTaskList] = useState([]);
    const [isTaskPresent, setIsTaskPresent] = useState(false);

    const updateTaskListHandler = addedTask => {
        const taskTitle = addedTask.title;
        let isTaskDuplicate = addedTaskList.some(task => task.title === taskTitle);
        if (!isTaskDuplicate) {
          setIsTaskPresent(false);
          setAddedTaskList(prevTasks => [
          ...prevTasks,
          { id: Math.random().toString(), ...addedTask }
        ]);
        } else {
            setIsTaskPresent(true);
            console.log('Entered Task is already present in the list');
        }
    };

    const removeTaskItemFromListHandler = (id) => {
        const newTaskList = addedTaskList.filter((task) => task.id !== id);
        setAddedTaskList(newTaskList);
    }

    return (
        <div className="place-content-center grid">
            <div className="font-bold mx-auto text-center my-5 text-3xl font-sans">My To-Do List</div>
            <TodoForm onAddTask={updateTaskListHandler}/>
            {isTaskPresent && <p className='mt-3 font-bold text-red-600'>Entered Task is already present in the list</p>}
            <TodoList taskList={addedTaskList} OnRemoveFromList={removeTaskItemFromListHandler}/>
        </div>
    )
};

export default Todo;