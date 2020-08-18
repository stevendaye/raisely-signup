import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Notifications = ({ notifications }) =>
    notifications !== null && notifications.length > 0 &&
    <div>
        {notifications.map(notification =>
            <div
                key = {notification.id}
                className = {`alert alert-${notification.alert}`}>
                <i className ="fa fa-exclamation-triangle" aria-hidden="true"></i>
                {notification.message}
            </div>
        )}
    </div>

Notifications.propTypes = {
    notifications: PropTypes.array.isRequired
};

const mapStateToPropsNotifications = state => ({
    notifications: getNotifcations(state)
});

// Create a selector to select only the notification state
const getNotifcations = state =>
    getArrayOfObject(state.notificationsState);

// Convert the notification state object into an array
function getArrayOfObject(object) {
    return Object.keys(object).map(key => object[key]);
}

const ConnectedNotifications = connect(mapStateToPropsNotifications)(Notifications);

export default ConnectedNotifications;