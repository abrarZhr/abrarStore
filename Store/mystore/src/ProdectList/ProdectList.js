import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import './ProdectList.css'
import NavBar from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import Button from 'react-bootstrap/Button';


const ProdectList = () => {
  const [product , setProduct] = useState([])
  const [loading , setLoading] =useState(true)
  const [product_colors , setcolors] = useState([])
  const{id}=useParams()


 

  useEffect (()=>{

    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
    .then((res)=>{
        setProduct(res.data)
        console.log(res.data)

        setLoading(false)
        console.log("done")
    })

  },[])

  if(loading){
    return(
            <p>loading..</p>
    )
}



  return (
        <>

{/* <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-90"
      src="https://i.pinimg.com/564x/db/fc/3e/dbfc3e500cb76971ced57c5bb37a3fb9.jpg" />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-90"
      src="https://i.pinimg.com/564x/db/fc/3e/dbfc3e500cb76971ced57c5bb37a3fb9.jpg  " 
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80"
      src="https://i.pinimg.com/564x/db/fc/3e/dbfc3e500cb76971ced57c5bb37a3fb9.jpg" 
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       


 */}






<NavBar></NavBar>



        {product.map((ele)=>{
        
            return(
              ele.id == id ? 
                <div className='wrapper'>
                <div className='ImagContainer'>
                <img src={ele.image_link}></img>
                </div>
                <div className='InfoContainer'>
                <h4>{ele.name}</h4>
                <h4>{ele.brand}</h4>
                <span>{ele.description}</span>
                <h3>{ele.price}{ele.price_sign}</h3>
                <div className='buy'>
                  <Button variant="outline-info"> Add to Cart</Button>
                  <Button variant="outline-info" >go to Cart</Button>
                </div>
              
                </div>

                




                </div>

                




                :   <h1></h1> 
            )

            

        })}

        

        <Footer></Footer>


        </>

    
  )
}

export default ProdectList