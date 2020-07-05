import React, {Fragment} from 'react'
import GifGridItem from './GifGridItem'
import useFetchGifs from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {
    const {data:images, loading} = useFetchGifs(category)

    return (
        <Fragment>
            <h3 className="animate__animated animate__bounce">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                
                    {images.map(imagen => {
                        return <GifGridItem key={imagen.id} imagen={imagen} />
                    })}
                
            </div> 
        </Fragment>
        
     );
}

export default GifGrid;