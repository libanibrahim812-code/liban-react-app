import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Greeting name="Liban" lastname="Ali" />
      <Counter />
    </>
  );
}

export default App;
