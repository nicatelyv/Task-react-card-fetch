import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
function Products() {
  const [data, setdData] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setdData(data))
  }, [])
  return (
    <>
      {data.map((element) => (
        <div className='cards'>

          <div className='card'>
            <img src={element.image} alt={'foto'}></img>
            <h2>{element.title}</h2>
            <h2>{element.price} $</h2>
            <br></br>
            <h3>{element.category}</h3>
            <button><Link to={"/productdetails/" + element.id}>Card Details</Link></button>
          </div>

        </div>
      ))}
    </>
  )
}

export default Products