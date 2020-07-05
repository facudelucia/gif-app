import React from 'react';

const GifGridItem = ({imagen}) => {
    const {title, url} = imagen;

    return ( 
        
            <div className="card animate__animated animate__bounce">
                <img src={url} alt={title} />
                <p >{title}</p>
            </div>
        
        
     );
}
 
export default GifGridItem;