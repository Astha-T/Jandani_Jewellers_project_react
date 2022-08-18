import { createStore, combineReducers } from "redux"
import UserReducer from './Reducers/UserReducer'
import CategoryReducer from './Reducers/CategoryReducer'
import ProductReducer from './Reducers/ProductReducer'

const store = createStore(combineReducers({
    user : UserReducer,
    category : CategoryReducer,
    product : ProductReducer
},{
    user : {loginstatus:false, user_id:undefined, mobile:undefined, full_name:undefined},
    category : {category_id: undefined},
    product : {product_id: undefined, keyValue: undefined, likeStatus: false},
}))

export default store;