import './App.css';
import Cursor from './components/cursorFollower';
import Navbar from './components/Navbar';
import Home from './components/home';
import Tecnologias from './components/tecnologias';


function App() {

  return (
    <div className="App">
      <Cursor/>
      <Navbar/>
      <Home/>
      <Tecnologias/>
      
    </div>
  );

}

export default App;