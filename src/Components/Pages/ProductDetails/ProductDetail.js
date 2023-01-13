import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const [datam, setDatam] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(res => setDatam(res))
  }, [id])
  return (
    <div>
      ProductDetail
      <img alt='foto' src={datam.image} />
    </div>

  )
}

export default ProductDetail