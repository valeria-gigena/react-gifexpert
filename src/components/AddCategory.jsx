import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

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
        <form onSubmit={onSubmitForm} aria-label="form">
            <input
                type='text'
                onChange={(event) => onInputChange(event)}
                placeholder="Buscar en Giphy"
                value={inputValue}></input>
           
        </form>
    )
}

AddCategory.propTypes = { onNewCategory: PropTypes.func.isRequired }