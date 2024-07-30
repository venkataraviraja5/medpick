import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Home from './components/Home';

function App() {
  return (
    <div style={{display:"flex"}}>
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
