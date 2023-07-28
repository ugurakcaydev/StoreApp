// ProductDetails.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ProductList } from '../../Components/Products/product.util';

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      // Verileri asenkron olarak yüklüyoruz
      const product = ProductList.find((product) => product.id === Number(productId));
      setProduct(product);
    };

    fetchProduct();
  }, [productId]);

  console.log(product);

  return (
    <div>
      {product ? (
        <div>
          {/* Veriler yüklendiğinde burada ürün bilgilerini görüntüleyebilirsiniz */}
          <div>{product.id}</div>
          <div>{product.productName}</div>
          <div>{product.productPrice}</div>
          <div>{product.productDescription}</div>
        </div>
      ) : (
        // Ürün verileri yüklenene kadar bekleyen bir mesaj veya yüklenme çubuğu gösterebilirsiniz
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetails;

