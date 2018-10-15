import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"

import { listActivitiesRequest } from 'actions/listActivitiesAction'

import DailyActivityList from 'components/organisms/DailyActivityList/index.jsx';


class ActivityFeed extends React.Component {

    componentDidMount = () => {
        this.props.listActivities()
    }

    render = () => {
        const { groupedActivities, isFetching } = this.props

        if (!isFetching && !groupedActivities) return 'No activity found'
        else if (isFetching) return 'Loading...'
        else return <div>
            {
                Object.entries(groupedActivities).map(([date, dailyActivities]) => {
                    return <DailyActivityList
                        date={date}
                        activities={dailyActivities}
                        key={`daily-activities-${date}`} />
                })
            }
        </div>
    }
}

ActivityFeed.propTypes = {
    /** List of activities */
    activities: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    /** Is the app fetching the activity data? */
    isFetching: PropTypes.bool,
    /** Function performing an API call to list the activities */
    listActivities: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return ({
        listActivities: () => dispatch(listActivitiesRequest())
    })
}

const mapStateToProps = state => {
    const { activityReducer } = state

    const groupedActivities = activityReducer ? activityReducer.data : {}
    const isFetching = activityReducer ? activityReducer.isFetching : false

    return { groupedActivities, isFetching }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed)
