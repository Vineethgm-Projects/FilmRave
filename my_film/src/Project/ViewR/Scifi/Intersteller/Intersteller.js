import React from 'react'
import '../Intersteller/Intersteller.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
const ViewR = () => {
    const value = 3.5;
  return (
    <div className='head1'>
<div>
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>The Interstellar</title>
<link rel="stylesheet" href="style.css" />
<div className="grid-container">
<header className="cover-photo">
</header>
<div className="side">
</div>
            <div className='rating'>
            <Box
            sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
            }}
            >
            <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            style={{ fontSize: 30 }}
            />
            <Box sx={{ ml: 2 }}>{labels[value]}</Box>
            </Box>
            </div>
    <div className="title">
      <h1>Interstellar</h1>
    </div>
    <div className="main">
      <h2>Synopsis</h2>
      <p>Christopher Nolan’s "Interstellar," about astronauts traveling to the other end of the galaxy to find a new home to replace humanity’s despoiled home-world, is frantically busy and earsplittingly loud. It uses booming music to jack up the excitement level of scenes that might not otherwise excite. It features characters shoveling exposition at each other for almost three hours, and a few of those characters have no character to speak of: they’re mouthpieces for techno-babble and philosophical debate. And for all of the director’s activism on behalf of shooting on film, the tactile beauty of the movie’s 35mm and 65mm textures isn’t matched by a sense of composition. The camera rarely tells the story in Nolan’s movies. More often it illustrates the screenplay, and there are points in this one where I felt as if I was watching the most expensive NBC pilot ever made.</p>
    </div>
    <section>
      <div className="container">
        <h1 className="heading">Characters</h1>
        <div className="card-wrapper">
          <div className="card">
            <a href="https://en.wikipedia.org/wiki/Joaquin_Phoenix&quot;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Joaquin_Phoenix_in_2018.jpg/220px-Joaquin_Phoenix_in_2018.jpg" alt className="card-img" /></a>
            <h2>Joaquin Phoenix</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem quod omnis mollitia adipisci esse aliquam veritatis ratione quas voluptate ad deleniti labore, impedit veniam at explicabo libero. Vitae porro ex, similique repudiandae laborum animi deserunt ab. Dolorum eos aperiam voluptatem. Autem vitae repellat mollitia debitis. Ut repellat adipisci cumque!</p>
          </div>
          <div className="card">
            <a href="https://en.wikipedia.org/wiki/Robert_De_Niro"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Robert_De_Niro_Cannes_2016.jpg/220px-Robert_De_Niro_Cannes_2016.jpg" alt className="card-img" /></a>
            <h2>Robert Deniro</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem quod omnis mollitia adipisci esse aliquam veritatis ratione quas voluptate ad deleniti labore, impedit veniam at explicabo libero. Vitae porro ex, similique repudiandae laborum animi deserunt ab. Dolorum eos aperiam voluptatem. Autem vitae repellat mollitia debitis. Ut repellat adipisci cumque!</p>
          </div>
          <div className="card">
            <a href="https://en.wikipedia.org/wiki/Zazie_Beetz"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Zazie_Beetz_by_Gage_Skidmore_%28cropped%29.jpg/220px-Zazie_Beetz_by_Gage_Skidmore_%28cropped%29.jpg" alt className="card-img" /></a>
            <h2>Zazie Beetz</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem quod omnis mollitia adipisci esse aliquam veritatis ratione quas voluptate ad deleniti labore, impedit veniam at explicabo libero. Vitae porro ex, similique repudiandae laborum animi deserunt ab. Dolorum eos aperiam voluptatem. Autem vitae repellat mollitia debitis. Ut repellat adipisci cumque!</p>
          </div>
          <div className="card">
            <a href="https://en.wikipedia.org/wiki/Brett_Cullen"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Brett_Cullen_Photo_Op_GalaxyCon_Richmond_2020.jpg/220px-Brett_Cullen_Photo_Op_GalaxyCon_Richmond_2020.jpg" alt className="card-img" /></a>
            <h2>Brett Cullen</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem quod omnis mollitia adipisci esse aliquam veritatis ratione quas voluptate ad deleniti labore, impedit veniam at explicabo libero. Vitae porro ex, similique repudiandae laborum animi deserunt ab. Dolorum eos aperiam voluptatem. Autem vitae repellat mollitia debitis. Ut repellat adipisci cumque!</p>
          </div>
        </div>
      </div>
    </section> 
  </div>
</div>

    </div>
  )
}

export default ViewR