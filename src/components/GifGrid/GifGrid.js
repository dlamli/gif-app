import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGridItem } from '../GifGridItem/GifGridItem';

const GifGrid = ({ category }) => {

   const { data: images, loading } = useFetchGifs(category);

   return (
      <>
         <h3 className="animate__bounceInDown" >{category}</h3>

         {loading && <p className="animate__lightSpeedOutRight" >Loading...</p>}

         <div className="card-grid" >
            {
               images.map(img => (
                  <GifGridItem
                     key={img.id}
                     {...img}
                  />
               ))
            }
         </div >
      </>
   )
}

export default GifGrid;