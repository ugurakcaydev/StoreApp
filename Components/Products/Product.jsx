'use client'
import React, { useState,useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Link from 'next/link'
import "./product.css"
import { data } from 'autoprefixer'

const Product =() => {
    const [allData,setAllData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
            const getData = async()=>{
                setLoading(true)
                const {data} =await axios.get('https://fakestoreapi.com/products')
                setAllData(data)
                setLoading(false)
                console.log(data);
            }
            getData()     
    },[])


  return (
    loading ? <div>Loading ....</div> :
    <div className='productContainer'>
        {
            allData.map((data,index)=>(
                <Link href={`/product/${data.id}`} key={index} className='productItemContainer'>        
                    <div className='productImageDiv'>
                        <img style={{width:"100%",height:"100%",objectFit:"contain"}} src={data?.image} alt={data.title}/>
                    </div>                    
                    <div className='productTitleDiv'>{data?.title}</div>
                    <div className='productPriceDiv'>{`${data.price} TL`}</div>
                    <div className='addCartButton'>
                        <button>
                            Sepete Ekle
                        </button>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default Product