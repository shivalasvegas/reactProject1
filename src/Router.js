import React from 'react';
import './App.css';


class Form extends React.Component {

	constructor(){
		super();
        this.state=
        {
            username: "" 
        };    	
    }

    myChangeHandler = (event)=>{
        this.setState({username:event.target.value});
    }
    render(){
		
		return(
			<div>
                <p>
                    <h3>
                        Hello {this.state.username}
                    </h3>
                    <input type="text" onChange={this.myChangeHandler}></input>
                </p>

            
            </div>
        );
    }
  
}

export default Form;
