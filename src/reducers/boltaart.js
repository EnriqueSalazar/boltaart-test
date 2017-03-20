import {
    FETCH_SERVICE,
    ADD_SELECTED,
} from '../constants/ActionTypes'

const initialState =
    {
        selected: [],
        data: null,
    };


export default function todos(state = initialState, action) {
    switch (action.type) {
        case FETCH_SERVICE:
            return {
                ...state,
                data: action.payload,
            };

        case ADD_SELECTED:
            return {
                ...state,
                selected: [...state.selected, action.payload],
            };
        default:
            return state;
    }
}
