import React from "react";
import InputMask from 'react-input-mask';

const Field = ({ nameField, label, register, validation, errors, isInputMask = false, mask = '' , isReadOnly = false }) => {
    return (
        <>
            <label htmlFor={nameField} className="form-label mb-0">{label}:</label>
            
            {isInputMask && <>
                <InputMask id={nameField} mask={mask} className={`form-control ${errors[nameField] ? 'is-invalid' : ''}`}
                    {...register(`${nameField}`, validation)} />
            </>}

            {!isInputMask && <>

                {!isReadOnly && <>
                    <input id={nameField} type="text" className={`form-control ${errors[nameField] ? 'is-invalid' : ''}`}
                        {...register(`${nameField}`, validation)} />
                </>}

                {isReadOnly && <>
                    <input id={nameField} type="text" className={`form-control ${errors[nameField] ? 'is-invalid' : ''}`}
                        {...register(`${nameField}`, validation)} readOnly />
                </>}
                
            </>}
            
            {errors[nameField] &&
                <div className="invalid-feedback">
                    {errors[nameField].message}
                </div>
            }
            
        </>
    )
}

export default Field;