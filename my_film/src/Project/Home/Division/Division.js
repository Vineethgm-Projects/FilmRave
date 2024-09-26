import React from 'react'
import './Division.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import exorcist from '../Image/exorcist-believer.jpg'
import Backtofuture from '../Image/Backtofuture.jpg'
import Inception from '../Image/Inception.jpg'
import Independenceday from '../Image/Independenceday.jpg'
import Interstellar from '../Image/Interstellar.jpg'
import Matrix from '../Image/Matrix.jpg'
import Passengers from '../Image/Passengers.jpg'
import Wandering from '../Image/Wanderingearth.jpg'
import B from '../Image/13B.jpeg'
import Cobweb from '../Image/Cobweb.jpg'
import Conjuring from '../Image/Conjuring.jpg'
import Evildead from '../Image/Evildead.jpg'
import It from '../Image/It.jpg'
import Nun from '../Image/Nun.jpeg'
import Darkknight from '../Image/Darkknight.jpeg'
import Equalizer from '../Image/Equalizer.jpg'
import Vikram from '../Image/Vikram.jpg'
import Vikramvedha from '../Image/Vikramvedha.jpeg'
import Smile from '../Image/Smile.jpeg'
import Sherlockholmes from '../Image/Sherlockholmes.jpg'
import Jokerj from '../Image/Joker.jpg'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
const Division = () => {
  const navigate = useNavigate();
  const handleScifi=()=>
  {
    navigate("/Scifi");
  }
  const handleHorror=()=>
  {
    navigate("/Horror");
  }
  const handleThriller=()=>
  {
    navigate("/ViewR");
  }
  return (
    <div>
    
    <div>
  <h3>Sci-Fi</h3>
  <hr size={3} align="right" color="#FF0000" width="90%" />
   <div className="slider">
    
    <div className="slide"><img src={Interstellar} alt />
    <h1>Interstellar</h1>
    <Stack spacing={1} >
    <Button className="vr" variant="text" onClick={handleScifi}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={5} readOnly/>
    </Stack>
    </div>

    <div className="slide"><img src={Inception} alt />
    <h1>Inception</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleScifi}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={4} readOnly/>
    </Stack>
    </div>

    <div className="slide"><img src={Passengers} alt />
    <h1>Passengers</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleScifi}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={4} readOnly/>
    </Stack>
    </div>

    <div className="slide"><img src={Matrix} alt />
    <h1>The Matrix</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleScifi}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={5} readOnly/>
    </Stack>
</div>
    <div className="slide"><img src={Independenceday} alt />
    <h1>Independence Day</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleScifi}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={3} readOnly/>
    </Stack>
    </div>

    <div className="slide"><img src={Backtofuture} alt />
    <h1>Back To The Future</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleScifi}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={3} readOnly/>
    </Stack>
    </div>

    <div className="slide"><img src={Wandering} alt />
    <h1>The Wandering Earth</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleScifi}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={3} readOnly/>
      </Stack>
      </div>
  </div>
</div>

{/* This is a line break */}

<div>
  <h3>Horror</h3>
  <hr size={3} align="right" color="#FF0000" width="90%" />
   <div className="slider">
    <div className="slide"><img src={exorcist} alt />
    <h1>The Exorcist-Believer</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleHorror}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={3} readOnly/>
    </Stack>
    </div>

    <div className="slide"><img src={B} alt />
    <h1>Yavarum Nalam</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleHorror}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={4} readOnly/>
    </Stack>
    </div>

    <div className="slide"><img src={Cobweb} alt />
    <h1>Cobweb</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleHorror}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={3} readOnly/>
    </Stack>
    </div>

    <div className="slide"><img src={Conjuring} alt />
    <h1>Conjuring 3</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleHorror}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={5} readOnly/>
    </Stack>
    </div>

    <div className="slide"><img src={Evildead} alt />
    <h1>Evildead Rises</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleHorror}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={4} readOnly/>
    </Stack>
    </div>

    <div className="slide"><img src={It} alt />
    <h1>It</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleHorror}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={5} readOnly/>
    </Stack>
    </div>
    
    <div className="slide"><img src={Nun} alt />
    <h1>Nun</h1>
    <Stack spacing={1} >
    <Button variant="text" onClick={handleHorror}>View Review</Button>
      <Rating className='rating' name="size-medium" defaultValue={5} readOnly/>
    </Stack>
    </div>
  </div>
</div>

{/* This is a line break */}


<div>
  <h3>Crime-Thriller</h3>
  <hr size={3} align="right" color="#FF0000" width="90%" />
   <div className="slider">
   <div className="slide"><img src={Darkknight} alt />
   <h1>The Dark Knight</h1>
   <Stack spacing={1} >
   <Button variant="text" onClick={handleThriller}>View Review</Button>
     <Rating className='rating' name="size-medium" defaultValue={5} readOnly/>
   </Stack>
   </div>

   <div className="slide"><img src={Equalizer} alt />
   <h1>The Equalizer 2</h1>
   <Stack spacing={1} >
   <Button variant="text" onClick={handleThriller}>View Review</Button>
     <Rating className='rating' name="size-medium" defaultValue={3} readOnly/>
   </Stack>
   </div>

   <div className="slide"><img src={Sherlockholmes} alt />
   <h1>The Sherlock Holmes</h1>
   <Stack spacing={1} >
   <Button variant="text" onClick={handleThriller}>View Review</Button>
     <Rating className='rating' name="size-medium" defaultValue={4} readOnly/>
   </Stack>
   </div>

   <div className="slide"><img src={Vikram} alt />
   <h1>Vikram</h1>
   <Stack spacing={1} >
   <Button variant="text" onClick={handleThriller}>View Review</Button>
     <Rating className='rating' name="size-medium" defaultValue={5} readOnly/>
   </Stack>
   </div>

   <div className="slide"><img src={Vikramvedha} alt />
   <h1>Vikram Vedha</h1>
   <Stack spacing={1} >
   <Button variant="text" onClick={handleThriller}>View Review</Button>
     <Rating className='rating' name="size-medium" defaultValue={4} readOnly/>
   </Stack>
   </div>

   <div className="slide"><img src={Smile} alt />
   <h1>Smile</h1>
   <Stack spacing={1} >
   <Button variant="text" onClick={handleThriller}>View Review</Button>
     <Rating className='rating' name="size-medium" defaultValue={4} readOnly/>
   </Stack>
   </div>
   
   <div className="slide"><img src={Jokerj} alt />
   <h1>The Joker</h1>
   <Stack spacing={1} >
   <Button variant="text" onClick={handleThriller}>View Review</Button>
     <Rating className='rating' name="size-medium" defaultValue={3} readOnly/>
   </Stack>
   </div>
  </div>
</div>

{/* This is a line break */}
    </div>
  )
}

export default Division