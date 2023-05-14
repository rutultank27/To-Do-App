import { useState } from "react";
const TodoForm = (props) => {
    const [enteredTask, setEnteredTask] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('Added task:', enteredTask);
        props.onAddTask({title: enteredTask});
        setEnteredTask('');  
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="task" className="block py-2 font-bold">Enter your Today's task</label>
            <input type="text" placeholder="Enter Task" id="task" className="form-input" value={enteredTask} onChange={event => {
                setEnteredTask(event.target.value);
            }} />
            <button type="submit" className="ml-3 px-3 py-2 rounded-full text-white bg-black hover:bg-gray-400 hover:text-black">Add Task</button>
        </form>
    )
}

export default TodoForm;