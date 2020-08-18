import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../dashboard/Button";
import Navabar from "../layouts/Navbar"; 

const _404 = () =>
    <Fragment>
        {/*
            Temporary add a Navbar in Footer Component.
            Must lift it to root component if app grows to more than 3 route components
        */}
        <Navabar/>
        <div className = "not-found text-center">
            <i
                className = "fa fa-4x fa-exclamation-circle"
                aria-hidden = "true"
                style = {{ color: "#7037DA" }}
            ></i>
            <p className = "not-found-info">
                We are sorry, we are afraid the link you have followed is no more here, does not
                exist or is broken. Come back later. Thanks
            </p>
            <Link to = "/">
                <Button className = "btn btn-back">
                    <i
                        className = "fa fa-arrow-left light-color"
                        aria-hidden = "true"
                    ></i>
                    &nbsp;&nbsp; Go back to homepage!
                </Button>
            </Link>
        </div>
    </Fragment>

export default _404;