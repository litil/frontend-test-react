import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import ActivityListItem from 'components/molecules/ActivityListItem/index.jsx';

import './styles.css';

/**
 * Displays all activities of a day.
 */
export default class DailyActivityList extends React.Component {

    render = () => {
        const { date, activities, handleOnClick } = this.props

        return (
            <div className="dailyActivity-list">
                <h2 className="dailyActivity-date">
                    { date }
                </h2>

                <div className="dailyActivity-container">
                    { activities.map(a =>
                        <ActivityListItem
                            {...a}
                            key={`activity-list-item-${a.id}`}
                            handleOnClick={handleOnClick}/> )
                    }
                </div>
            </div>
        )
    }
}

DailyActivityList.propTypes = {
    /** List of activities in a day */
    activities: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    /** Date of the activities */
    date: PropTypes.string.isRequired,
    /** Function to handle a click on an activity */
    handleOnClick: PropTypes.func.isRequired
};
