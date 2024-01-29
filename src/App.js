import './index.css'
import Body from './components/Body';
import Header from './components/Header';
import DarkModeToggle from './components/DarkModeToggle';
function App() {
  return (
    <div className="App">
      <Header />
      <Body /> 
      <DarkModeToggle />
    </div>
  );
}

export default App;
