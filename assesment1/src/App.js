import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import AddBlog from './components/AddBlog';




function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
        <Route path='/addblog' element={<AddBlog/>}></Route>
      
      </Routes>
      
    </div>
  );
}

export default App;
