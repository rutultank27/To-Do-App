const TodoList = (props) => {
    return (
        <div className="my-5">
            <ul>
                {props.taskList.map(task => <li key={task.id} className="py-2 my-3 rounded border-black border-2"><span className="ml-2 font-bold">{task.title}</span></li>)}
            </ul>
        </div>
    );
};

export default TodoList;