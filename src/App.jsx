import "./App.css";
import Clicker from "./components/Clicker";
import Counter from "./components/Counter";
import Dashboard from "./components/Dashboard";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Inputer from "./components/Inputer";
import ThemeToggle from "./components/ThemeSwitcher";
import WelcomeMessage from "./components/WelcomeMessage";
import Notification from "./components/Notification";
function App() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Greeting name="Liban" lastname="Ali" />
      <Counter />
      <Clicker />
      <Inputer />
      <WelcomeMessage isLoggedIn={true} />
      <Dashboard isLoggedIn={true} />
      <Notification hasNewMessages={true}/>
    </>
  );
}

export default App;
