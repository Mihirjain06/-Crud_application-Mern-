import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import AllUser from './components/AllUser';
import Crud from './components/Crud';
import EditUser from './components/EditUser';
// for Using url based router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Crud/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/alluser' element={<AllUser/>}/>
        <Route path='/edituser/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
