import React, { Component } from 'react'


import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import postReducers from '../reducers/postReducers';
  
import PropTypes from 'prop-types';

class Post extends Component {
  componentWillMount(){ // when using redux  pass params as props not as states
     this.props.fetchPosts();
   }

   componentWillReceiveProps(nextProps){
     if(nextProps.newPost){
       this.props.posts.unshift(nextProps.newPost)
     }
   }

//     constructor(props){
//         super(props);
//         this.state={
//             posts:[]   //will come from redux application state
//         }


//     }
//   componentWillMount(){
//       console.log('1 2 3');
//       fetch('http://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())     
//       .then(data => this.setState({ posts: data }))
//       //.then(data => console.log(this.state))
//   }

  render() {
      // now we are getting data from props , previously we were getting data from state
    const postItems = this.props.posts.map(posts => (          
        <div key={posts.id}>
            <h3>{posts.title}</h3>
            <p>{posts.body}</p>
        </div>              
    ));
    return (
      <div>
        <h1>post</h1>        
            { postItems }
      </div>
    )
  }
}

Post.PropTypes={ // only to validate data not related with actuall fetching from redux
    fetchPosts:PropTypes.func.isRequired, //insures fetchPost is getting called
    posts: PropTypes.array.isRequired , // insures that there are not emty posts
    // third property for create
    newPost: PropTypes.object
}
const mapStateToProps = state => ({
  posts:  state.posts.items, //same posts is declared in reducer and comes from reducer.js  //
  //second line for create  single source of truth data for create as 'item' in redux store
   newPost: state.posts.item
});

// so now state no longer exits data shoul be passed in as props

//export default Post;
 //map our state to properties
//export default connect(null,fetchPosts)(Post);


//once we create map state to props pass in as a first parameter as below
 export default connect(mapStateToProps,{fetchPosts})(Post);