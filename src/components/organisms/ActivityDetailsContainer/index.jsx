import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import ActivityDetailsRow from 'components/molecules/ActivityDetailsRow/index.jsx'

import './styles.css';

/**
 * Main component of the activity details view. It displays all the activity
 * information. It displays a button to archive a call.
 */
export default class ActivityDetailsContainer extends React.Component {

    render = () => {
        const { activityDetails, handleOnClickBack, activityId, archiveActivity } = this.props

        return <div className="activityDetails-container">
            <span className="activityDetails-back" onClick={handleOnClickBack}>
                &lt; Back
            </span>
            {
                activityDetails ? <div className="activityDetails-info">
                    <ActivityDetailsRow label="ID" value={activityDetails.id} />
                    <ActivityDetailsRow label="Created at"
                        value={moment(activityDetails.created_at, 'YYYY-MM-DD').format('LL')} />
                    <ActivityDetailsRow label="Direction" value={activityDetails.direction} />
                    <ActivityDetailsRow label="From" value={activityDetails.from} />
                    <ActivityDetailsRow label="To" value={activityDetails.to} />
                    <ActivityDetailsRow label="Via" value={activityDetails.via} />
                    <ActivityDetailsRow label="Duration (s)" value={activityDetails.duration} />
                    <ActivityDetailsRow label="Archived" value={activityDetails.is_archived ? 'yes' : 'no'} />
                    <ActivityDetailsRow label="Call type" value={activityDetails.call_type} />

                    {!activityDetails.is_archived ? <button
                        disabled={activityDetails.isArchiving}
                        className="activityDetails-archive"
                        onClick={() => archiveActivity(activityDetails.id)}>
                        {activityDetails.isArchiving ? 'Archiving...' : 'Archive' }
                    </button> : '' }

                </div>
                : `Activity ${activityId} not found`
            }
        </div>
    }
}

ActivityDetailsContainer.propTypes = {
    /** The activity object to display */
    activityDetails: PropTypes.object,
    /** Function to handle a click on an activity */
    handleOnClickBack: PropTypes.func.isRequired,
    /** Function to archive an activity */
    archiveActivity: PropTypes.func.isRequired
};
