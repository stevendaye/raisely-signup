import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Notifications from "./Notifications";
import { doShowNotification } from "../../actions/notifications";
import { doSignUp, doCheck } from "../../actions/auth"; 

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            isSubmitted: false,
            existingEmail: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onCheck() {
        const { email, existingEmail } = this.state;
        
        if (!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)) {
            this.props.onShowNotification(
                "You email address needs an at symbol(@) and at least one dot(.) with no capitalization", "danger"
            );
        } else {
            this.props.onCheckUser(email);
        }
        if (email && email === existingEmail) {
            this.props.onShowNotification(
                "The email (" + existingEmail +
                ") address has already been registered. Have You tried logging in?",
                "danger"
            );
        }
    }
  
    onSubmit(e) {
        e.preventDefault();
        const {
            firstName, lastName, email, password
        } = this.state;

        if (!/^[a-zA-Z-][^0-9._!¡?÷?¿/\\+=@#$%ˆ"'&*(){}|~<>;:[\]]{1,30}$/.test(firstName)) {
            this.props.onShowNotification(
                "Your firstname must be at least 2 characters long with no special characters except hyphens (-)", "danger"
            );
        }

        if (!/^[a-zA-Z-][^0-9._!¡?÷?¿/\\+=@#$%ˆ"'&*(){}|~<>;:[\]]{1,30}$/.test(lastName)) {
            this.props.onShowNotification(
                "Your lastname must be at least 2 characters long with no special characters except hyphens (-)", "danger"
            );
        }

        if (!/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)) {
            this.props.onShowNotification(
                "You email address needs an at symbol(@) and at least one dot(.) with no capitalization", "danger"
            );
        }

        if (!/^[a-zA-Z0-9]{6,}$/.test(password)) {
            this.props.onShowNotification(
                "Your password must be at least six characters long and can only contain strings and numbers",
                "danger"
            );
        }

        if (/^[a-zA-Z-][^0-9._!¡?÷?¿/\\+=@#$%ˆ"'&*(){}|~<>;:[\]]{1,30}$/.test(firstName)
        && /^[a-zA-Z-][^0-9._!¡?÷?¿/\\+=@#$%ˆ"'&*(){}|~<>;:[\]]{1,30}$/.test(lastName)
        && /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)
        && /^[a-zA-Z0-9]{6,}$/.test(password)) {
            this.props.onSignUpUser({
                firstName, lastName, email, password
            });
            this.setState({ isSubmitted: true });
        } else {
            this.setState({ isSubmitted: false });
        }
    }

    componentDidUpdate(prevProps) {
        const { notifications, auth } = prevProps;
        const { email } = this.state;

        if ( this.props.notifications.length !== notifications.length) {
            this.setState({ isSubmitted: false });
        }
        if ((this.props.auth.status !== auth.status) && this.props.auth.status === "EXISTS") {
            this.props.onShowNotification(
                "The email (" + email +
                ") address has already been registered. Have You tried logging in?",
                "danger"
            );
            this.setState({ existingEmail: email });
        }
    }
    
    render() {
        const {
            firstName, lastName, email, password, isSubmitted
        } = this.state;
        const { notifications } = this.props;

        return (
            <div className="signup">
                <p className="text-center welcome-text">
                    Welcome To Raisely.
                    Get Started with your fundraising campaign by owning an account today!
                </p>
                <Notifications/>
                <form className = "form" onSubmit = {this.onSubmit} autoComplete="off">
                    <div className = "form-group">
                        <input
                            type = "text"
                            name = "firstName"
                            value = {firstName}
                            className = "first-name"
                            placeholder = "Firstname"
                            onChange = {this.onChange}
                            required
                        />
                    </div>
                    <div className = "form-group">
                        <input
                            type = "text"
                            name = "lastName"
                            value = {lastName}
                            className = "last-name"
                            placeholder = "Lastname"
                            onChange = {this.onChange}
                            required
                        />
                    </div>
                    <div className = "form-group">
                        <input
                            type = "email"
                            name = "email"
                            value = {email}
                            className = "email"
                            placeholder = "Email"
                            onChange = {this.onChange}
                            onBlur = {this.onCheck}
                            required
                        />
                    </div>
                    <div className = "form-group">
                        <input
                            type = "password"
                            name = "password"
                            value = {password}
                            className = "password"
                            placeholder = "Password"
                            onChange = {this.onChange}
                            required
                        />
                    </div>
                    <input
                        type = {
                            isSubmitted && notifications.length === 0
                            ? "button" : "submit"
                        }
                        className = {
                            isSubmitted && notifications.length === 0
                            ? "btn btn-dim" : "btn btn-primary btn-signup"
                        }
                        value = {
                            isSubmitted && notifications.length === 0
                            ? "Creating Your Account..." : "Create My Account"
                        }
                    />
                </form>
            </div>
        );
    }
}

Signup.propTypes = {
    onShowNotification: PropTypes.func.isRequired,
    onCheckUser: PropTypes.func.isRequired,
    onSignUpUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    notifications: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    notifications: Object.keys(state.notificationsState),
    auth: state.authState
});

const mapDispatchToProps = dispatch => ({
    onShowNotification: (message, alert) =>
        dispatch(doShowNotification({ message, alert })),
    onCheckUser: email =>
        dispatch(doCheck(email)),
    onSignUpUser: user =>
        dispatch(doSignUp(user))
});

const ConnectedSignup = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default ConnectedSignup;
