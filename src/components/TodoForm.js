import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
    const [enteredTask, setEnteredTask] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredTask.trim() === '') {
            // need to work on throwing error if user is not adding any input
            return;
        }
        dispatch({ type: 'addTask', title: enteredTask});
        setEnteredTask('');
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="task" className="block py-2 font-bold">
                Enter your Today's task:
            </label>
            <input
                type="text"
                placeholder="Enter your Task"
                id="task"
                className="form-input"
                value={enteredTask}
                onChange={(event) => setEnteredTask(event.target.value)}
                required // Optional: Add required attribute for validation
            />
            <button
                type="submit"
                className="ml-3 px-3 py-2 bg-purple-900 text-white hover:bg-purple-700 font-medium rounded-lg"
            >
                Add Task
            </button>
        </form>
    );
};

export default TodoForm;
