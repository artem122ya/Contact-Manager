import React, {Component} from 'react';

class AddContactRef extends Component {

    static defaultProps = {
        name: "Fred Smith",
        email: "fsmith@gmail.com",
        phone: "333-333-3333"
    };


    constructor() {
        super();

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        };

        console.log(contact);
    };

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter name..."
                                defaultValue={name}
                                ref={this.nameInput}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter email..."
                                defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter phone..."
                                defaultValue={phone}
                                ref={this.phoneInput}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Add contact"
                            className="btn btn-block"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContactRef;