import React, { useState } from "react";
import PropTypes  from 'prop-types';

function InputPost({ addPost }) {
  const [input, setInput] = useState("");

  function onChange(e) {
    const { value } = e.target;

    setInput(value);
  }

  function onKeyDown(e) {
    const { value } = e.target;

    if (e.key === "Enter" && value) {
      addPost(input);
      setInput("");
    }
  }

  return (
    <div className="input">
      <span className="input-header">Create a new post</span>
      <hr />
      <input
        className="input-field"
        placeholder="What do you do?"
        value={input}
        color={"primary"}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

InputPost.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default InputPost;
