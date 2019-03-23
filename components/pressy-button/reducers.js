import { BUTTON_PRESSED } from './actions';

export const buttonPresses = (state = 0, action) => {
    switch (action.type) {
        case BUTTON_PRESSED:
            return state + 1;
        default:
            return state;
    }
};
