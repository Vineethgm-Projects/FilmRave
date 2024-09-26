import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField'; // Import TextField
import Stepper from './Stepper/Stepper';
import Division from './Division/Division';
import Bottom from './Bottom/Bottom';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { blue } from '@mui/material/colors';

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleAbout = () => {
    navigate("/About");
  }

  const handleForm = () => {
    navigate("/Form");
  }

  const handleTrailer = () => {
    navigate("/Trailer");
  }

  const handleNext = () => {
    navigate("/ViewR");
  }

  const handleBack = () => {
    navigate("/Signin");
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Film Rave
            </Typography>
            <TextField label="Search" variant="outlined" sx={{ mx: 2 }} /> {/* Add the search bar here */}
            <Button color="inherit" onClick={handleBack}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List className='menu'>
          <ListItem Button onClick={handleAbout}>
            <ListItemText primary=<h1 className='h1r1'>About</h1> sx={{ textAlign: 'center' }} />
          </ListItem>
          <ListItem Button onClick={handleTrailer}>
            <ListItemText primary=<h1 className='h1r1'>Trailers</h1> sx={{ fontSize: '4rem', textAlign: 'center' }} />
          </ListItem>
          <ListItem Button onClick={handleForm}>
            <ListItemText primary=<h1 className='h1r1'>My Review</h1> sx={{ fontSize: '4rem', textAlign: 'center' }} />
          </ListItem>
        </List>
      </Popover>

      <Stepper />
      <Division />
      <Bottom />
    </div>
  );
}
