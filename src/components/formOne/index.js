import React,{ Component } from 'react';
import FormField from '../../utils/formFields';

class FormOne extends Component {

    state = {
        maxAge:81,
        formData: {
            name:{
                element:'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
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
            <>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="name_input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Lastname</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="lastname_input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <select
                            name="age_input"
                            className="form-control" 
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
            </>
        )
    }
}

export default FormOne;