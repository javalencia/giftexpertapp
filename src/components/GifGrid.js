import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {


  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate_animated animate__fadeIn"> {category} </h3>

      { loading && <p>Cargando...</p> }

      <div className='card-grid animate_animated animate__flash'>
        <ol>
          {
            images.map(item =>
              <GifGridItem
                key={item.id}
                {...item}
              />
            )
          }
        </ol>
      </div>
    </>
  )
}

export default GifGrid
