import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'

//import Delete from './Delete'


const Users = () => {
    const [data,setData]=useState([])
    const [search,setSearch]=useState('')
    const [value,setValue]=useState('')
    

    
    
  //  const id=useParams().id
  const fetchHandler=async(search)=>{
   return  await axios.get(`http://localhost:4000/api/v1/get`)
    .then((res)=>res.data);

  }
  useEffect(()=>{
    fetchHandler().then((data)=>setData(data.users));
    
  },[])
  const MapData=()=>{
   
    const filterData=data.filter((i)=>{
        return i.priceRange.toLowerCase() == search.toLowerCase()
    })
    setData(filterData)
    
  }
  const chekData=()=>{
    const filterData=data.filter((i)=>{
      return i.category.toLowerCase() == value.toLowerCase()
    })
    setData(filterData)
    
  }
  
  
  return (
    <div className='main'>
    <input name={search} placeholder='Price rance high or low' onChange={(e)=>setSearch(e.target.value)}/>
    <button onClick={MapData} style={{background:"green",color:"white",fontFamily:"sans-serif"}}>Search</button>

    <input  name={value} placeholder='Filter by category'   onChange={(e)=>setValue(e.target.value)}/>
    
    <button onClick={chekData} style={{background:"green",color:"white",fontFamily:"sans-serif"}}>Filter</button>

    <div className='data'>
      {data.map(({_id,name,image,category,priceRange,price})=>(
     
     <div className='card' key={_id}>
          <h3>Name:{name}</h3>
          <img src={image}/>
          <h3>Category:{category}</h3>
          <h3>Price:{price}</h3>
          
          </div>

        
          
   ))}
   </div>
    </div>
  )
}

export default Users
