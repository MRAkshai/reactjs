import logo from './logo.svg';
import './App.css';
import Navigator from './components/Navigator';
import {Route, Routes } from 'react-router-dom';
import ViewDetails from './components/ViewDetails';
import EnterDetails from './components/EnterDetails';


function App() {
  return (
    <div className='App'>
      <Navigator/>
      <br></br>
      <br></br>
      <Routes>
        <Route path='/'element={<Navigator/>}> </Route>
        <Route path='/axios'element={<EnterDetails/>}> </Route>
        <Route path='/table'element={<ViewDetails/>}> </Route>
      </Routes>

      
      

    </div>
  );
}

export default App;
