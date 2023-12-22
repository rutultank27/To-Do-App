import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <div className="my-5">
            <ul>
                {props.taskList.map(task => <TodoItem key={task.id} id={task.id} title={task.title}/>)}
            </ul>
        </div>
    );
};

export default TodoList;