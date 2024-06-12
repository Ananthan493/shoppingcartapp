import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewnews from './components/Viewnews';
import Newview from './components/Newview';
import Newdynamic from './components/Newdynamic';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddProduct/>}/>
    <Route path='/search' element={<SearchProduct/>}/>
    <Route path='/delete' element={<DeleteProduct/>}/>
    <Route path='/newview' element={<Newview/>}/>
    <Route path='/viewnews' element={<Viewnews/>}/>
    <Route path='/newdyn' element={<Newdynamic/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
