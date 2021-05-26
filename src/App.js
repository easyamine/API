import "./App.css";
import UserList from "./components/UserList";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className='App'>
      <NavBar />
      <UserList />
    </div>
  );
}

export default App;