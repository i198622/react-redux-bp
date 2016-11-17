import {
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  PHOTOS_FAIL,
} from '../constants';
import api from '../utils/api';

export function load(data) {
  return (dispatch) => {
    dispatch({
      type: PHOTOS_REQUEST,
    });

    api.get('/photos')
    .then((result) => {
      dispatch({
        type: PHOTOS_SUCCESS,
        payload: result.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: PHOTOS_FAIL,
        payload: error,
      });
    });

  };
}
