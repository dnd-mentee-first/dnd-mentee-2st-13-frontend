/*
 * 폼 상태를 관리하고 결과를 상태에 담아주는 모듈
*/
import { createAction, handleActions } from 'redux-actions';
import createPromiseThunk from '../lib/api/createPromiseThunk';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD'; // 특정 값을 수정하는데 사용
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; // 폼에 있는 내용을 초기화 하는데 사용
const REGISTER = 'auth/REGISTER'; // 회원가입
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'; // 회원가입 성공
const LOGIN = 'auth/LOGIN'; // 로그인
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'; //로그인 성공
const SET_ERROR = 'auth/SET_ERROR';

export const changeField = createAction(
    CHANGE_FIELD,
    ({ type, key, value }) => ({
        type, // register, login
        key, // email, password, passwordConfirm
        value // 실제 바꾸려는 값
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, type => type); // register / login
export const register = createPromiseThunk(REGISTER, authAPI.register);
export const login = createPromiseThunk(LOGIN, authAPI.login);

const initialState = {
    register: {
        user_id: '',
        user_password: '',
        passwordConfirm: '',
        user_name: '',
        user_email: '',
        area_id: 1,
        sigungu_id: 105,
    },
    login: {
        user_id: '',
        user_password: ''
    },
    authorization: null,
};


const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { type, key, value } }) => ({
            ...state,
            [type]: {
                ...state[type],
                [key]: value
            }
        }),
        [INITIALIZE_FORM]: (state, { payload: type }) => ({
            ...state,
            [type]: initialState[type]
        }),
        [REGISTER_SUCCESS]: (state, { payload }) => ({
            ...state,
            authorization: payload.data
        }),
        [LOGIN_SUCCESS]: (state, { payload }) => ({
            ...state,
            authorization: payload.data
        })
    },
    initialState
);

export default auth;
