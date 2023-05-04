import './App.css';
import Admin from './components/Admin'
import Edit from './components/Edit'
import Editdata from './components/Editdata'
import Add from './components/Add'
import View from './components/View';
import Home from './components/Home';
import Register from './components/Register';
import PagenotFound from './components/PagenotFound';
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='' element={<Admin/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='add' element={<Add/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='edit/:id' element={<Edit/>}></Route>
          <Route path='editData/:id' element={<Editdata/>}></Route>
          <Route path='view/:id' element={<View/>}></Route>
          <Route path={'*'} element={<PagenotFound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
