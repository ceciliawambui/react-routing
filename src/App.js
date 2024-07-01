// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Nav from './Nav';
// import ClassClick from './components/ClassClick';
// import Click from './components/Click';
// import Test from './components/Test';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      {/* <Test/> */}

      {/* <Click/>
      <ClassClick/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>


      </Routes>
    
     
    </div>
  );
}


export default App;
