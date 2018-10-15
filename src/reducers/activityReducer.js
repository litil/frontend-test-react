import * as actionTypes from 'actions/actionTypes'

const initialState = {
    isFetching: false
}

/**
 * The only one reducer of the application. It handles a few actions such as listing
 * activities, fetching and archiving an activity.
 */
const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ARCHIVE_ACTIVITY_REQUEST:
        {
            // set the isArchiving boolean to true for the corresponding activity
            const { activityId } = action
            const activities = state.activities.map(a => a.id == activityId ?
                Object.assign({}, a, { isArchiving: true } )
                : a )

            return {
                ...state,
                activities
            }
        }
        case actionTypes.ARCHIVE_ACTIVITY_SUCCESS:
        {
            // remove the archived activity
            const { activityId } = action
            const activities = state.activities.map(a => a.id == activityId ?
                Object.assign({}, a, { isArchiving: false, is_archived: true } )
                : a )

            return {
                ...state,
                activities
            }
        }
        case actionTypes.ARCHIVE_ACTIVITY_FAILURE:
        {
            // set the isArchiving boolean to true for the corresponding activity
            const { activityId } = action
            const activities = state.activities.map(a => a.id == activityId ?
                Object.assign({}, a, { isArchiving: false } )
                : a )

            return {
                ...state,
                activities
            }
        }
        case actionTypes.GET_ACTIVITY_REQUEST:
        {
            // get the corresponding activity or create it
            // and set the isFetching boolean to true
            const { activityId } = action
            const activities = state.activities || [{ id: activityId }]
            const data = activities.map(a => a.id == activityId ?
                Object.assign({}, a, { isFetching: true } )
                : a )

            return {
                ...state,
                activities: data
            }
        }
        case actionTypes.GET_ACTIVITY_SUCCESS:
        {
            // get the corresponding activity
            // and set the isFetching boolean to false
            const { activityId } = action
            const { data } = action.response
            const activities = state.activities.map(a => a.id == activityId ?
                Object.assign({}, data, { isFetching: false } )
                : a )

            return {
                ...state,
                activities
            }
        }
        case actionTypes.GET_ACTIVITY_FAILURE:
        {
            // remove the corresponding activity
            const { activityId } = action
            const activities = state.activities.filter(a => a.id != activityId)
            return {
                ...state,
                activities
            }
        }
        case actionTypes.LIST_ACTIVITIES_REQUEST:
        {
            return {
                ...state,
                isFetching: true
            }
        }
        case actionTypes.LIST_ACTIVITIES_SUCCESS:
        {
            // formatting received response
            const { data } = action.response
            return {
                ...state,
                isFetching: false,
                activities: data,
                lastUpdated: action.receivedAt
            }
        }
        case actionTypes.LIST_ACTIVITIES_FAILURE:
        {
            return {
                ...state,
                isFetching: false,
                activities: undefined,
                lastUpdated: action.receivedAt
            }
        }
        default:
            return state
    }
}

export default activityReducer
