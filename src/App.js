import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionFour from './components/SectionFour';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionFour />
    </div>
  );
}

export default App;
