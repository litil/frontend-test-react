import * as actionTypes from 'actions/actionTypes'
import moment from 'moment'
import _ from 'lodash'

const initialState = {
    isFetching: false
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
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
            const groupedResults = _.groupBy(data, result =>
                moment(result.created_at, 'YYYY-MM-DD').format('LL'))

            return {
                ...state,
                isFetching: false,
                data: groupedResults,
                lastUpdated: action.receivedAt
            }
        }
        case actionTypes.LIST_ACTIVITIES_FAILURE:
        {
            return {
                ...state,
                isFetching: false,
                data: undefined,
                lastUpdated: action.receivedAt
            }
        }
        default:
            return state
    }
}

export default activityReducer
