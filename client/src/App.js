import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects'
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        {/* <Route path='/projects' element={ <Projects />}/>
        <Route path='/skills' element={ <Skills />}/> */}
        <Route path='/contact' element={ <Contact />}/>
      </Routes>
      {/* <Navbar /> */}
      <Background />
    </div>
  );
}

export default App;
