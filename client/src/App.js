import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import EditorPage from './component/EditorPage';
import{Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor/:roomId' element={<EditorPage/>}/>
      </Routes>
    
    
    </>
  );
}

export default App;
