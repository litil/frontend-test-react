import * as actionTypes from './actionTypes'

export const archiveActivityRequest = (activityId) => ({
    type: actionTypes.ARCHIVE_ACTIVITY_REQUEST,
    activityId,
})
