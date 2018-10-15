import { fork } from 'redux-saga/effects'
import { listActivitiesWatcherSaga } from './listActivitySaga'

export default function* rootSaga() {
    yield [fork(listActivitiesWatcherSaga)]
}
