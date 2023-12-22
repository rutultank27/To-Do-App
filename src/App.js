import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";
import Login from "./components/Login";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.authState.isLoggedIn);
  return (
    <div>
      <header className="sticky top-0">
        <NavBar />
      </header>
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Todo/>}
      </main>
      <footer className="mt-5">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
