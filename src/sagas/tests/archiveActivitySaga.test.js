/* eslint-disable */

// import 'babel-polyfill'
import { put, call } from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import * as actions from 'actions/actionTypes.js'
import { archiveActivity } from 'sagas/archiveActivitySaga'
import { workerSaga } from 'sagas/archiveActivitySaga'
import { archiveActivityRequest } from 'actions/archiveActivityAction'

// create actions and payloads to be tested
const activityId = 7834
const apiResponse = {}
const archiveActivityAction = archiveActivityRequest(activityId)
const error = { msg: 'an error message', code: 404 }
const archiveActivitySuccessAction = { type: "ARCHIVE_ACTIVITY_SUCCESS", response: apiResponse, activityId }
const archiveActivityFailureAction = { type: "ARCHIVE_ACTIVITY_FAILURE", error, activityId }

describe('Archive activity flow', () => {
    const gen = cloneableGenerator(workerSaga)(archiveActivityAction)
    expect(gen.next().value).toEqual(call(archiveActivity, activityId))

    test('API call SUCCESS', () => {
        const clone = gen.clone()
        expect(clone.next(apiResponse).value).toEqual(put(archiveActivitySuccessAction))
        expect(clone.next().done).toEqual(true)
    })

    test('API call FAILURE', () => {
        const clone = gen.clone()
        expect(clone.throw(error).value).toEqual(put(archiveActivityFailureAction))
        expect(clone.next().done).toEqual(true)
    })

})
