import './App.css';
import CallToAction from './components/CallToAction/CallToAction';
import Navbar from './components/Navbar/Navbar';
import Socials from './components/Socials/Socials'
import Background from './components/Background/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <CallToAction />
      <Socials />
      <Navbar />
    </div>
  );
}

export default App;
