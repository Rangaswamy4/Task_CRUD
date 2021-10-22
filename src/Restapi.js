
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


let restapi_url = "http://localhost:3002/services"


export default class extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            users: [''],
            msg: ''
        }
    }

    componentDidMount() {

      


        fetch(restapi_url)
            .then(res => res.json())
            .then((result) => this.setState({ users: result }))
            
    }


    handleDeleteRequest = async (id) => {

        if (window.confirm(`Do You delete ${id} Record Now?`)) {

          

            await axios
                .delete(`${restapi_url}/${id}`)
                .then(() => {
                    this.setState({
                        msg: `Record Number ${id} is Deleted`
                    })
                })

            await axios
                .get(restapi_url)
                .then((result) => this.setState({ users: result.data }))

            window.setTimeout(() => { this.setState({ msg: '' }) }, 5000)

        }
    }

    render() {
        return (<>
            <div className="container p-5 ">

                <h2 className="text-center pt-2">REST API CALLS WITH AXIOS PACKAGE</h2>

                <table className="table table-bordered table-dark">

                    <thead className="table-light">
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>phone</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users.map((result, i) => {

                                return (<tr key={i}>
                                    <td>{result.id}</td>
                                    <td>{result.name}</td>
                                    <td>{result.email}</td>
                                    <td>{result.phone}</td>

                                    <td>
                                        <Link to={`/restapi/${result.id}`} className="btn btn-primary">View</Link>
                                    </td>
                                    <td>
                                       <Link to={`/restapi/edit/${result.id}`} className="btn btn-warning">Edit</Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => this.handleDeleteRequest(result.id)}
                                            className="btn btn-danger">Remove</button>
                                    </td>

                                </tr>)
                            })
                        }
                    </tbody>


                </table>

                <output className="text-danger">{this.state.msg}</output>

            </div>
        </>)
    }
}

