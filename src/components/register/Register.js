import React, { Component } from 'react'
import axios from 'axios';
import '../register/register.css'
export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            contactno: '',
            password: '',
            confirmpassword: ''
        };
    }
    onSubmitHandler = e => {
        var md5 = require('md5');
        const Data =
        {
            firstname: this.state. firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            contactno: this.state.contactno,
            password: md5(this.state.password),
            confirmpassword: md5(this.state.confirmpassword)
        };

        if (
            Data.firstname === '' ||
            Data.lastname === '' ||
            Data.email === '' ||
            Data.contactno === '' ||
            Data.password !== Data.confirmpassword ||
            Data.password === '' ||
            Data.confirmpassword === ''
        ) {
            alert('error');
        }
        else {
            axios.post('http://localhost:3000/usersdetails', Data).then(res => {
                alert(Data.firstname + '  '+ Data.lastname + '  ' + 'User successfully added!! ');
                 this.props.history.push('/admindashboard');
            });
        }
    };

    render() {
        return (
            <div className="register">
                <div className="register-wrapper">

                <div><h1>ADD USERS</h1></div>
            <div><label for="">First Name</label>
                <input type="text" className="form-control" id="fname" placeholder="enter your firstname" value={this.state.firstname}
                    onChange={e => { this.setState({ firstname: e.target.value }); }} />
            </div>
            <div>
                <label for="">Last Name</label>
                <input type="text" className="form-control" id="lname" placeholder="enter your lastname" value={this.state.lastname} onChange={e => { this.setState({ lastname: e.target.value }); }} />
            </div>
            <div>
                <label for="">Email</label>
                <input type="email" className="form-control" id="email" placeholder="enter your email" value={this.state.email} onChange={e => { this.setState({ email: e.target.value }); }} />
            </div>
            <div>
                <label for="">Conctact No</label>
                <input type="text" className="form-control" id="cNo" placeholder="enter contact_no " value={this.state.contactno} onChange={e => { this.setState({ contactno: e.target.value }); }} />
            </div>
            <div>
                <label for="">Password</label>
                <input type="password" className="form-control" id="pass" placeholder="enter your password " value={this.state.password} onChange={e => { this.setState({ password: e.target.value }); }} />
            </div>
            <div>
                <label for="">Confirm Password</label>
                <input type="password" className="form-control" id="cPass" placeholder="re-enter your password " value={this.state.confirmpassword} onChange={e => { this.setState({ confirmpassword: e.target.value }); }} />
            </div>
            <div>
                <input type="submit" className="btn btn-outline-dark" value="ADD USER" onClick={this.onSubmitHandler} />
            </div>
                </div>
             
        </div>

        )
    }
}

export default Register
