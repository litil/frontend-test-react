import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import InboundCall from 'components/elements/CallIcons/InboundCall.jsx';
import OutboundCall from 'components/elements/CallIcons/OutboundCall.jsx';
import UnknownCall from 'components/elements/CallIcons/UnknownCall.jsx';

import './styles.css';

/**
 * Display an item in the activity list. A click on this components redirects
 * to the activity details page.
 */
export default class ActivityListItem extends React.Component {

    /**
     * Build a message based on the call type and the
     * call's target.
     */
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

    /**
     * Return the icon components corresponding to the
     * given direction.
     */
    buildDirectionIcon = (direction) => {
        // TODO create an enum for call types
        switch (direction) {
            case "inbound":
                return <InboundCall />
            case "outbound":
                return <OutboundCall />
            default:
                // must not happen as direction has 2 valid values defined in PropTypes
                return <UnknownCall />
        }
    }

    render = () => {
        const { id, direction, created_at, from, call_type, to, handleOnClick } = this.props
        const time = moment(created_at).format('hh:mm A')

        return (
            <div className="activityItem-container" onClick={() => handleOnClick(id)}>
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
    call_type: PropTypes.oneOf(['missed', 'answered', 'voicemail']).isRequired,
    /** Function to handle a click on an activity */
    handleOnClick: PropTypes.func.isRequired
};
