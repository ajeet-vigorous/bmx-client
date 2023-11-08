// import React from 'react'
// import  { Redirect } from 'react-router-dom'
// return <Redirect to='/login'  />

export function authHeader() {
    // return authorization header with jwt token
    console.log('11111111111');
    let user = JSON.parse(localStorage.getItem('spuser'));
    console.log("usersssssssss : ", user);

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiIxODI0IiwidXNlcl90eXBlX2lkIjoiNiJ9LCJpYXQiOjE2ODQyOTkyMTN9.L7_RUQ6wSvIKRS45YhwtOSH-vCoZR7XwFY37C99a9rg