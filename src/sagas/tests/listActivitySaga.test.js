/* eslint-disable */

// import 'babel-polyfill'
import { put, call } from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils'

import * as actions from 'actions/actionTypes.js'
import { listActivities } from 'sagas/listActivitySaga'
import { workerSaga } from 'sagas/listActivitySaga'
import { listActivitiesRequest } from 'actions/listActivitiesAction'

import apiResponse from '__mocks__/activitiesData.js';

// create actions and payloads to be tested
const listActivitiesAction = listActivitiesRequest()
const error = { msg: 'an error message', code: 404 }
const listActivitiesSuccessAction = { type: "LIST_ACTIVITIES_SUCCESS", response: apiResponse }
const listActivitiesFailureAction = { type: "LIST_ACTIVITIES_FAILURE", error }

describe('List activities flow', () => {
    const gen = cloneableGenerator(workerSaga)(listActivitiesAction)
    expect(gen.next().value).toEqual(call(listActivities))

    test('API call SUCCESS', () => {
        const clone = gen.clone()
        expect(clone.next(apiResponse).value).toEqual(put(listActivitiesSuccessAction))
        expect(clone.next().done).toEqual(true)
    })

    test('API call FAILURE', () => {
        const clone = gen.clone()
        expect(clone.throw(error).value).toEqual(put(listActivitiesFailureAction))
        expect(clone.next().done).toEqual(true)
    })

})
