import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import ActivityListItem from '../../molecules/ActivityListItem/index.jsx';

import './styles.css';


export default class DailyActivityList extends React.Component {

    render = () => {
        const { date, activities } = this.props

        return (
            <div className="dailyActivity-list">
                <h2 className="dailyActivity-date">
                    { date }
                </h2>

                <div className="dailyActivity-container">
                    { activities.map(a =>
                        <ActivityListItem {...a} key={`activity-list-item-${a.id}`}/> )
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
    date: PropTypes.string.isRequired
};
