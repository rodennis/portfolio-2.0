import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects'
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/projects' element={ <Projects />}/>
      </Routes>
      <Navbar />
      <Background />
    </div>
  );
}

export default App;
