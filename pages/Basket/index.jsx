'use client'


const  Basket= () => {
   const basketArray =  JSON.parse(localStorage.getItem("basket")) 
   console.log(basketArray);
  return (
    <div>
        Basket
    </div>
  )
}

export default Basket