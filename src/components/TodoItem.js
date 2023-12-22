import { useDispatch } from "react-redux";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    
    const removeTaskHandler = () => {
        dispatch({type: 'removeTask', id: props.id});
    };

    return( 
        <li className="group/task mb-2 rounded border-black border-2 flex items-center p-1">
            <span className="ml-2 font-bold">{props.title}</span>
            <span className="mx-5 cursor-pointer text-2xl justify-end ml-auto mr-5 invisible group-hover/task:visible" onClick={removeTaskHandler}>&times;</span>
        </li>
    )
};

export default TodoItem;