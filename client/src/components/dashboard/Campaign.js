import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";

const Campaign = () =>
    <Fragment>
        <div className = "dashboard">
            <Navbar/>
            <div className = "dashboard-content">
                <i className ="fa fa-4x fa-rocket" aria-hidden="true"></i>
                <br/>
                Thank you for joining. You can now start your Campaign.
                <br/>
                To get you started, check out our core services namely
                <span> Solutions</span> and <span>Features</span>
            </div>
        </div>
    </Fragment>

export default Campaign
