import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signin from '../../Project/Signin/Signin.js'
import Signup from '../../Project/Signup/Signup.js'
import Home from '../Home/Home.js'
import ViewR from '../ViewR/ViewR.js';
import Scifi from '../ViewR/Scifi/Intersteller/Intersteller.js';
import Horror from '../ViewR/Horror/Exocisit.js'
import Trailer from '../Trailer/Trailer.js'
import About from '../About/About.js'
import Form from '../MyReview/Form.js'
const Navigate = () =>{
  return(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Scifi" element={<Scifi/>}/>
        <Route path="/Horror" element={<Horror/>}/>
        <Route path="/ViewR" element={<ViewR/>}/>
        <Route path="/Trailer" element={<Trailer/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path="/Form" element={<Form/>}/>
        </Routes>
        </BrowserRouter>
        )
      }
export default Navigate;