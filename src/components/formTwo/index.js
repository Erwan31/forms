import React,{ Component } from 'react';
import { Formik } from 'formik';

class FormTwo extends Component {

    state = {
        maxAge:80
    }

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
            >
                {
                    ({values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form>
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
                            </div>
                            
                            <button 
                                type="submit"
                                className="btn btn-primary"
                                onClick={(event)=>this.submitForm(event)}
                                disabled={this.state.loading}
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