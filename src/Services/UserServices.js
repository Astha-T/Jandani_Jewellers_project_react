import urls from './WebUrl'
class UserService
{
   
   
   loginUser = (data)=>{
       return fetch(urls.Login,{
    
        method : "POST",
        mode: "cors",
        headers : {
            "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*",
        },
        body : JSON.stringify(data)
       })  
}

 saveData = (data)=>{
    return fetch(urls.Sign_Up,{
        method : "POST",
        mode: "cors",
        headers : {
            "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*",
        },
        body : JSON.stringify(data)
    })
}  


otpVerify = (data) =>{
    return fetch(urls.OTP,{
        method : "POST",
        mode : "cors",
        headers : {
            'Access-Control-Allow-Origin':'*',
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
}

Get_UserProfile = (data) => {
    const userId = localStorage.getItem('user_id');
    console.log(userId)
    return fetch(urls.Get_Profile+userId);
}

Update_UserProfile = (data) => {
    console.log(data)
    return fetch(urls.Update_Profile,{
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

export default new UserService();