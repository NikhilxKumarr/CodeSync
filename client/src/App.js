import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import EditorPage from './component/EditorPage';
import{Route,Routes} from 'react-router-dom';
import {Toaster } from 'react-hot-toast';



function App() {
  return (
    <>
      <Toaster position='top-center'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor/:roomId' element={<EditorPage/>}/>
      </Routes>
    
    
    </>
  );
}

export default App;
