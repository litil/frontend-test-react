import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import './styles.css';

export default class ActivityDetailsRow extends React.Component {

    render = () => {
        const { label, value } = this.props

        return (
            <div className="activityDetailsRow-container">
                <span className="activityDetailsRow-label">{ `${label}:` }</span>
                <span className="activityDetailsRow-value">{ value || 'unknown' }</span>
            </div>
        )
    }
}

ActivityDetailsRow.propTypes = {
    /** Activity row label */
    label: PropTypes.string.isRequired,
    /** Activity row value */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
