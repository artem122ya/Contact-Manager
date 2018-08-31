import React, {Component} from 'react';
import PropTypes from "prop-types";
import { Consumer } from "../../context"
import axios from "axios";
import {Link} from "react-router-dom";

class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired
    };

    state = {
        showContactInfo: false
    };

    onShowClick = e => {
      this.setState({
          showContactInfo: !this.state.showContactInfo
      });
    };

    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        } catch(e) {
            console.log(e);
        }
        dispatch({type: "DELETE_CONTACT", payload: id})
    };

    render() {
        const { contact } = this.props;
        const { showContactInfo } = this.state;
        return (
            <Consumer>
                {value =>
                    <div className="card card-body mb-3">
                        <h4>
                            {contact.name}{" "}
                            <i
                                className="fas fa-sort-down"
                                onClick={this.onShowClick}
                                style={{cursor: "pointer"}}
                            />
                            <i
                                className="fas fa-times"
                                onClick={this.onDeleteClick.bind(this, contact.id, value.dispatch)}
                                style={{cursor: "pointer", float: "right", color: "red"}}
                            />
                            <Link to={`/contact/edit/${contact.id}`}>
                                <i
                                    className="fas fa-edit mr-2"
                                    style={{cursor: "pointer", float: "right", color: "black"}}
                                />
                            </Link>
                        </h4>
                        {showContactInfo ?
                            <ul className="list-group">
                                <li className="list-group-item">Email: {contact.email}</li>
                                <li className="list-group-item">Phone: {contact.phone}</li>
                            </ul>
                            : null}

                    </div>
                }
            </Consumer>


        );
    }
}

export default Contact;