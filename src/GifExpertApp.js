import React, { useState } from 'react';
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories)

    return (
        <>
            <h2>GifRandomApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
}

export default GifExpertApp;