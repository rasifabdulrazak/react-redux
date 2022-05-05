import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponent = ()=> {
    const products = useSelector((state)=>state.allproducts.products)
    const renderList = products.map((product)=>{
        const {id,title,image,price,category} = product
        return (  <div key={id} className='four coloumn wide' style={{marginTop:'5rem'}}>
            <Link to={`product/${id}`} >
        <div className='ui link cards'>
            <div className='card'>
                <div className='image'>
                    <img src={image} />
                </div>
                <div className='content'>
                    <div className='header'>{title}</div>
                    <div className='meta price'>$ {price}</div>
                    <div className='meta'>{category}</div>
                </div>
            </div>
        </div>
        </Link>
     </div>)
    })

  return (
    <> {renderList}  </>
  );
}

export default ProductComponent