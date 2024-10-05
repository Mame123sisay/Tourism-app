import React from 'react'
import style from '../style/style.css';
import logo from '../image/logo.jpeg';
import hero from '../image/hero.jpg';
import semienMountain from '../image/semien-mountain.jpg';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { Typography,Box } from '@mui/material';
import addisAbaba from '../image/addis-ababa.jpg';
import lalibela from '../image/lalibela.jpg';
import NavBar from './NavBar';
import { Link ,useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  return (
    <main>
      <div className='main-part'>
      <img className='logo' src={logo} alt='logo'/>
    <nav class="header">
    
      <ui class="items">
        <li class="list-1"><Link to="/"> Home </Link> </li>
        <li><Link to="/about">About us</Link></li>
        <li  class="list-3">Contact Us</li>
       
      </ui>
  
    </nav></div>
    <div className="hero-content">
      <h1>Explore Ehiopia Land of Origins.</h1>

      <button onClick={()=>navigate('/about')} className='learn-more'>Learn More</button>
      {/*<img className='hero' src={hero}/>*/}
    </div>
    <p className='attraction'> Some of the most attractive place in Ethiopia.</p>
    <div className="attractive-section">
     
      <div className="content-1">
      <p className='title'>Semen Mountain</p>
      <img src={semienMountain} alt="semen mountain"/>
      <p className='description'>The Simien Mountains, located in northern Ethiopia, are a stunning mountain range known for their dramatic landscapes, unique wildlife, and rich cultural heritage. Designated as a UNESCO World Heritage Site, the area features jagged peaks, deep valleys, and endemic species like the Ethiopian wolf and the Gelada baboon. The Simien Mountains are popular for trekking, offering breathtaking views and a chance to experience the natural beauty and diverse ecosystems of Ethiopia.</p>
      </div>
      <div className="main-content-2">
      <p className='title'>Addis Ababa</p>
      <img src={addisAbaba} alt="semen mountain"/>
      <p className='description'>The Simien Mountains, located in northern Ethiopia, are a stunning mountain range known for their dramatic landscapes, unique wildlife, and rich cultural heritage. Designated as a UNESCO World Heritage Site, the area features jagged peaks, deep valleys, and endemic species like the Ethiopian wolf and the Gelada baboon. The Simien Mountains are popular for trekking, offering breathtaking views and a chance to experience the natural beauty and diverse ecosystems of Ethiopia.</p>
      </div>
      <div className="main-content-2">
      <p className='title'>Lalibela</p>
      <img src={lalibela} alt="semen mountain"/>
      <p className='description'>The Simien Mountains, located in northern Ethiopia, are a stunning mountain range known for their dramatic landscapes, unique wildlife, and rich cultural heritage. Designated as a UNESCO World Heritage Site, the area features jagged peaks, deep valleys, and endemic species like the Ethiopian wolf and the Gelada baboon. The Simien Mountains are popular for trekking, offering breathtaking views and a chance to experience the natural beauty and diverse ecosystems of Ethiopia.</p>
      </div>
     
      </div>
      <footer style={{ backgroundColor: 'rgb(47, 74, 43)', marginTop: '50px', padding: '10px 0', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
        <Typography className="footer" sx={{ ml: 2 }}>All Rights Reserved. ©2024 Ethiopia Tourism</Typography>
        <Box className="footer-icons" sx={{ display: 'flex', justifyContent: 'space-between', mr: 2 }}>
          <a href="" style={{ color: 'white' }}><Facebook /> Facebook</a>
          <a href="" style={{ color: 'white' }}><Twitter /> Twitter</a>
          <a href="" style={{ color: 'white' }}><Instagram /> Instagram</a>
        </Box>
      </footer>
  </main>
    
  )
}

export default Home;