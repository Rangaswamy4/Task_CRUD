import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


let restapi_url = "http://localhost:3002/services"


export default class RestDetailsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        axios.get(`${restapi_url}/${this.props.match.params.idno}`)
            .then((res) => this.setState(res.data))
            .catch(() => console.error("APIDATA FECTHING FAILED"))

    
    }

    render() {
        console.log(this.props);
        var { id, name,  email, phone } = this.state

        return (
            <div className="text-center p-5">
                <h2>Record No {this.props.match.params.idno} Details are:</h2>

                <table className="table table-bordered w-25 mx-auto">

                    <tbody class="table-dark">
                        <tr>
                            <th>ID</th>
                            <td>{id}</td>
                        </tr>

                        <tr>
                            <th>NAME</th>
                            <td>{name}</td>
                        </tr>

                        <tr>
                            <th>EMAIL</th>
                            <td>{email}</td>
                        </tr>

                        <tr>
                            <th>PHONE</th>
                            <td>{phone}</td>
                        </tr>

                        <tr>
                            <th>
                                <Link className="btn btn-primary" to="/restapi">GOTO BACK</Link>
                            </th>
                            <td>
                                <button className="btn btn-success" onClick={() => window.print()}>PRINT</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}
