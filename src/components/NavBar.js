import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
    const isLoggedIn = useSelector(state => state.authState.isLoggedIn);
    const dispatch = useDispatch();
    
    const logOutHandler = () => {
        dispatch({type: 'logOut'})
    }
    return (
            <nav className="bg-purple-900 text-white flex justify-between">
                <div className="font-bold items-center text-xl flex mx-3">
                    To-Do App 
                </div>
                <div>
                    <ul className="px-28 py-4 flex space-x-11 justify-end">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Contact Us</li>
                        {isLoggedIn &&<li className="cursor-pointer" onClick={logOutHandler}>Log out</li>}
                    </ul>
                </div>
            </nav>
    );
};

export default NavBar;