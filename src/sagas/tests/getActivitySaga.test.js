/* eslint-disable */

// import 'babel-polyfill'
import { put, call } from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import * as actions from 'actions/actionTypes.js'
import { getActivity } from 'sagas/getActivitySaga'
import { workerSaga } from 'sagas/getActivitySaga'
import { getActivityRequest } from 'actions/getActivityAction'

// create actions and payloads to be tested
const activityId = 7834
const apiResponse = {
    id: 7834,
    created_at: '2018-04-19T09:38:41.000Z',
    direction: 'outbound',
    from: 'Pierre-Baptiste Béchu',
    to: '06 46 62 12 33',
    via: 'NYC Office',
    duration: '120',
    is_archived: false,
    call_type: 'missed',
}
const getActivityAction = getActivityRequest(activityId)
const error = { msg: 'an error message', code: 404 }
const getActivitySuccessAction = { type: "GET_ACTIVITY_SUCCESS", response: apiResponse, activityId }
const getActivityFailureAction = { type: "GET_ACTIVITY_FAILURE", error, activityId }

describe('Get activity flow', () => {
    const gen = cloneableGenerator(workerSaga)(getActivityAction)
    expect(gen.next().value).toEqual(call(getActivity, activityId))

    test('API call SUCCESS', () => {
        const clone = gen.clone()
        expect(clone.next(apiResponse).value).toEqual(put(getActivitySuccessAction))
        expect(clone.next().done).toEqual(true)
    })

    test('API call FAILURE', () => {
        const clone = gen.clone()
        expect(clone.throw(error).value).toEqual(put(getActivityFailureAction))
        expect(clone.next().done).toEqual(true)
    })

})
