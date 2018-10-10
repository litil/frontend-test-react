import React from 'react'
import PropTypes from 'prop-types'

export default class ActivityFeed extends React.Component {

    componentDidMount = () => {
        // TODO we'll send the action to fetch the activities from here
    }

    render = () => {
        const { activities } = this.props

        return (
            <div>
                Activity list ({activities ? activities.length : -1})
            </div>
        )
    }
}

ActivityFeed.propTypes = {
    /** List of activities */
    activities: PropTypes.object
};
