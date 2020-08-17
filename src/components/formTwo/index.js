import React,{ Component } from 'react';

class FormTwo extends Component {

    state = {
        maxAge:80
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

export default FormTwo;