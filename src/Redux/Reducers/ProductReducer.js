import types from '../ActionTypes'

export default function(state={},action)
{
    switch(action.type)
    {
        case types.TYPE_SHOW_PRODUCT: 
                    return action.payload;       
        default: return state;
    }
}
