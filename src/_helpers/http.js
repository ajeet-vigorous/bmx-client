import axios from "axios";
import { authHeader } from "./auth-header";
import { error, success } from "../_actions/alert.actions"
const base_url = `https://client-rest-api.vercel.app/v1/`;
let headers = {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin':'*',
    "Authorization": authHeader().Authorization
};

const httpGet = async (url, params, isNotify) => {
    try {
        // params = { ...params };
        const result = await axios({
            method: "POST",
            url: base_url + url,
            data: { ...params },
            headers: headers,
        });

        invalidToken(result.msg);

        return result;
    } catch (err) {
        console.error(err);
    }
};


const httpPost = async (url, params, isNotify) => {
    try {
        const result = await axios({
            method: "POST",
            url: base_url + url,
            data: { ...params },
            headers: headers,
        });

        if (result.data.error && isNotify) {
            // error(result.message)
            //alert(result.data.message)
        }
        else if (isNotify && !result.data.error) {
            // success(result.message)
            //alert(result.data.message)
        }

        console.log('@@@@@@@@@@@@@@@@@@@@__http', result);
        return result.data
    } catch (err) {
        console.error(err);
    }
};

const httpPatch = async (url, params, isNotify) => {
    try {
        const result = await axios({
            method: "PATCH",
            url: base_url + url,
            data: { ...params },
            headers: headers,
        });

        if (result.data.error && isNotify) {
            // error(result.message)
            //alert(result.data.message)
        }
        else if (isNotify && !result.data.error) {
            // success(result.message)
            //alert(result.data.message)
        }

        console.log('@@@@@@@@@@@@@@@@@@@@__http', result);
        return result.data
    } catch (err) {
        console.error(err);
    }
};

const invalidToken = (msg) => {
    if (msg === "invalid token") {
        localStorage.removeItem("user-data");
        localStorage.removeItem("access-token");

        window.location.href = "/login";
    }
};

export { httpGet, httpPost, httpPatch };
