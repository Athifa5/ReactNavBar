import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './components/Aboutme';
import Contactme from './components/contactme';
import Home from './components/Home';
function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home/>}></Route>
          <Route path = '/AboutUs' element={<AboutMe/>}></Route>
          <Route path = '/ContactUs' element={<Contactme/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;