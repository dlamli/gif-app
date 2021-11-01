import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory/AddCategory";
import GifGrid from "./components/GifGrid/GifGrid";


const GiftExpertApp = () => {

   const [categories, setCategories] = useState(['Chillhop']);

   return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={setCategories} />
         <hr />

         <ol>
            {
               categories.map(category => (
                  <GifGrid
                     key={category}
                     category={category}
                  />
               ))
            }
         </ol>
      </>
   );

}




export default GiftExpertApp;