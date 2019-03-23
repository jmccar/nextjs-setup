import { takeEvery } from 'redux-saga/effects';
import { BUTTON_PRESSED } from './actions';

export function* buttonPressedSaga() {
    yield takeEvery(BUTTON_PRESSED, function*() {
        console.log('Hello');
    });
}