import React from 'react'
import '../Horror/Exocisit.css'
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
<title>The Exorcisit-Believer</title>
<link rel="stylesheet" href="style.css" />
<div className="grid-container">
<header className="photo">
</header>
<div className="side2">
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
      <h1>The Exorcist-Believer</h1>
    </div>
    <div className="main">
      <h2>Synopsis</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo porro odio perferendis modi sapiente, obcaecati assumenda beatae at. Obcaecati, dolor! Qui a eum perspiciatis perferendis dolor obcaecati deleniti quod molestiae totam laborum, quaerat repellendus optio aperiam sequi. Dolorem inventore labore perspiciatis harum voluptatibus et quibusdam, libero numquam corporis, praesentium debitis quisquam commodi, soluta voluptatem nisi! Minima, eligendi architecto exercitationem itaque perspiciatis pariatur cum accusantium quam esse ipsam quisquam incidunt culpa voluptatum quo dignissimos quidem. Facilis numquam placeat iusto id?</p>
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