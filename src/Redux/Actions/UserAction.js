import types from '../ActionTypes'

export const ACTION_USER_LOGIN_LOGOUT = {
    type : types.TYPE_USER_LOGIN_LOGOUT,
    payload : {
        loginstatus : false,
       full_name : undefined,
       user_id : undefined,
       mobile : undefined
    }
}
