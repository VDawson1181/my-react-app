// https://youtu.be/CgkZ7MvWUAA?si=9Z-I9c1Hf38Crb2M&t=9601
import './reset.css';
// import Header from "./Header.jsx"
// import Home from "./Home.jsx";
// import Card from "./Card.jsx";
// import Footer from "./Footer.jsx"
// import Counter from "./Counter.jsx";
// import MyComponent from "./MyComponent.jsx";
// import ColorPicker from "./ColorPicker.jsx";
// import MyUpdatedObjectComponent from "./MyUpdatedObjectComponent.jsx";
// import MyUpdatedArrayComponent from "./MyUpdatedArrayComponent.jsx";
// import ToDoList from "./ToDoList.jsx";
// import UseEffectExample from "./UseEffectExample.jsx";
// import DigitalClockApp from "./DigitalClock/DigitalClockApp.jsx";
// import ComponentA from "./useContextExample/ComponentA.jsx";
// import ToggleButton from "./ToggleButton/ToggleButton";
// import './ToggleButton/ToggleButton.css'
// import UseRefComponent from "./useRefExample/UseRefComponent";
// import StopWatchApp from "./StopWatch/StopWatchApp";
// import PkgArticle from "./components/Pkg_Article/PkgArticle";
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  const users = [
    {name: "Val Dawson", copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit!", age: 42, isValid: true, image: "https://picsum.photos/150/150"},
    {name: "SpongeBob", copy: "Who wants a Krabby patty?", age: 22, isValid: false, image: "https://picsum.photos/150/150"},
    {name: "Peter Venkman", copy: "Who Ya Gonna Call?", age: 73, isValid: true, image: "./src/assets/GBLogo.jpg"},
    {name: "Raymond Stanz", copy: "Listen, do you smell something?", age: 72, isValid: true, image: "./src/assets/GBLogo.jpg"},
    {name: "Egon Spengler", copy: "This is extremely bad", age: 79, isValid: true, image: "./src/assets/GBLogo.jpg"},
    {name: "Winston Zeddemore", copy: "I Love This Town!", age: 78, isValid: true, image: "./src/assets/GBLogo.jpg"},
  ];
  users.sort((a, b) => a.age - b.age); // Sort users by age
  // users.sort((a, b) => a.name.localeCompare(b.name)); // Sort users by name

  const autobots = [
    {name: "Optimus", copy: "Autobots; Transform!", age: 29, isValid: true, image: "https://picsum.photos/150/150"},
    {name: "Bumblebee", copy: "Buzz buzz", age: 22, isValid: true, image: "https://picsum.photos/150/150"},
    {name: "Ratchet", copy: "Speed it up", age: 25, isValid: false, image: "https://picsum.photos/150/150"},
  ];
  // autobots.sort((a, b) => a.name.localeCompare(b.name)); // Sort users by name
  autobots.sort((a, b) => a.age - b.age); // Sort users by age
  // const cards = users.map((user, index) => <Card key={index} index={index+1} name={user.name} copy={user.copy} age={user.age} isValid={user.isValid}/>);

  return(
    <>
      {/* <Header/>
      <Home/> */}
      {/* <div id="cardContainer">
        {users.length > 0 && <Card items={users} category="users"/>}
        {users.length > 0 && <Card items={autobots} category="transformers"/>}
      </div> */}
      {/* <Footer/> */}
      {/* <Counter/> */}
      {/* <MyComponent/> */}
      {/* <ColorPicker/> */}
      {/* <MyUpdatedObjectComponent/> */}
      {/* <MyUpdatedArrayComponent/> */}
      {/* <ToDoList></ToDoList> */}
      {/* <UseEffectExample></UseEffectExample> */}
      {/* <DigitalClockApp type={1}></DigitalClockApp>
      <DigitalClockApp type={2}></DigitalClockApp> */}
      {/* <ComponentA/> */}
      {/* <UseRefComponent></UseRefComponent> */}
      {/* <StopWatchApp></StopWatchApp> */}
      {/* <PkgArticle></PkgArticle> */}
        {/* <Home/> */}
        <Navbar/>
    </>
  );
}

export default App
