import React from "react";

export default function NewsAppExpanded(props) {
  return (
    <div className="news-content">
      <nav className="app-expand-header">
        <h1>News App</h1>
      </nav>
      <div className="news-card-container">
        {props.data.map((n, i) => {
          return (
            <div
              key={n.title}
              className={`news-card ${i === props.index ? "active" : ""}`}
            >
              <img loading="lazy" src={n?.url} alt={n.title} />
              <h1>{n.title}</h1>
              <p>{n?.description}</p>
              <span>{n?.pubDate}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
