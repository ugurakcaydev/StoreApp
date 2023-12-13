import { useEffect, useState } from "react";
import './basket.css'

const  Basket= () => {
  // let basketArray
  //   if (typeof window !== 'undefined') {
  //       // Perform localStorage action
  //       basketArray =JSON.parse(localStorage.getItem('basket')) 
  //       console.log(basketArray);

  //     }

  	const [basketArray,setBasketArray]=useState([]);
	const [quantity,setquantity]=useState([]);
  useEffect(() => {
    const fetchBasket = async () => {

      //Verileri asenkron olarak yüklüyoruz
      if (typeof window !== 'undefined') 
      {
        const basketFromLocal = localStorage.getItem('basket');
        if(basketFromLocal)
        {
              // Perform localStorage action
              const parseBasket =JSON.parse(basketFromLocal) 
              setBasketArray(parseBasket)
        }
      }
    };

    fetchBasket();
  }, []);

  const quantityCounter=(value,product) => {
	if(value =='add'){
		let quantity = Number(JSON.stringify(product.productQuantity))
		
		quantity++;
		console.log(quantity)
		localStorage.setItem('basket', JSON.stringify(product));
	}
	else if (value =='reduce'){
		
		console.log('-----')
	}
	return product;
  }
   
   return (
     <>
         { basketArray.map((product,index) => {
          return (
          	<div key={index} className="basketProductContainer">
				<div className="productImage"><img src="" alt="" /></div>
				<div className="productName">{product.productName}</div>
				<div className="productPrice">{product.productPrice}</div>
				<div className="productDescription">{product.productDescription}</div>

				<div className="quantityContainer">

				
				<div className="addbuton" onClick={()=>{quantityCounter("add",product)}}>+</div>
				<div className="productQuantity">{product.productQuantity}</div>
				<div className="deletebuton"onClick={()=>{quantityCounter("reduce",product)}}>-</div>
				</div>
			</div>)
    
         })
		 
          
          
            
         }
		




     </>
   )
 }
 
 export default Basket
