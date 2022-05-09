import  { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css'
import { Footer } from '../Footer/Footer';
import { Link  } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import Eyebrowo from '../Eyebrow/Eyebrow';
import Button from 'react-bootstrap/Button';
import Stack from '@mui/material/Stack';


function Home() {

    useEffect (()=>{
        Aos.init({duration :1500,
            offset:400
        });
    },[]);

    return (
        <div>

        <NavBar/>


        <div className='photo-home'>
        <div className='photo'><img src='https://makeup-api.herokuapp.com/assets/eyeshadow-18fa4bed267bec6a67506150d9574259d0dcc67700e69de4ba720d9afe8204a2.png' style={{width:'100%'}}></img></div>
        <div className='photo'><img src='https://makeup-api.herokuapp.com/assets/nail-polish-4c7ee1a5f7a5cbaff9757c3bcfa4f6e89d7a6f2ffc49d267e04e010ba94cfd7c.png' style={{width:'100%'}}></img></div>
        <div className='photo-lips'><img src='https://makeup-api.herokuapp.com/assets/lips-c35ec4a3350ec779c6bf6a785981ad9ef2e21bd9fe26a2be1c766d56edb2e11f.png' style={{width:'100%'}}></img></div>
        <div className='photo'><img src='https://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png' style={{width:'100%'}}></img></div>
        <div className='photo'><img src='https://makeup-api.herokuapp.com/assets/single-pot-4ce398e7d8c527ef248ace7a783cc52fd583375a25a7dcdb7b16f7a0958ccb17.png' style={{width:'100%'}}></img></div>
        </div>

        <div className='photo-nyx'>
        <img src='https://www.dior.com/couture/var/dior/storage/images/horizon/fragrance-and-beauty/sustainable-formula-charter/sustainable-formula-charter/29773335-1-fre-FR/sustainable-formula-charter_1440_1200.jpg' style={{width:'100%'}}>  
        </img>
        </div>

        <div className='box-1'>
            <span> Because beauty should make you feel good.</span>
            
        </div>


        
      
        <div className='container'>
        <div className='box'>
        <div className='imgbox'>
            <img src='https://i.pinimg.com/564x/ea/9f/c3/ea9fc3c7f1ed53834db0836de6c1d8f4.jpg' ></img>
            </div>
            <div className='content'>
           <Link style={{textDecoration: "none" , color:"black" , fontSize:"20px" , margin:"10px",padding:"10px" }} to="/Lipstick">Lipstick</Link>
           </div>
           
           </div>

           <div className='box'>
        <div className='imgbox'>
            <img src='https://i.pinimg.com/564x/5e/19/45/5e1945c4d1d201907e6ed002f92ae698.jpg'></img>
            </div>
           
           <div className='content'>
               <h2>Blush</h2>
           </div>
           </div>

           <div className='box'>
        <div className='imgbox'>
            <img src='https://i.pinimg.com/564x/f4/70/8f/f4708fc04e80a74d8165dd3858e7e143.jpg'></img>
            </div>
           <div className='content'>
               <h2>Eyeshadow</h2>
           </div>
           </div>

          
          
{/* 
<div className='eyebrow'>
<div data-aos="zoom-out">
           <img src='https://www.benefitcosmetics.com/globalassets/landing-pages/brows/love-your-brows/fifty-fifty/fifty-fifty-lyb-models.png?width=720&height=500&mode=crop&center=0.5,0.5 '></img>
           </div>
           <div data-aos="zoom-in-left">
           <div className="text-box">
           <Link to="/Eyebrow">clic</Link>
            <h1>hsdnkdlmd</h1>
            </div>
            
            </div>

            
           
           
</div>

<div className='box1'>
<div className='a'>
    <img src='https://www.benefitcosmetics.com/globalassets/landing-pages/all-about-concealers/bright-on/50-50-boiing-concealer-desktop.gif?width=720&height=500&mode=crop&center=0.5%2C0.5' style={{width:'50%'}}></img>
    <div className="box-b">
           <Link to="/Eyebrow">clic</Link>
            <h1>hsdnkdlmd</h1>
            </div>
</div>
</div>




 */}



           
        </div>

        <div className='box-1'>
               <span>Beauty inspired by real life.<br></br>
my store is a new approach to beauty. It’s about fun and freedom and being OK with yourself today.</span>

           </div>



     <Footer></Footer>


        </div>

    )

}

export default Home 