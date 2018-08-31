import React, {Component} from 'react';
import { Consumer } from "../../context"
import TextInputGroup from "../layout/TextInputGroup"
import axios from "axios";

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {name: ""}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = response.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state;

        if (name === "") {
            this.setState({ errors: { name: "Name is required"}});
            return;
        }

        if (email === "") {
            this.setState({ errors: { name: "Email is required"}});
            return;
        }

        if (phone === "") {
            this.setState({ errors: { name: "Phone is required"}});
            return;
        }

        const { id } = this.props.match.params;

        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {name, email, phone});
        dispatch({type: "UPDATE_CONTACT", payload: response.data});

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {name: ""}
        });
        this.props.history.push("/");
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value =>
                    <div className="card mb-3">
                        <div className="card-header">Edit contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                                <TextInputGroup
                                    label="Name"
                                    name="name"
                                    value={name}
                                    placeholder="Enter name..."
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <TextInputGroup
                                    label="Email"
                                    name="email"
                                    value={email}
                                    placeholder="Enter email..."
                                    type="email"
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <TextInputGroup
                                    label="Phone"
                                    name="phone"
                                    value={phone}
                                    placeholder="Enter phone..."
                                    onChange={this.onChange}
                                    error={errors.phone}
                                />
                                <input
                                    type="submit"
                                    value="Update contact"
                                    className="btn btn-block"
                                />
                            </form>
                        </div>
                    </div>
                }
            </Consumer>
        );
    }
}

export default EditContact;