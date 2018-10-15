import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'

import DailyActivityList from 'components/organisms/DailyActivityList/index.jsx';

export default class ActivityFeed extends React.Component {

    componentDidMount = () => {
        // TODO we'll send the action to fetch the activities from here
    }

    render = () => {
        const { activities } = this.props

        let groupedResults = _.groupBy(activities, (result) =>
            moment(result['created_at'], 'YYYY-MM-DD').format('LL'));

        return (
            <div>
            {
                Object.entries(groupedResults).map(([date, dailyActivities]) => {
                    return <DailyActivityList
                        date={date}
                        activities={dailyActivities}
                        key={`daily-activities-${date}`} />
                })
            }
            </div>
        )
    }
}

ActivityFeed.propTypes = {
    /** List of activities */
    activities: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};
