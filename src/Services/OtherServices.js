import urls from './WebUrl'

class OtherServices {

privacy_Policy = (data) => {
    return fetch(urls.Privacy__Policy)
}

TermsandConditions = (data) => {
    return fetch(urls.Terms_and_Conditions)
}

UNotification = (data) => {
    const userId = localStorage.getItem('user_id');
    return fetch(urls.Notifications+userId)
}

About_us = (data) => {
    return fetch(urls.About)
}

Joinus = (data) => {
    const userId = localStorage.getItem('user_id');
    return fetch(urls.Join+userId,{
        method : "POST",
        mode : "cors",
        headers : {
            'Access-Control-Allow-Origin':'*',
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
}

Subscribe_here = (data) => {
    
    const email = localStorage.getItem('email')
    return fetch(urls.Join+email,{
        method : "POST",
        mode : "cors",
        headers : {
            'Access-Control-Allow-Origin':'*',
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
}


}

export default new OtherServices();



