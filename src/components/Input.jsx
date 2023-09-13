import React from 'react'

function Input({ placeholder, name, value, onChange, onBlur, className, type }) {
    return (
        <div>
            <input className={className} placeholder={placeholder} type={type} name={name} value={value} onChange={onChange} onBlur={onBlur} />
        </div>
    )
}

export default Input
