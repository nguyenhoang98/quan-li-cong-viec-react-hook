import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {};

function PostList(props) {
  const { list } = props;
  return (
    <div>
      <ul>
        {list.map((value, index) => {
          return <li key={index}> {value.title} </li>;
        })}
      </ul>
    </div>
  );
}

export default PostList;
