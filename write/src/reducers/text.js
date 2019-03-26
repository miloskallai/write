import { Action } from 'rxjs/internal/scheduler/Action';

const initialState = {
  visiblePreview: false
};

const text = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PREVIEW':
      console.log('here');
      return {
        ...state,
        visiblePreview: !state.visiblePreview
      };
    default:
      return state;
  }
};

export default text;
