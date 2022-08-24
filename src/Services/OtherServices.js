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

}

export default new OtherServices();



