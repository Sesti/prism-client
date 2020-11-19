import React from "react";

const NewsApp = (props) => {
  return (
    <div className="news-content">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <span>{props.pubDate}</span>
    </div>
  );
};

export default NewsApp;
