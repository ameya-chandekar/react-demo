import React, {Component} from 'react';
import axios from 'axios';
import '../Seeallusers/seeallusers.css'
class Seeallusers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/usersdetails').then(res => {
            this.setState({data: res.data})
            console.log(res.data);
        })
    }

    deleteHandler = id => { // e.preventDefault();
        let yes = "yes"

        let confirm = prompt("yes to delete");
        if (confirm != null) {

            axios.delete('http://localhost:3000/usersdetails/' + id).then(res => {

                axios.get('http://localhost:3000/usersdetails').then(res => {
                    this.setState({data: res.data});
                });
            });
        }
    }

    render() {
        const myData = this.state.data;
        return (
            <div className="allusers">

                {/* <button onClick={this.submitHandler}> Show</button> */}

                <table className="table">
                    <tbody>

                        <tr>
                            <h1>
                                <pre>List Of All Users</pre>
                            </h1>
                        </tr>
                        <tr>
                            <th>
                                <h5>Name</h5>
                            </th>

                            <th>
                                <h5>Email</h5>
                            </th>
                            <th>
                                <h5>Contact No</h5>
                            </th>

                        </tr>
                        {
                        myData.map((item) => <tr key={
                            item.id
                        }>
                            <td>{
                                item.firstname
                            }
                                {
                                item.lastname
                            }</td>

                            <td>{
                                item.email
                            }</td>
                            <td>{
                                item.contactno
                            }</td>

                            <td>
                                <button className='btn btn-outline-dark'
                                    onClick={
                                        () => this.deleteHandler(item.id)
                                }>Delete</button>
                            </td>
                            <td>
                                <button className='btn btn-outline-dark'
                                    onClick={
                                        () => this.EditHandler(item.id)
                                }>Edit</button>
                            </td>
                        </tr>)
                    } </tbody>
                </table>
            </div>
        );
    }

}
export default Seeallusers;
