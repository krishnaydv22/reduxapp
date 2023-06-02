import React, {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setProduct } from '../redux/actions/productActions';
import axios  from 'axios';
import ProductComponent from './ProductComponent';

import './container.css';
  
  const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("err",err);
        })
        dispatch(setProduct(response.data));
    };

    useEffect(()=> {
        fetchProducts();
    },[]);

     console.log("Products: ",products);

    return(
        <div className="container_PL">
            <ProductComponent></ProductComponent>
            {/* <h1>Product \listiong</h1> */}
            </div>
    )

  }

  export default ProductListing;