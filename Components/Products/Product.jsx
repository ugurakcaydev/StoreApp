"use client"
import React from 'react'


import Link from 'next/link'
import "./product.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductList } from './product.util'




const Product =() => { 
    
    const addBasket = (data) => {
    const basketItems = JSON.parse( localStorage.getItem("basket"))??[]
    const existingItem = basketItems.find((item) => item.id === data.id);
    if (existingItem) {
      // Ürün zaten sepette varsa, ürün adedini artır
    
        basketItems.forEach((item) =>
          item.id === data.id ? item.productQuantity++ : item
        )

    } else {
    basketItems.push(
      { 
      id:data.id,
      productName:data.productName,
      productPrice:data.productPrice,
      productDescription:data.productDescription, 
      productQuantity: 1 
    })
      
      
    }
    localStorage.setItem("basket",JSON.stringify(basketItems))
  };
    

  return (
    
    <div className='productContainer'>
        {
            ProductList.map((data,index)=>(
                <div key={index} className='productItemContainer'>     
                    <Link href={`/product/${data.id}`} className='linkDiv'> 
                    <div className='productImageDiv'>
                        <img style={{width:"100%",height:"100%",objectFit:"contain"}} src={data?.productImage} alt={data.title}/>
                    </div>                    
                    <div className='productTitleDiv'>{data?.productName}</div>
                    <div className='productPriceDiv'>{`${data?.productPrice} TL`}</div>
                    </Link>
                    <div className='addCartButton'>
                        <button onClick={()=>addBasket(data)}>
                            Sepete Ekle
                        </button>
                    </div>
                </div>
            ))
        }
        
    </div>
    
    
  )
}

export default Product