import TodoItem from "./TodoItem";

const TodoList = (props) => {

    const removeTaskFromListHandler = (id) => {
        props.OnRemoveFromList(id);
    }

    return (
        <div className="my-5">
            <ul>
                {props.taskList.map(task => <TodoItem key={task.id} id={task.id} title={task.title} OnRemove={removeTaskFromListHandler}/>)}
            </ul>
        </div>
    );
};

export default TodoList;