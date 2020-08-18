import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Signup from "../dashboard/Signup";
import Button from "../dashboard/Button";
import Footer from "./Footer";
import raisely_icon from "../../assets/local/raisely_icon.png";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.onTarget = this.onTarget.bind(this);
    }

    onTarget() {
        const input = document.getElementsByClassName("first-name")[0];
        input && input.focus();
    }

    render() {
        const { auth: { token, isAuthenticated } } = this.props;
        if (token && isAuthenticated) {
            return <Redirect to = "/campaign"/>
        }

        return (
            <Fragment>
                <div className = "landing">
                    <aside className = "landing-aside">
                        <div className = "wrap-aside">
                            <div className = "company">
                                <img
                                    src = {raisely_icon}
                                    width = "30"
                                    height = "30"
                                    alt = "logo"
                                />
                                <h1 className = "name company-name">
                                    Raisely
                                </h1>
                            </div>
                            <Signup/>
                            <Footer/>
                        </div>
                    </aside>
                    <section className = "landing-welcome">
                        <div className = "wrap-welcome">
                            <h2>
                                Build outstanding fundraising websites with Raisely to grow your cause,
                                campaign, or charity for free.
                            </h2> 
                            <p className = "text-secondary medium my">
                                We made this all-in-one platform to live and support your cause to the end.
                            </p>
                            <Button
                                className = "btn btn-primary btn-start"
                                onClick = {this.onTarget}
                            >
                                <i className ="fa fa-rocket" aria-hidden="true"></i>
                                &nbsp; Get Started
                            </Button>
                        </div>
                    </section>
                </div>
            </Fragment>
        );
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.authState
})

const ConnectedLanding = connect(mapStateToProps)(Landing);
export default ConnectedLanding;
