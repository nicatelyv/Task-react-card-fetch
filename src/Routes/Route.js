import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../Components/Pages/ProductDetails/ProductDetail";
import Products from "../Components/Pages/Products/Products";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Products/>
    },
    {
        path: "/productdetails/:id",
        element: <ProductDetail/>
    }
])