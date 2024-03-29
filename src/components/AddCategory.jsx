import React, { useState } from 'react'
const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (inputValue.trim().length == 0) return;
        onNewCategory(inputValue);
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input
                type='text'
                onChange={(event) => onInputChange(event)}
                placeholder="Buscar en Giphy"
                value={inputValue}></input>
           
        </form>
    )
}

export default AddCategory
