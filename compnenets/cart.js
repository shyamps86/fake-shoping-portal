import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../reduxKIt/features/cartSlice';
const cart = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const state=useSelector(state=>state.cart);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch=useDispatch();

  const clickBtn=(value)=>{
    dispatch(removeItem(value))
  }

  const cards= state.map((value)=>{
    return(
      <div className='row'>
        <div className='col-md-3' key={value.id} style={{marginBottom:"10px"}}>
        <div class="card" style={{width: "18rem"}}>
          <div className='text-center'>
             <img class="card-img-top" src={value.image} style={{height:"150px",width:"100px"}} alt="#"/>
          
            <div class="card-body">
              <h5 class="card-title">price:{value.price}</h5>
              <p class="card-text">{value.title}</p>
              
              <button 
              onClick={()=>clickBtn(value.id)}
              class="btn btn-primary">
              Remove Item</button>
            </div>
            </div>
        </div>
      </div>
      </div>
    )
  })


  return (
    <div>{cards}</div>
  )
}

export default cart