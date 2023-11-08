import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';


export const userActions = {
    login,
    logout,
    changePassword

};


function login(data, props) {
    return dispatch => {
        dispatch(request({ data }));
        userService.login(data)
            .then(
                user => {
                    dispatch(success(user));
                    if (user && user.userinfo && user.userinfo.data && user.userinfo.data.userType === "client") {
                        if (user && user.userinfo && user.userinfo.data && user.userinfo.data.isPasswordChanged === false) {
                            props.history.push(`app/dashboard`) // changepadssword
                        } else {

                            props.history.push(`app/dashboard`)
                        }
                        dispatch(alertActions.success("Login Successfully."));
                    } else {
                        props.history.push(`/login`)
                        dispatch(alertActions.error("Usertype is not Correct for login"));
                    }

                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(user) { return { type: userConstants.LOGIN_FIRST_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_FIRST_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FIRST_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}


function changePassword(data, history) {
    return dispatch => {
        dispatch(request());
        userService.changePassword(data)
            .then(
                users => {
                    let message = users && users.changePassword ? users.changePassword : null;
                    dispatch(alertActions.success(message));
                    dispatch(success(users));
                    history.push("/app/dashboard")
                    console.log("historyhistoryhistoryhistory", history);
                    // dispatch(this.childListActiveUserCredit(eventData));
                    // dispatch(this.childListUser(eventData));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: userConstants.CHANGE_PASSWORD_REQUEST } }
    function success(users) { return { type: userConstants.CHANGE_PASSWORD_SUCCESS, users } }
    function failure(error) { return { type: userConstants.CHANGE_PASSWORD_FAILURE, error } }
}


