import React, {Component} from 'react';
import '../home/home.css'
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
class Home extends Component {

    render() {

        return (

            <div className="home">

                <table border="0" align="center">
                    <tr>
                        <th>
                            <h1>React Example</h1>
                        </th>
                    </tr>

                    <tr>
                        <td>
                            <Link to="/adminlogin">
                                <button className=' btn-outline-dark'>Admin LogIn</button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Link to="/userlogin">
                                <button className='btn-outline-dark'>User Login
                                </button>
                            </Link>
                        </td>
                    </tr>


                </table>
            </div>
        );


    }
}
export default Home;
