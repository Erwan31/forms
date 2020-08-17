import React from 'react';

const FormField = ({formData, change, id}) => {

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formData.element){
            case('input'):
                formTemplate = (
                    <input 
                        {...formData.config}
                        value={formData.value}
                        onBlur={ (event) => change({event, id})}
                        onChange={ (event) => change({event, id})}
                        className="form-control"
                    />
                )
            break;

            default:
                formTemplate = null;
            break;
        }

        return formTemplate
    }

    return(
        <>
            {renderTemplate()}
        </>
    )
}

export default FormField;