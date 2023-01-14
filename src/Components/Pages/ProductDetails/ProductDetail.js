import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './style.css';

function ProductDetail() {
  const [datam, setDatam] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(res => setDatam(res))
  }, [id])
  return (
    <section className='carddetails'>
      <div className='main'>
        <img alt='foto' src={datam.image} />
        <h1>{datam.title}</h1>
        <h2>{datam.description}</h2>
        <h3>Category: {datam.category}</h3>
        <h2 id='price'>Price: {datam.price}</h2>
        <Link to={'/'}><button>Back to site</button></Link>
      </div>
    </section>

  )
}

export default ProductDetail