//import logo from './logo.svg';
import './App.css';
// import Welcome from './welcome';
// import Newentry from './newentry';
// import Percentage from './percentage';
// import ClassName from './Classname';
// import PersonNum from './personclassref';
// import ClickButton from './class.js'
// import ParentClass from './parentclass';
// import ChildClass from './childclass'
 //import Swiggy from './swiggy';
// import Menu from './menu';
// import Contact from './contact';
//import Login from './login';
//import "./login.css";
//import Parent from "./parent";
//import LoginPage from "./loginc";
import { Routes, Route, useNavigate } from "react-router-dom";
//import RouterMenu from "./Routermenu"
//import RouterContact from "./Routercontact"
// import Header from "./Header";
// import Footer from "./Footer"
// import HOC from "./hoccomponent";
// import Home from './home';
// import About from './abouth';
// import Skill from './skills';
// import Contact from './contacth';
// import "./portfoli.css";
import ListId from "./listtitle";
import ListTitle from "./listproduct";


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

const App = () => {

  return (
    <>
    <ListId/>
    </>
  );
};

export default App;

// const App = () => {
//   const { navigate } = useNavigate();
//   return (
//     <div>
//        <Routes>
//         <Route exact path = "/" element = {<Swiggy/>}/>
//         <Route exact path = "/menu" element = {<RouterMenu/>}/>
//         <Route exact path = "/contact" element = {<RouterContact/>}/>
//       </Routes>
//     </div>
//   );
// };

// export default App;

// // const App = () => {
//   const {navigate} = useNavigate();
//   return (
//     <div>
      
//         <Routes>
//         <Route exact path = "/" element = {<HOC childElement= {<> </>}/>}/>
//         {/* <Route exact path ="/Header" element = {<HOC childElement={<Header/>}/>}/>
//         <Route exact path ="/Footer" element = {<HOC childElement={<Footer/>}/>}/> */}
//         <Route exact path = "/home" element = {<HOC childElement = {<Home/>}/>}/>
//         <Route exact path = "/abouth" element = {<HOC childElement = {<About/>}/>}/>
//         <Route exact path = "/skills" element = {<HOC childElement = {<Skill/>}/>}/>
//         <Route exact path = "/contacth" element = {<HOC childElement = {<Contact/>}/>}/>
//         </Routes>

//   </div>
//   )
// }
// export default App;