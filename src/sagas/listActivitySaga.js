import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from 'actions/actionTypes'

// function that makes the api request and returns a Promise for response
export function listActivities() {
    return axios({
        method: 'get',
        baseURL: 'https://aircall-job.herokuapp.com',
        url: '/activities',
    })
}

// worker saga: makes the api call when watcher saga sees the action
export function* workerSaga() {
    try {
        const response = yield call(listActivities)

        if (response.error) throw response.error

        // dispatch a success action to the store with the list of activities
        yield put({
            type: actions.LIST_ACTIVITIES_SUCCESS,
            response,
        })
    } catch (error) {
        yield put({
            type: actions.LIST_ACTIVITIES_FAILURE,
            error,
        })
    }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* listActivitiesWatcherSaga() {
    yield takeEvery(actions.LIST_ACTIVITIES_REQUEST, workerSaga)
}
