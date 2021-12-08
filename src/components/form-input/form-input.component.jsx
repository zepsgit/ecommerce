import React from "react";
import './form-input.css'
const FormInput=({handleChange, label, ...otherProps})=>{
    return (
        <div className="group">
        {
            label?(
            <label
                className={`${
                    otherProps.value.length?'shirink':''} form-input-label
                }`}
            >
                {label}
            </label>
            ):null
        }
        <br/>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        </div>
    )
}
export default FormInput;