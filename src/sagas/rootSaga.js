import { fork } from 'redux-saga/effects'
import { listActivitiesWatcherSaga } from './listActivitySaga'
import { getActivityWatcherSaga } from './getActivitySaga'

export default function* rootSaga() {
    yield [fork(listActivitiesWatcherSaga), fork(getActivityWatcherSaga)]
}
