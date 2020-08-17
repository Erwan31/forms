import React from 'react';

const FormField = ({formData}) => {

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formData.element){
            case('input'):
                formTemplate = (
                    <input type="text"/>
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