import {
    AssyncStorange
} from 'react-native';

export const FIREBASEURL = `https://rn-bna-app.firebaseio.com`
export const APIKEY = `AIzaSyAwwP6hoYTTEvIQhFL_wxUqTz69pfY4d2Y`
export const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/
signupNewUser?key=${APIKEY}`;
export const SIGNIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/
verifyPassword?key=${APIKEY}`;
export const REFRESH = ``;

export const getTokens = () => { 
    AssyncStorange.multiGet([
        '@nba_app@token', 
        '@nba_app@refreshToken',
        '@nba_app@expireToken',
        '@nba_app@uid'
    ]).then(value => {
        cb(value);
    });

}

export const setTokens = (values, cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600 + 1800);

    AssyncStorange.multiSet([
        ['@nba_app@token', values.token],
        ['@nba_app@refreshToken', values.refToken],
        ['@nba_app@expireToken', expiration.toString()],
        ['@nba_app@uid', values.uid]
    ]).then(response => {
        cb();
    });

}