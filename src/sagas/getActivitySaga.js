import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from 'actions/actionTypes'

// function that makes the api request and returns a Promise for response
export function getActivity(activityId) {
    return axios({
        method: 'get',
        baseURL: 'https://aircall-job.herokuapp.com',
        url: `/activities/${activityId}`,
    })
}

// worker saga: makes the api call when watcher saga sees the action
export function* workerSaga(action) {
    try {
        const response = yield call(getActivity, action.activityId)

        if (response.error) throw response.error

        // dispatch a success action to the store with the retrieved activity
        yield put({
            type: actions.GET_ACTIVITY_SUCCESS,
            activityId: action.activityId,
            response,
        })
    } catch (error) {
        yield put({
            type: actions.GET_ACTIVITY_FAILURE,
            activityId: action.activityId,
            error,
        })
    }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* getActivityWatcherSaga() {
    yield takeEvery(actions.GET_ACTIVITY_REQUEST, workerSaga)
}
