'use client'
import React, { useState,useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Link from 'next/link'
import "./product.css"
import { data } from 'autoprefixer'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Product =() => {
  
    const [allData,setAllData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
            const getData = async()=>{
                setLoading(true)
                const {data} =await axios.get('https://fakestoreapi.com/products')
                setAllData(data)
                setLoading(false)
            
            }
            getData()     
    },[])

    const notify = (product) => toast.success(`${product.title} Başarıyla Eklendi`);
  return (
    loading ? <div>Loading ....</div> :
    <>
    <div className='productContainer'>
        {
            allData.map((data,index)=>(
                <div key={index} className='productItemContainer'>     
                    <Link href={`/product/${data.id}`} className='linkDiv'> 
                    <div className='productImageDiv'>
                        <img style={{width:"100%",height:"100%",objectFit:"contain"}} src={data?.image} alt={data.title}/>
                    </div>                    
                    <div className='productTitleDiv'>{data?.title}</div>
                    <div className='productPriceDiv'>{`${data.price} TL`}</div>
                    </Link>
                    <div className='addCartButton'>
                        <button onClick={() => notify(data)}>
                            Sepete Ekle
                        </button>
                    </div>
                </div>
            ))
        }
        
    </div>
    <ToastContainer
    position="bottom-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    // pauseOnFocusLoss
    draggable
    // pauseOnHover
    theme="colored"
    />
    </>
  )
}

export default Product