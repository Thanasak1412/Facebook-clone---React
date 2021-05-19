import React from "react";
import PropTypes from 'prop-types';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Post({id, title, deletePost}) {
  return (
    <div className="post">
      <button className="post-delete" onClick={() => deletePost(id)}><HighlightOffIcon /></button>
      <div className="post-title">{title}</div>
      <img
        src={`https://source.unsplash.com/random/sig=${id}`}
        alt="img-post"
      />
    </div>
  );
}

Post.propTypes = {
  id : PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Post;