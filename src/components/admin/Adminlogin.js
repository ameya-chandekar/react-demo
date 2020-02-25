import React, { Component } from 'react'
import '../admin/adminlogin.css'
export class Adminlogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
           adminid: '',
            adminpassword: ''
        };
    }

    validateHandler=e=>{
       
        e.preventDefault();
        const userInput = {
            adminid: this.state.adminid,
            adminpassword: this.state.adminpassword
        };
			if (userInput.adminid=='admin' && userInput.adminpassword=='admin') {
				
			 this.props.history.push('/admindashboard')
			} else {
				alert("wrong username or password");
    }
}
    


    render() {
        return (
            <div className='Admin-login'>
        <div className="form-group Admin-login-wrapper">
            

                    <div><h1>ADMIN LOG IN</h1></div>
                    <div><label for="name">ADMIN ID</label>
                        <input type="text" className="form-control" id="" placeholder="enter admin id" onChange={e => {
                                this.setState({
                                    adminid: e.target.value,
                                });}}/>
                    </div>
                    <div>
                        <label for="name">PASSWORD</label>
                        <input type="password" className="form-control" id="" placeholder="enter password" onChange={e => {
                                this.setState({
                                    adminpassword: e.target.value,
                                });
                                }}/>
                    </div>
                    <div>
                    <input type="submit" className="btn btn-outline-dark" value="Log In" onClick={this.validateHandler}/>
                </div>
                
             

                </div> 
            </div>
        )
    }
}

export default Adminlogin
