import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"

import { getActivityRequest } from 'actions/getActivityAction'
import { archiveActivityRequest } from 'actions/archiveActivityAction'

import ActivityDetailsContainer from 'components/organisms/ActivityDetailsContainer'


class ActivityDetails extends React.Component {

    componentDidMount = () => {
        // we might not want to perform a new call if the activity has already been loaded before
        // if so, get it from this.props.activityDetails
        const activityId = this.props.match.params.id
        if (activityId) this.props.getActivity(activityId)
    }

    handleOnClickBack = () => {
        // redirect to the activity feed
        this.props.history.push(`/activities`)
    }

    handleOnClickArchive = (activityId) => {
        // archive the activity and stay in the same view
        // we could redirect to the activity feed
        this.props.archiveActivity(activityId)
    }

    render = () => {
        const { activityDetails } = this.props
        const activityId = this.props.match.params.id

        if (!activityDetails) return `Activity ${activityId} not found`
        else if (activityDetails && activityDetails.isFetching) return 'Loading...'
        else return <ActivityDetailsContainer
            activityId={ this.props.match.params.id }
            activityDetails={ activityDetails }
            handleOnClickBack={ this.handleOnClickBack }
            archiveActivity={ this.handleOnClickArchive } />
    }
}

ActivityDetails.propTypes = {
    /** The activity object to display */
    activityDetails: PropTypes.object,
};

const mapDispatchToProps = dispatch => {
    return ({
        getActivity: (activityId) => dispatch(getActivityRequest(activityId)),
        archiveActivity: (activityId) => dispatch(archiveActivityRequest(activityId))
    })
}

const mapStateToProps = (state, ownProps) => {
    const { activityReducer } = state

    // if no activites have already been loading, we can't find the corresponding activity
    const activities = activityReducer.activities
    if (!activities) return {}

    // get the activity corresponding to the given ID
    const activityId = ownProps.match.params.id
    const activitiesDetails = activities.filter(a => a.id == activityId)
    const activityDetails = activitiesDetails && activitiesDetails.length > 0 ? activitiesDetails[0] : {}

    return { activityDetails }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails)
