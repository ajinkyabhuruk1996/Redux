import React from 'react'
import Post from '../components/Post';
import PostForm from '../components/Postform';


function MainView() {   
  return (
    <div>
       This is most outer component - Main View
       <PostForm />
       <hr />
       <Post />

    
    </div>
  )
}

export default MainView
