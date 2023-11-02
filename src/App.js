import './App.css';
import Cursor from './components/cursorFollower';
import Navbar from './components/Navbar';
import Home from './components/home';
import Tecnologias from './components/tecnologias';
import Acordeon from './components/experiencia';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Cursor/>
      <Navbar/>
      <Home/>
      <Tecnologias/>
      <Acordeon/>
      
    </div>
  );

}

export default App;