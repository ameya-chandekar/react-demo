import React, { Component } from 'react'
import '../user/userdashboard.css'
 class Userdashboard extends Component {
constructor(props) {
    super(props)

    this.state = {
         email:'',
    }
}


    componentDidMount(){
        const email=localStorage.getItem('email');
        this.setState(
            {email:email}
        )
    }
    render() {
        return (
            <div className="userdashboard">
                <div className="">
                    <nav className="navbar bg-dark navbar-expand">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">WebSiteName</a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Page 1</a></li>
                                <li><a href="#">Page 2</a></li>
                                <li><a href="#">Page 3</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">

                        <div className="card hovercard">
                            <div className="cardheader">
                                <h3>USER DETLS</h3>
                            </div>
                            <div className="avatar">
                                <img alt="" src="http://lorempixel.com/100/100/people/9/"/>
                </div>
                                <div className="info">
                                    <div className="title">
                                        <a target="_blank" href="https://scripteden.com/">Script Eden</a>
                                    </div>
                                    <div className="desc">{this.state.email}</div>
                                    <div className="desc">Curious developer</div>
                                    <div className="desc">Tech geek</div>
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
