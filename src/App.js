//import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import Newentry from './newentry';
import Percentage from './percentage';
import ClassName from './Classname';
//import PersonNum from './personclassref';
import ClickButton from './class.js'
import ParentClass from './parentclass';
import ChildClass from './childclass'

// function App() {
//  let numbers = "4227"
//   return (
//     <div>
//     <div className="App">
//       <h1>
//         React
//       </h1>
      
//       <p>
//         welcome to the site 
//       </p>
//       <Newentry />
//     </div>
//     </div>
//   );
// }

// export default App;

// const App = () => {

//   return (
//     <>
//     <calendar/>
//     </>
//   );
// };

// export default calendar;

const App = () => {
  return (
    <>
      <ParentClass />
    </>
  );
};

export default App;