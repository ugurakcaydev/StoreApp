// ProductDetails.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ProductDetails = () => {
  const [productData, setProductData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { productId } = router.query;
    if (productId) {
      const fetchProductData = async () => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
          setProductData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProductData();
    }
  }, [router.query]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{productData.title}</h2>
      <img style={{width:"100px"}} src={productData?.image} alt=''/>
    </div>
  );
};

export default ProductDetails;
