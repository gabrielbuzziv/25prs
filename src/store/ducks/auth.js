export const Types = {
  LOGIN_REQUEST: 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'auth/LOGIN_FAILURE',

  LOGOUT_REQUEST: 'auth/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'auth/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'auth/LOGOUT_FAILURE',
};

const initialState = {
  user: null,

  login: {
    loading: false,
  },
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
        },
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        login: {
          ...state.login,
          loading: false,
        },
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
        },
      };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: data => ({
    type: Types.LOGIN_REQUEST,
    payload: { data },
  }),

  loginSuccess: user => ({
    type: Types.LOGIN_SUCCESS,
    payload: { user },
  }),

  loginFailure: () => ({
    type: Types.LOGIN_FAILURE,
  }),

  logoutRequest: () => ({
    type: Types.LOGOUT_REQUEST,
  }),

  logoutSuccess: () => ({
    type: Types.LOGOUT_SUCCESS,
  }),

  logoutFailure: () => ({
    type: Types.LOGOUT_FAILURE,
  }),
};
