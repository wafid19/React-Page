import './App.css'
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Secondpage from './pages/Secondpage';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/secondpage' element={<Secondpage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
