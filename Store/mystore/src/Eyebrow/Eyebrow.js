import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './Eyebrowo.css'

function Eyebrowo() {

  const [eye , setEye]=useState([])

  useEffect(()=>{
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=e.l.f.")
   .then((res)=>{
    setEye(res.data)
     console.log(res.data)     
 })

},[])


  return (
    <div>
    {/* {eye.map((ele)=>{
      return(
        <>
       <img src={ele.image_link}></img>

        </>
      )
    })} */}

    <div className='one'>
    <h1>one</h1>
    </div>
    <div className='two'>
      <h1>two</h1>
    </div>
    </div>
  )
}

export default Eyebrowo