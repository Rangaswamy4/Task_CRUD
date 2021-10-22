import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

let restapi_url = "http://localhost:3002/services"

export default class RestEditPage extends Component {

    constructor(props) {
        super(props)

        this.state =
        {
            name: '',
            email: '',
            phone: '',
            nameErr: '',
            emailErr: '',
            phoneErr: '',
            msg: ''
        }
    }
    componentDidMount() {
        axios.get(`${restapi_url}/${this.props.match.params.id}`)
            .then((res) => this.setState(res.data))
            .catch(() => console.error("APIDATA FECTHING FAILED"))
    }


    handleNameTextbox = (input) => {
        this.setState({ name: input.target.value })
    }

    handleEmailTextbox = (input) => {
        this.setState({ email: input.target.value })
    }

    handlePhoneTextbox = (input) => {
        this.setState({ phone: input.target.value })
    }


    HandleFormData = (e) => {

        e.preventDefault();


        var formData = {
            "name": this.state.name,
            "email": this.state.email,
            "phone": this.state.phone,
        }


   
        axios
            .put(`${restapi_url}/${this.props.match.params.id}`, formData)
            .then(() => this.props.history.push('/restapi'))
    }


    render() {

        var { name, email, phone, msg } = this.state


        return (<>
            <div className="p-5 w-50 mx-auto">

                <h3 className="text-center py-2">USER EDIT FORM </h3>

                <form onSubmit={this.HandleFormData.bind(this)}>

                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            name="name"
                            value={name}
                            onChange={this.handleNameTextbox.bind(this)} required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            name="email"
                            value={email}
                            onChange={this.handleEmailTextbox.bind(this)} required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Phone</label>
                        <input
                            type="number"
                            class="form-control"
                            name="phone"
                            value={phone}
                            onChange={this.handlePhoneTextbox.bind(this)}
                            required
                        />
                    </div>

                    <div class="mb-3">
                        <button type="submit" class="mx-2 btn btn-success">UPDATE</button>
                        <Link to="/restapi" class="btn btn-primary">GOT0 BACK</Link>

                        <span className="text-success">{msg}</span>
                    </div>

                </form>

            </div>
        </>)
    }
}