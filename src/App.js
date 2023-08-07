import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <header className="sticky top-0">
        <NavBar />
      </header>
      <main>
        <Todo/>
      </main>
      <footer className="mt-5">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
