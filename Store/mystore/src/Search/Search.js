
import axios from "axios"
import { useEffect , useState } from "react"


const Search = () => {

  const [searchTerm, setSearchTerm] = useState([])
  const [input , setInput] = useState ('')
  const [output , setOutput] = useState([])

  useEffect(()=>{
     axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick")
    .then((res)=>{
      setSearchTerm(res.data)
      console.log(res.data)
      console.log("abrar")
    

      
  })

},[])

useEffect(()=>{
  setOutput([])
  searchTerm.filter(val=>{
    if (val.brand==input)
    {
      setOutput(output=>[...output,val])

    }
  })

},[input])

return(
    <>
        <div className="search bar">
            <input onChange={e=>setInput(e.target.value)}
            type="text"></input>
        </div>

        <>
       
            {output.map((item)=>{
                return(
                    <img src={item.image_link}></img>
                )
            })}

            </>
        







    </>
)

}



export default Search
