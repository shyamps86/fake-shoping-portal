import { createBrowserRouter} from "react-router-dom";
import Home from './home'
import Cart from './cart'
import Navbar from './navbar'
import Product from './productDisplay'

export const router= createBrowserRouter([
    {
        path:"/",
        element:< Navbar/>,
        children:
        [
            {
                path:"/home",
                element:<Home/>
           },
           {
             path:"/cart",
             element:<Cart/>
           },
           {
            path:"/product/:productName",
            element:<Product/>
           }
        ]

    }
])