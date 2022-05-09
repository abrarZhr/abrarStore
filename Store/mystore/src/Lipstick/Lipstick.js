import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'
import './Lipstick.css'
import { FiShoppingCart } from 'react-icons/fi'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsSuitHeart } from 'react-icons/bs'
import { Link  } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"

import { BiHeartCircle } from 'react-icons/bi'




const Lipstick = () => {

  const [products , setProducts] = useState([])
  const [loading , setLoading] =useState(true)
  const [input , setInput] = useState ('')
  const [output , setOutput] = useState([])

  useEffect (()=>{
    Aos.init({duration :1500,
        // offset:
    });
},[]);
 

  useEffect (()=>{
    async function getdata(){
    const res = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick")
      setProducts(res.data)
      console.log(res.data)
      setLoading(false)
  }
    getdata()

  },[])

  
useEffect(()=>{
  setOutput([])
  products.filter(val=>{
    if (val.brand.toLowerCase().includes(input.toLowerCase()))
    {
      setOutput(output=>[...output,val])

    }
  })

},[input])


  if(loading){
    return(
            <p>loading..</p>
    )
}




  return (
    
   <card>
   
   <NavBar></NavBar>


   <div className="search-bar">
            <input onChange={e=>setInput(e.target.value)}
            type="text" placeholder='search Brand' ></input> <BiSearchAlt2/>
        </div>


   <div className='nyx'>
     <img src='https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-nyxcosmetics-us-Library/en_US/dw295615f0/Homepage%20A1/D2C-APRIL-NO-SMOKE-WITHOUT-FUEGO-RESKIN-A1-DESKTOP-04012022.gif?sw=1920&sh=553&sm=fit&q=70' style={{width:'100%'}}></img>
   </div>

{/*    
   <div className='box'>
     <span>SWEET, BUT NEVER CAKEY. <BiHeartCircle/></span>
   </div>
  */}

  


   
   
   <div className='imag'>
 {output.map((ele)=>{
   return(
    <div data-aos="flip-right">
    <div className='containe' key={ele.id}>
    
   
    <img src={ele.image_link}></img>
    
    
    <div className='Info'>
      <div>
      <h5><FiShoppingCart/></h5>
      <h5><Link to={`/Lipstick/${ele.id}`}><BiSearchAlt2/></Link></h5>
      <h5><BsSuitHeart/></h5>
      </div>
    </div>
     </div>
     </div>
    
    
   )
  

 })}
 

 

</div>



   </card>
  )
}

export default Lipstick