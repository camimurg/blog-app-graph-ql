import React from 'react';
import { PostInterface } from '../pages/index'

const PostCard = (props: {
  post: PostInterface 
}): React.ReactElement => {

  return (
    <div>
      {props.post.title}
      {props.post.excerpt}
    </div>
  )
}

export default PostCard;
