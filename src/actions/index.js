import * as types from '../constants/ActionTypes'
import boltaartData from '../service/data.json';

const fetchService = payload => ({type: types.FETCH_SERVICE, payload});

//loads data emulating a fetch service. Data was modify to user proper images.
export const loadData = () => {
    return (dispatch) => {
            dispatch(fetchService(boltaartData.data));
    }
};

export const addSelected = payload => ({type: types.ADD_SELECTED, payload});

