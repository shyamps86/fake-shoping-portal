import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const navbar = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [data,setData]=useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {cart,searchProduct}=useSelector(state=>({cart:state.cart,searchProduct:state.fetchingApi.data}));
 console.log(searchProduct)
  // const cards=searchProduct.filter((value)=>value.category.includes(data).map)
  return (
    <div>
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/home">Navbar</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link to='/home' class="nav-link" >
                   <button type="button" class="btn btn-outline-primary">
                      Home
                   </button>
                  </Link>
                
                </li>
                <li class="nav-item">
                
                  <Link to='/cart' class="nav-link" >
                    <button type="button" class="btn btn-outline-success">
                      Your Cart:{cart.length} 
                    </button>
                  </Link>
                 
                </li>
                
              </ul>
              
                {/* <input class="form-control mr-sm-6" type="search" placeholder="Search" aria-label="Search" />   
                onChange={(e)=>setData(e.target.value)} */}
            
            </div>
         </nav>
        </div>
        <hr/> 
        <main>
            <Outlet/>
        </main>
         <hr/>
        {/* <center>
           <Footer/>
        </center> */}
    </div>
  )
}

export default navbar
