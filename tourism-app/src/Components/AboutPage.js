import React from 'react';
import '../style/style.css'; // Ensure the correct path to your CSS
import logo from '../image/log1.png';
import image1 from '../image/image1.jpeg';
import image5 from '../image/image5.jpeg';
import NavBar from './NavBar'; // If you're using NavBar, ensure it's included
import image2 from '../image/image2.jpeg';
import { Link,useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';


const AboutPage = () => {
  const navigate=useNavigate();
  return (
    <main>
      <div className='main-part'>
        <img className='logo' src={logo} alt='logo' />
        <nav className="header">
          <ul className="items">
            <li className="list-1"><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li className="list-3"><Link to="/">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
      <div className="hero-content">
        <h1>
          <span style={{ fontSize: '50px', fontWeight: 'bold', display: 'block' }}>About Us</span>
          We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage.
        </h1>
       
                    <button onClick={()=>navigate('/')}>Back to Home</button>
               
      </div>
      <p className='attraction'>Explore Some of the culture in Ethiopia.</p>
      <div className="attractive-section">
        <div className="content-1">
          <p className='title'>Awe Culture</p>
          <img src={image1} alt="Awe Culture" />
        </div>
        <div className="main-content-2">
          <p className='title'>South Omo</p>
          <img src={image5} alt="South Omo" />
        </div>
        <div className="main-content-2">
          <p className='title'>Oromiya Culture</p>
          <img src={image2} alt="Oromiya Culture" />
        </div>
      </div>
      <div>
        <p className='description'>
          Ethiopian culture is a rich tapestry woven from diverse ethnic groups, languages, and traditions. Known for its ancient history, Ethiopia is home to one of the oldest Christian communities in the world, with unique practices and festivals such as Timkat and Meskel. The country’s cuisine, famous for dishes like injera and doro wat, features bold flavors and communal dining. Ethiopian music and dance are integral to cultural celebrations, showcasing a variety of regional styles. Art, particularly in the form of intricate religious paintings and traditional crafts, reflects the country's deep spiritual heritage and artistic expression. This vibrant culture is marked by hospitality and a strong sense of community, making Ethiopia a fascinating destination for visitors.
        </p>
      </div>
      <footer style={{ backgroundColor: 'rgb(47, 74, 43)', marginTop: '50px', padding: '10px 0', display: 'flex', justifyContent: 'space-between', color: 'white' }}>
        <Typography className="footer" sx={{ ml: 2 }}>All Rights Reserved. ©2024 Ethiopia Tourism</Typography>
        <Box className="footer-icons" sx={{ display: 'flex', justifyContent: 'space-between', mr: 2 }}>
          <a href="#" style={{ color: 'white' }}><Facebook /> Facebook</a>
          <a href="#" style={{ color: 'white' }}><Twitter /> Twitter</a>
          <a href="#" style={{ color: 'white' }}><Instagram /> Instagram</a>
        </Box>
      </footer>
    </main>
  );
};

export default AboutPage;
