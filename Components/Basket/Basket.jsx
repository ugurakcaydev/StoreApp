import { useEffect, useState } from 'react';

const Basket = () => {
  const [basketArray, setBasketArray] = useState([]);

  useEffect(() => {
    const fetchBasket = async () => {
      if (typeof window !== 'undefined') {
        // Perform localStorage action
        const basketFromLocalStorage = localStorage.getItem('basket');
        if (basketFromLocalStorage) {
          const parsedBasket = JSON.parse(basketFromLocalStorage);
          setBasketArray(parsedBasket);
        }
      }
    };

    fetchBasket();
  }, []);

  return (
    <div>
      {basketArray.map((item) => {
        return (
          <div key={item.id}>
            {/* Burada ürün özelliklerini görüntüleyebilirsiniz */}
            <div>{item.id}</div>
            <div>{item.productName}</div>
            <div>{item.productPrice}</div>
            <div>{item.productDescription}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Basket;
