import React, { Component } from 'react'
import '../user/userdashboard.css'
import axios from 'axios'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
 class Userdashboard extends Component {
constructor(props) {
    super(props)

    this.state = {
        firstname:'',
        lastname:'',
         email:'',
         contactno:'',

    }
}


    componentDidMount(){
        const email=localStorage.getItem('email');
        // this.setState(
        //     {email:email}
        // )
        console.log(email)
        axios.get('http://localhost:3000/usersdetails').then(res => {
			var result = res.data.filter(result => {
                return email === result.email;
                
            }
            
            );
            this.setState(
                {   firstname:result[0].firstname,
                    lastname:result[0].lastname,
                    email:result[0].email,
                    contactno:result[0].contactno,
                    
                }
            )
          
    })}

    render() {
        return (
            <div className="userdashboard">
                <div className="">
                    <nav className="navbar bg-dark navbar-expand">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">React demo</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><a href="#"></a></li>
                                <li><Link to="/userlogin"><button className='btn-outline-dark'>logout</button></Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="usercard">
                <div className="row" >
                    <div className="col-6">

                        <div className="card hovercard">
                            <div className="cardheader">
                                <h3>USER DETAILS</h3>
                            </div>

                            <div className="avatar">
                                <img alt="" src="http://lorempixel.com/100/100/people/9/"/>
                            </div>
                                <div className="info">
                                    {/* <div className="title">
                                        <a target="_blank" href="https://scripteden.com/">Script Eden</a>
                                    </div> */}
                                    <div className="desc">
                                        <span>NAME:</span>
                                    <span > 
                                    {this.state. firstname} &nbsp;
                                      {this.state.lastname} 
                                      </span></div>
                                    

                                <div className="desc">
                                    <span>EMAIL:</span><span>{this.state.email}</span></div>
                                <div className="desc">
                                    <span>CONTACT_NO:</span>
                                    <span>{this.state.contactno}</span></div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                





                </div>
                )
            }
        }
        
        export default Userdashboard
