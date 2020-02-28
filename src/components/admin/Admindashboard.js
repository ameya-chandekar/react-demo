import React, { Component } from 'react';
import '../admin/admindash.css';

import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
class Admindashboard extends Component {

    render() {

        return (

            <
            div className = "home" >

            <
            table border = "0"
            align = "center" >
            <
            tr >
            <
            th >
            <
            h1 > ADMIN SECTION < /h1> <
            /th> <
            /tr>

            <
            tr >
            <
            td >
            <
            Link to = "/adduser" >
            <
            button className = ' btn-outline-dark' > ADD USER < /button> <
            /Link> <
            /td> <
            /tr>

            <
            tr >
            <
            td >
            <
            Link to = "/seeallusers" >
            <
            button className = 'btn-outline-dark' > SEE ALL USER < /button> <
            /Link> <
            /td> <
            /tr> <
            tr >
            <
            td rowSpan = '2' >
            <
            Link to = "/" >
            <
            button className = 'btn-outline-dark' > LogOut < /button> <
            /Link> <
            /td> <
            /tr>


            <
            /table> <
            /div>
        );


    }
}
export default Admindashboard