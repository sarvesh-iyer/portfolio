import React from 'react'
import './input_field.css'

export const InputField = (props) => {

    let {
        label,
        type,
        name,
        value,
        onChange,
        inputRef,
        placeholder,
        isError
    } = props

    const handleOnChange = (e) => {
        if(onChange) onChange(e)
    } 

    return (
        <div className="input-field-wrapper">
            <label 
                htmlFor={name}
                className="label-text"
            >
                {label}
            </label>
            {type !== 'textarea' ? (
                <input 
                    ref={inputRef}
                    name={name}
                    id={name}
                    type={type}
                    className={[
                        "input-field",
                        isError && "error-field"
                    ].join(' ')}
                    value={value}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                />
            ) : (
                <textarea 
                    ref={inputRef}
                    name={name} 
                    id={name}
                    className={[
                        "input-field",
                        isError && "error-field"
                    ].join(' ')}
                    value={value}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                    rows={6}
                ></textarea>
            )}
        </div>
    )
}
