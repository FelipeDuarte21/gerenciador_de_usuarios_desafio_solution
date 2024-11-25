import React from "react";
import InputMask from 'react-input-mask';

const Field = ({ nameField, label, register, validation, errors, isInputMask = false, mask = '' , 
    isReadOnly = false , isHandlerValue = false, onChangeHandler = (e)=>{} , valueInput = '' }) => {
    
    return (
        <>
            <label htmlFor={nameField} className="form-label mb-0">{label}:</label>
            
            {isInputMask && <>

                {isHandlerValue && <>
                    <InputMask id={nameField} mask={mask} className={`form-control ${errors[nameField] ? 'is-invalid' : ''}`}
                        {...register(`${nameField}`, validation)} onChange={ e => onChangeHandler(e.target.value)} value={valueInput} 
                    />
                </>}

                {!isHandlerValue && <>
                    <InputMask id={nameField} mask={mask} className={`form-control ${errors[nameField] ? 'is-invalid' : ''}`}
                        {...register(`${nameField}`, validation)} />
                </>}
            
            </>}

            {!isInputMask && <>

                {!isReadOnly && <>
                    
                    {isHandlerValue && <>
                        <input id={nameField} type="text" className={`form-control ${errors[nameField] ? 'is-invalid' : ''}`}
                            {...register(`${nameField}`, validation)} onChange={ e => onChangeHandler(e.target.value) } value={valueInput} />
                    </>}

                    {!isHandlerValue && <>
                        <input id={nameField} type="text" className={`form-control ${errors[nameField] ? 'is-invalid' : ''}`}
                            {...register(`${nameField}`, validation)} />
                    </>}
                
                </>}

                {isReadOnly && <>
                    <input id={nameField} type="text" className={`form-control ${errors[nameField] ? 'is-invalid' : ''}`}
                        {...register(`${nameField}`, validation)} readOnly value={valueInput} />
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