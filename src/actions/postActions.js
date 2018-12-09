import { FETCH_POSTS, NEW_POST} from './types';


export const  fetchPosts =() => dispatch => {
  //return function(dispatch){
         console.log('fetching.....')

        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type:FETCH_POSTS,
            dataIncomingPayloadAjju: data 
         }) 
    );     
        //.then(data => this.setState({ posts: data }))  
        // above  code sets data to componenet state when redux is not used

        // now we will dispatch data using below code // ajju
        // we will not setState of component direcly , instead we need to disatch
      
        // this is response and passed back by payload
  //}
}; 


export const  createPost =(postData) => dispatch => { //postdata as input
   console.log('create ction called');
  
  fetch('http://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(postData)
      })
      .then(res => res.json())     
      //then(data => this.setState({ posts: data }))
      .then(data2 =>         dispatch({
                type:NEW_POST,
               dataIncomingPayloadAjju: data2
           }) 
       );     
      //)
}; 