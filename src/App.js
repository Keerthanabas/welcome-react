//import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
function App() {
 let b = "keerthana"
  return (
    <div>
    <div className="App">
      <h1>
        React
      </h1>
      <Welcome />
      <p>
        hai this is {b}
      </p>
    </div>
    </div>
  );
}

export default App;
