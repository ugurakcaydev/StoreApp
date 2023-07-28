import { useEffect } from "react";



const  Basket= () => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const basketArray =JSON.parse(localStorage.getItem('basket')) 
        console.log(basketArray);
      }
   
   return (
     <div>
         Basket
     </div>
   )
 }
 
 export default Basket