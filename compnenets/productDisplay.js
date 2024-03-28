import React,{useEffect,useState} from 'react'
//import { useParams } from 'react-router-dom'
//import Api from '../apiFlder/api'
import {useSelector} from 'react-redux'
//import axios from 'axios';
const productDisplay = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [product,setProduct]=useState({});
    // eslint-disable-next-line react-hooks/rules-of-hooks
    //const params=useParams();
    // console.log(params);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state=useSelector(state=>state.productId.id)
    // eslint-disable-next-line react-hooks/rules-of-hooks
 const fetchingProductApi= async ()=>{
    await fetch(`https://fakestoreapi.com/products/${state}`)
    .then(res=>res.json())
    .then(json=>setProduct(json))
 }

    // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
    useEffect( ()=>{
         fetchingProductApi();  
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <center>
        <div className='col-md-8'>
       {/* ProductDisplay page {params.productName} */}
       <div class="card" style={{width: "18rem;"}}>
            <div className='text-center'>
              <img class="card-img-top" style={{height:"200px",width:"150px"}} src={product.image} alt=""/>  
            </div>
            <div class="card-body">
                <h5 class="card-title">Price:{product.price}</h5>
                <p class="card-text">{product.title}</p>
                <center><button class="btn btn-primary">Buy</button></center>
            </div>
            <div>
                <b>{product.category}</b> <br/> <br/>
                <i>{product.description}</i>
            </div>
      </div>

    </div>
    </center>
  )
}
export default productDisplay
