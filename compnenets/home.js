import React from 'react'
import {useSelector } from 'react-redux'
import {useDispatch } from 'react-redux'
import { addItem } from '../reduxKIt/features/cartSlice';
import { displayProduct } from '../reduxKIt/features/productSlice';
//import ProductDisplay from './productDisplay';
import { Link } from 'react-router-dom';
const home = () => {

  //eslint-disable-next-line react-hooks/rules-of-hooks
  const state=useSelector(state=>state.fetchingApi)
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch=useDispatch();
  const clickBtn=(value)=>{
              
      dispatch(addItem(value));
  }
 

   const productDetail=(value)=>{
      dispatch(displayProduct(value.id))
      
   }
  const cards= state.data.map((value)=>{
    return(
      <div className='col-md-2' key={value.id} style={{marginBottom:"10px"}}>
        <div class="card" style={{width: "18rem"}}>
          <div className='text-center'>
             <img class="card-img-top" src={value.image} style={{height:"150px",width:"100px"}} alt="#"/>
          
            <div class="card-body">
              <h5 class="card-title">price:{value.price}</h5>
              <p class="card-text">{value.title}</p>
              
              <button style={{marginRight:"10px"}}
              onClick={()=>clickBtn(value)}
              class="btn btn-primary">
              add to cart</button>
              <Link to={`/product/${value.id} && ${value.category} `}>
                  <button style={{marginLeft:"10px"}}
                  onClick={()=>{productDetail(value)}}
                  class="btn btn-primary">
                  Product Detail</button>
              </Link>
            </div>
            </div>
        </div>
      </div>
    )
  })
  return (
    <div>
        <div className='row'>
        {cards}
       </div>
    </div>
  )
}

export default home
