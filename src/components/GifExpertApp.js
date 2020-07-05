import React,{Fragment, useState} from 'react';
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Welcome"])
  
    return ( 
        <Fragment>
            <h2>GifRandomApp</h2>
            <hr />
            <AddCategory setCategories={setCategories}/>
            {categories.map((category) => {
                return <GifGrid key={category} category={category}/>
            })}
        </Fragment>
     );
}
 
export default GifExpertApp;