import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Pages/sidebar';
import Register from './Pages/register';
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';
import Documentation from './Pages/documentation';
import Events from './Pages/events';
import Movies from './Pages/movies';
import Task from './Pages/task';
import Team from './Pages/team';


function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Sidebar>
          <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/task' element={<Task/>}/>
          <Route path='/documentation' element={<Documentation/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/logout' element={<Login/>}/>
          </Routes>
          </Sidebar>
          </BrowserRouter>
    </div>
  );
}

export default App;
