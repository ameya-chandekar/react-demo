import React, {Component} from 'react';
import '../user/userlogin.css'
import axios from 'axios';

class Userlogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    uservalidateHandler = e => {

        e.preventDefault();
        var md5 = require('md5');
        const userInput = {
            email: this.state.email,
            password: md5(this.state.password)
        };
        axios.get('http://localhost:3000/usersdetails').then(res => {
            var result = res.data.filter(result => {
                return userInput.email === result.email && userInput.password === result.password;
            });

            if (result.length > 0) {
                const {email} = this.state;
                localStorage.setItem('email', email);
                this.props.history.push('/userdashboard')
            } else {
                alert("wrong username or password");
            }
        });
    };

    // handleformsubmit=()=>{
    //     const { email} = this.state;
    //     localStorage.setItem('email', email);
    // }


    render() {
        return (
            <div className='sdd'>
                <form>
                    <div className="login form-group">


                        <div>
                            <h1>LOG IN</h1>
                        </div>
                        <div>
                            <label for="name">Email</label>
                            <input type="text" className="form-control" id="" placeholder="enter Email id"
                                onChange={
                                    e => {
                                        this.setState({email: e.target.value});
                                    }
                                }/>
                        </div>
                    <div>
                        <label for="name">Password</label>
                        <input type="text" className="form-control" id="" placeholder="enter password"
                            onChange={
                                e => {
                                    this.setState({password: e.target.value});
                                }
                            }/>
                    </div>
                <p className="fp">
                    <a>Forget password?</a>
                </p>

                <div>
                    <input type="submit" className="btn btn-outline-dark" value="Log In"
                        onClick={
                            this.uservalidateHandler
                        }/>
                </div>


            </div>
        </form>

    </div>
        );

    }
}
export default Userlogin;
