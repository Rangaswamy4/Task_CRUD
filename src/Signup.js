
import React, { Component } from 'react'
import axios from 'axios'

let restapi_url = "http://localhost:3002/services"


export default class Signup extends Component {

    constructor(props) {
        super(props);

        this.state =
        {
            name: '',
            email: '',
            password:'',
           
            nameErr: '',
            emailErr: '',
            passwordErr: '',
            msg: ''
        }
    }



    handleNameTextbox = (input) => {
        this.setState({ name: input.target.value })
    }

    handleEmailTextbox = (input) => {
        this.setState({ email: input.target.value })
    }

    handlePhoneTextbox = (input) => {
        this.setState({ password: input.target.value })
    }


    HandleFormData = (e) => {

        e.preventDefault();


        var formData = {
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password,
        }

      
        axios
            .post(restapi_url, formData)
            .then(() => this.props.history.push('/restapi'))

    }


    render() {


        console.log(this.props)

        var { name, email, password, msg } = this.state


        return (<>
            <div className="p-5 w-50 mx-auto">

                <h3 className="text-center py-2">USER SIGNP FORM </h3>

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
                        <label class="form-label">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            name="password"
                            value={password}
                            onChange={this.handlePhoneTextbox.bind(this)}
                            required
                        />
                    </div>
                    <div class="control-section m-3">
                   <div class="control_wrapper">
                        <input type="file" id="fileupload" name="UploadFiles"/>
                           </div>
</div>

                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">SUBMIT</button>
                        <span className="text-success">{msg}</span>
                    </div>

                </form>

            </div>
        </>)
    }
}