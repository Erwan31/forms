import React,{ Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

class FormTwo extends Component {

    state = {
        maxAge:80,
        submitting: false,
    }

    myFormsSchema = Yup.object().shape({
        name: Yup.string().required('This item is required'),
        lastname: Yup.string().required('This item is required'),
        age: Yup.number().min(20, 'Sorry the minimum is 20').required('This item is required'),
        message: Yup.string().required('This item is required'),
    })

    generateOptions = () => {
        const ageArray = [];

        for(let i = 0; i < this.state.maxAge; i++){
            ageArray.push(i);
        }

        return ageArray.map( (value, i) => {
            return(
                <option key={i} value={value}>{value}</option>
            )
        })
    }

    render(){
        return(
            <Formik
                initialValues={{ name: '', lastname: '', age:'', message:''}}
                validationSchema={this.myFormsSchema}
 /*               validate={ values => {
                    let errors = {};

                    if(!values.name){
                        errors.name = "Sorry the error is required!!";
                    }

                    if(!values.lastname){
                        errors.lastname = "Sorry the error is required!!";
                    }

                    if(values.age){
                        if(values.age <= 20){
                            errors.age = "Sorry the minimum is 20...";
                        }
                    }
                    else{
                        errors.age = "Sorry the error is required!!";
                    }

                    if(!values.message){
                        errors.message = "Sorry the error is required!!";
                    }

                    return errors;
                }
            }*/
                onSubmit= { (values, {resetForm}) => {
                    this.setState({submitting: true});
                    //submit to server
                    setTimeout( () =>{ 
                        console.log(values);
                        resetForm();
                        this.setState({submitting: false});
                    }, 2000);
                    
                }}
            >
                {
                    ({values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? 
                                <div>{errors.name}</div>
                                :null
                                }
                            </div>
                            <div className="form-group">
                                <label>Lastname</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="lastname"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {
                                    errors.lastname && touched.lastname ? 
                                    <div>{errors.lastname}</div>
                                    :null
                                }
                            </div>
                            <div className="form-group">
                                <label>Age</label>
                                <select
                                    name="age"
                                    className="form-control" 
                                    value={values.age}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                {this.generateOptions()}
                                </select>
                                {
                                    errors.age && touched.age ? 
                                    <div>{errors.age}</div>
                                    :null
                                }
                            </div>
                            
                            <div className="form-group">
                                <label>Enter your message here</label>
                                <textarea 
                                    rows="3"
                                    placeholder="Add your message here..."
                                    className="form-control"
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></textarea>
                                {
                                    errors.message && touched.message ? 
                                    <div>{errors.message}</div>
                                    :null
                                }
                            </div>
                            
                            <button 
                                type="submit"
                                className="btn btn-primary"
                                disabled={this.state.submitting}
                            >
                                Submit
                            </button>

                        </form>
                    )
                }
            </Formik>
        )
    }
}

export default FormTwo;