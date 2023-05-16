import logo from './logo.svg';
import './App.css';
import { Example1 } from './components/Example1';
import TableArray from './components/TableArray';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';

import Basics from './components/Basics';
import { Table } from '@mui/material';
import ViewData from './components/ViewData';


function App() {
  return (
    <div className="App">
      
      <Navigation/>
      <Routes>
        <Route path='/' element={<Basics/>}/>
        <Route path='/Table' element={<TableArray/>}/>
        <Route path='/axios' element={<ViewData/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
