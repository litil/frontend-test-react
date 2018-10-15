import * as actionTypes from 'actions/actionTypes'

const initialState = {
    isFetching: false
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
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
