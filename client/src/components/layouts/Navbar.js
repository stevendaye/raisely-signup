import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { doSignOut } from "../../actions/auth";
import raisely_icon_white from "../../assets/local/raisely_icon_white.png";
import user_icon from "../../assets/local/user_icon.png";

const Navbar = ({ user, onSignOutUser }) =>
    <Fragment>
        <nav className = "navbar">
            <Link to = "/">
                <div className = "navbar-company">
                    <img
                        className = "logo"
                        alt = "logo"
                        width = "25"
                        height = "25"
                        src = {raisely_icon_white}
                    />
                    <h3 className = "company-name">Raisely</h3>
                </div>
            </Link>
            <ul className = "navbar-menu">
                <li className = "raisely-solutions">Solutions</li>
                <li className = "raisely-features">Features</li>
                { user
                    ? <Fragment>
                        <li>
                            <a href = "#" onClick = {onSignOutUser} className = "sign-out-text">
                                Sign Out
                            </a>
                            <i
                                onClick = {onSignOutUser}
                                className = "fa fa-sign-out sign-out-icon"
                                aria-hidden=  "true"
                            ></i>
                        </li>
                        <li>
                            <span className = "user-info">
                                &nbsp; | &nbsp;
                                <img
                                alt = "User Icon"
                                width = "20"
                                height = "20"
                                src = {user_icon}
                                /> <span className = "user-name">{user.firstName}</span>
                            </span>
                        </li>
                    </Fragment>
                    : null
                }
               
            </ul>
        </nav>
    </Fragment>

Navbar.propTypes = {
    onSignOutUser: PropTypes.func.isRequired,
    user: PropTypes.object
};

const mapStateToProps = state => ({
    user: state.authState.user
});

const mapDispatchToProps = dispatch => ({
    onSignOutUser: () =>
        dispatch(doSignOut())
});

const ConnectedNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default ConnectedNavbar;
