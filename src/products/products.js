import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { id } : { id: string } = useParams();

  return (
    <div>
      { id }
    </div>
  )
}

export default Product;