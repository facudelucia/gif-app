import React, {useState} from 'react';
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");
    
    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim() === "") return;
        setCategories(cats => [inputValue, ...cats]);
        setInputValue("");
    }

    return ( 
        
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Busca un gif"
                        onChange={handleChangeInput}
                    />
                    <input 
                        type="submit"
                        value="Search"
                        
                        onClick={handleSubmit}
                    />
                </form>

       
     );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
 
export default AddCategory;