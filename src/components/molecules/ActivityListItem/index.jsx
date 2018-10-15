import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import InboundCall from '../../elements/CallIcons/InboundCall.jsx';
import OutboundCall from '../../elements/CallIcons/OutboundCall.jsx';
import UnknownCall from '../../elements/CallIcons/UnknownCall.jsx';

import './styles.css';

export default class ActivityListItem extends React.Component {

    buildCallTypeInfo = (callType, to) => {
        const target = to || 'unknown target'

        // TODO create an enum for call types
        switch (callType) {
            case "answered":
                return `called ${target}`
            case "missed":
                return `tried to call on ${target}`
            case "voicemail":
                return `left a message to ${target}`
            default:
                return `unknown action to ${target}`
        }
    }

    buildDirectionIcon = (direction) => {

        // TODO create an enum for call types
        switch (direction) {
            case "inbound":
                return <InboundCall />
            case "outbound":
                return <OutboundCall />
            default:
                return <UnknownCall />
        }
    }

    render = () => {
        const {direction, created_at, from, call_type, to} = this.props
        const time = moment(created_at).format('hh:mm A')

        return (
            <div className="activityItem-container">
                <div className="activityItem-direction">
                    { this.buildDirectionIcon(direction) }
                </div>

                <div className="activityItem-main">
                    <div className="activityItem-info">
                        <span className="activityItem-from">{ from }</span>
                        <span className="activityItem-target">
                            { this.buildCallTypeInfo(call_type, to) }
                        </span>
                    </div>
                    <span className="activityItem-time">{time}</span>
                </div>
            </div>
        )
    }
}

ActivityListItem.propTypes = {
    /** Activity id */
    id: PropTypes.number.isRequired,
    /** Activity created_at */
    created_at: PropTypes.string.isRequired,
    /** Activity direction */
    direction: PropTypes.oneOf(['inbound', 'outbound']).isRequired,
    /** Activity source */
    from: PropTypes.string.isRequired,
    /** Activity target */
    to: PropTypes.string,
    /** Activity via */
    via: PropTypes.string.isRequired,
    /** Is the activity archived? */
    is_archived: PropTypes.bool.isRequired,
    /** Activity via */
    call_type: PropTypes.oneOf(['missed', 'answered', 'voicemail']).isRequired
};