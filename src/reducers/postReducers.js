import { FETCH_POSTS ,NEW_POST} from '../actions/types';

const initialState={
    items:[],
    item :{}    
};

//here assign state as initialState n notice equal to = 
////
export default function(state= initialState,action){
    switch(action.type){
        
        case FETCH_POSTS :
             console.log('switch case FETCH_POSTS');
            return  {
                ...state,
                items : action.dataIncomingPayloadAjju 
            }
        case NEW_POST :
            console.log('switch case FETCH_POSTS');
           return  {
               ...state,
               item : action.dataIncomingPayloadAjju 
           }
        default :
         return state;
    }
};