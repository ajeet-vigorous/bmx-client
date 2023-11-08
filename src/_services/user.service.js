
import { authHeader, history } from '../_helpers';
import { CONST, SPORT } from '../_config';

export const
    userService = {
       
        login,
        logout,
        changePassword
       

    };

function logout() {
 
    localStorage.removeItem('spuser');
    localStorage.removeItem('hasSeenPopup');
    localStorage.removeItem('MatchList');
    localStorage.removeItem('finalBalance');
    localStorage.removeItem('userData');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('betChipsData');
}

function logoutTeamp() {
  
    localStorage.removeItem('spuser');
    history.push(`#/login`);
    window.location.reload()
}

function onerrorlogout() {

   
    localStorage.removeItem('user');
    history.push(`#/login`);
    window.location.reload();
}
function login(data) {

    
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
          
            let userObj = {
                userinfo: user,
                betChipsData: user && user.data && user.data.betChipsData
            }
           
            if (user) {
                localStorage.setItem('spuser', JSON.stringify(user));
            }
            if (user.data.betChipsData) {
                localStorage.setItem('betChipsData', JSON.stringify(user.data.betChipsData));
            }

            return userObj;
        });
}




function changePassword(data) {

    // console.log("datahjdsdasjkdhsa:", data);

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "PATCH",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateUserPassword`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                changePassword: data.message
            }
            // console.log("SERVICE___changePassword:::", data);
            return userObj;
        });
}






function handleResponse(response) {
    // console.log("response22222   ", response);

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        // console.log("response22222   ", data);
        if (!response.ok) {


            // console.log("response.status___handleResponse::", response.status);

            if (response.status === 401) {
                logoutTeamp();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        if (data.error) {
            if (data.code === 3) {

                onerrorlogout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}