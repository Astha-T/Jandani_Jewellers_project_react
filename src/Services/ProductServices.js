import urls from './WebUrl'

class Product_Serives 
{
 
Save_Product_Enquiry = (data) => {
    const productId = localStorage.getItem('product_id');
    const mobile = localStorage.getItem('mobile');
    return fetch(urls.Save_Enquiry+productId+"&user_mobile="+mobile+"&product_quantity=1",{
        method : "POST",
        mode : "cors",
        headers : {
            'Access-Control-Allow-Origin':'*',
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
}

Add_fav = (data) => {
    const productId = localStorage.getItem('product_id');
    const userId = localStorage.getItem('user_id');
    return fetch(urls.Add_Favourite+productId+"&user_id="+userId,{
        method : "POST",
        mode : "cors",
        headers : {
            'Access-Control-Allow-Origin':'*',
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
}

Remove_fav = (data) => {
    const productId = localStorage.getItem('product_id');
    const userId = localStorage.getItem('user_id');
    return fetch(urls.Remove_Favourite+productId+"&user_id="+userId,{
        method : "POST",
        mode : "cors",
        headers : {
            'Access-Control-Allow-Origin':'*',
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
}

Book = (data)=> {
    const productId = localStorage.getItem('product_id');
    const userId = localStorage.getItem('user_id');
    return fetch(urls.Book_Jewellery+productId+"&user_id="+userId,{
     method : "POST",
     mode: "cors",
     headers : {
         "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
     },
     body : JSON.stringify(data)
    })  

}

Appointment = (data) => {
    const productId = localStorage.getItem('product_id');
    const userId = localStorage.getItem('user_id');
    return fetch(urls.Book_Appointment+productId+"&user_id="+userId,{
     method : "POST",
     mode: "cors",
     headers : {
         "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
     },
     body : JSON.stringify(data)
    })
}

GetQ = (data)=> {
    const productId = localStorage.getItem('product_id');
    const userId = localStorage.getItem('user_id');
    return fetch(urls.Get_Quotation+productId+"&user_id="+userId,{
     method : "POST",
     mode: "cors",
     headers : {
         "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
     },
     body : JSON.stringify(data)
    })  

}

Search_ProductbyKeyWord = (data) => {
    const userId = localStorage.getItem('user_id');
    const keyWord = localStorage.getItem('keyValue')
    return fetch(urls.Search_Product+userId+"&key_word="+keyWord)
}
}
export default new Product_Serives();
