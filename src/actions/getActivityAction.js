import * as actionTypes from './actionTypes'

export const getActivityRequest = (activityId) => ({
    type: actionTypes.GET_ACTIVITY_REQUEST,
    activityId,
})
