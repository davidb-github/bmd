import { Home } from './home'
import './App.css';

function App() {
  // pass info to home.js via props
const user = {id:1, name: "David"}

  return (
    <div className="App">
      <Home user={user}/>
    </div>
  );
}

export default App;
