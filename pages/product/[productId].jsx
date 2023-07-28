// ProductDetails.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ProductList } from '../../Components/Products/product.util';

const ProductDetails = () => {

  const router = useRouter();
  const {productId} = router.query
  const product = ProductList.find((product)=>product.id==productId)
  console.log({product});
  


  return (
    <div>
      <div>{product.id}</div>
      <div>{product.productName}</div>
      <div>{product.productPrice}</div>
      <div>{product.productDescription}</div>
    </div>
  );
};

export default ProductDetails;
