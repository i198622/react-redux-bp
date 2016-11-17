import {
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  PHOTOS_FAIL,
} from '../constants';

const initialState = {
  isFetching: false,
  result: [],
};

export default function photos(state = initialState, action) {

  switch (action.type) {
    case PHOTOS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case PHOTOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.payload,
      };

    case PHOTOS_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return {
        ...state
      }
  }
}
